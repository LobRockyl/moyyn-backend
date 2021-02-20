import { Controller, Res, HttpStatus, Post, Body, NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { JobService } from './job.service';
import { CompanyObjectIdDTO, CreateJobDTO, ObjectIdDTO, UpdateJobDTO } from './dto/job.dto';
import { Connection } from 'mongoose';
import {ObjectID } from 'mongodb';
import { InjectConnection } from '@nestjs/mongoose';

@ApiTags('job')
@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService,@InjectConnection() private connection: Connection) {}
  // ---------------------------------------------------------------------------------------------------------------------------
  @Post('/create')
  async addJob(@Res() res, @Body() createJobDTO: CreateJobDTO) {
    console.log(createJobDTO.category)
    let x=await this.connection.collection('companies').find({_id :new ObjectID(createJobDTO.company)}).toArray()
    console.log(x[0].number_jobs_posted)
    if(x[0].category=='Free' && x[0].number_jobs_posted>=5){
      return res.status(HttpStatus.OK).json({
        success: false,
        message: 'Maximum Limit Reached for FREE'
      });
    }else{
      if(x[0].category=='Subs' && x[0].number_jobs_posted>=10){
        return res.status(HttpStatus.OK).json({
          success: false,
          message: 'Maximum Limit Reached for SUBS'
        });
      }else{
    const result = await this.jobService.create(createJobDTO);
    if (!result)
      throw new NotFoundException({
        success: false,
        message: 'unable to create the job!',
      });
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'The job has been successfully created',
      result,
    });
  }
  }
  }

  // ---------------------------------------------------------------------------------------------------------------------------
  @Post('/update')
  async updateJob(@Res() res, @Body() updateJobDTO) {
    //check if updateJobDTO.category and updateJobDTO.number of jobs match in request
    const result = await this.jobService.update(updateJobDTO);

    if (!result || result==null)
      throw new NotFoundException({
        success: false,
        message: 'Id does not exist!',
      });
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Job has been successfully updated',
      result,
    });
  }

  // ---------------------------------------------------------------------------------------------------------------------------
  @Post('/find')
  async findById(@Res() res, @Body() objectIdDTO: ObjectIdDTO) {
    const result = await this.jobService.findById(objectIdDTO);
    if (!result)
      throw new NotFoundException({
        success: false,
        message: 'Id does not exist!',
      });
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Job details successfully found',
      result,
    });
  }

  // ---------------------------------------------------------------------------------------------------------------------------
  @Post('/findByCompany')
  async jobsByCompany(@Res() res, @Body() companyObjectIdDTO: CompanyObjectIdDTO) {
    const result = await this.jobService.jobsByCompany(companyObjectIdDTO);
    if (!result)
      throw new NotFoundException({
        success: false,
        message: 'Id does not exist!',
      });
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Job list successfully found',
      result,
    });
  }
}
