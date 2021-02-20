import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model} from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import {ObjectID } from 'mongodb';

import { Company } from '../company/interface/company.interface';
import {
  UpdateCompanyDTO
} from '../company/dto/company.dto';
import { Job } from './interface/job.interface';
import { CompanyObjectIdDTO, CreateJobDTO, ObjectIdDTO, UpdateJobDTO } from './dto/job.dto';
import * as moment from 'moment';
import { Connection } from 'mongoose';
import { isMongoId } from 'class-validator';

//import { CompanyService } from '../company/company.service';
@Injectable()
export class JobService {
  constructor(@InjectModel('Job') private JobModel: Model<Job>,@InjectConnection() private connection: Connection) {}

  async create(createJobDTO: CreateJobDTO): Promise<any> {
    createJobDTO.ifDeleted = false;
    const lastJob = await this.JobModel.findOne({}, { jobCodeUnique: 1 }, { sort: { jobCodeUnique: 1 } });
    let LastJobUnique = 1;
    if (lastJob !== null && lastJob.jobCodeUnique) {
      LastJobUnique = lastJob.jobCodeUnique + 1;
    }
    //console.log(createJobDTO.company);
    //console.log(await this.connection.collection('companies').find({_id :new ObjectID(createJobDTO.company)}).toArray())
    const re=await this.connection.collection('companies')
    .findOneAndUpdate(
      {_id :new ObjectID(createJobDTO.company)},
      { $inc: { number_jobs_posted: 1 } }
   )
    console.log(re)
    //change createJobDTO format remove number_jobs_posted and also find and update here the number
    //const re = await this.CompanyModel.updateOne({ _id: createJobDTO.company, ifDeleted: false }, { $set:{ number_jobs_posted: createJobDTO.number_jobs_posted + 1 }}).exec();
    createJobDTO.jobCodeUnique = LastJobUnique;
    createJobDTO.jobCode = 'CI' + new Date().getFullYear() + '-' + LastJobUnique;
    const createdJob = new this.JobModel(createJobDTO);
    const result = await createdJob.save();
    if (result) {
      //const re = await this.comanyService.update_number_jobs(createJobDTO.company,createJobDTO.number_jobs_posted+1);
      result.jobCodeUnique = undefined;
      result.ifDeleted = undefined;
      result.__v = undefined;
      delete result.jobCodeUnique;
      delete result.__v;
      delete result.ifDeleted;
    }
    return result;
  }

  async update(updateJobDTO): Promise<any> {
    
    //delete updateJobDTO.number_jobs_posted;
    //console.log("be4")
    //add check if workex and language inputs are 'string' then return bad request
    console.log(typeof updateJobDTO.workExperience)
    //updateJobDTO.Date=new Date(updateJobDTO.Date)
    const result = await this.JobModel.updateOne({ _id: updateJobDTO._id, ifDeleted: false }, { $set: updateJobDTO }).exec();
    //console.log(result);
    if (result && result.n && result.n >= 1) {
      const data = await this.JobModel.findOne(
        { _id: updateJobDTO._id, ifDeleted: false },
        {
          jobCodeUnique: 0,
          ifDeleted: 0,
          __v: 0,
        },
      ).exec();
      
    } else {
      return;
    }
  }

  async findById(objectIdDTO: ObjectIdDTO): Promise<Job> {
    const Jobs = await this.JobModel.findOne({ _id: objectIdDTO._id, ifDeleted: false }, { ifDeleted: 0, jobCodeUnique: 0, __v: 0 }).exec();
    const returnData: Job = JSON.parse(JSON.stringify(Jobs));
    return returnData;
  }

  async jobsByCompany(companyObjectIdDTO: CompanyObjectIdDTO): Promise<Job[]> {
    const Jobs = await this.JobModel.find(
      { company: companyObjectIdDTO.company, ifDeleted: false },
      { ifDeleted: 0, jobCodeUnique: 0, __v: 0 },
    ).exec();
    const data: Job[] = JSON.parse(JSON.stringify(Jobs));
    const returnData = data.map((Obj: Job) => {
      return Obj;
    });
    return returnData;
  }
}
