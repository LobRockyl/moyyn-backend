import { Model } from 'mongoose';
import { Job } from './interface/job.interface';
import { CompanyObjectIdDTO, CreateJobDTO, ObjectIdDTO } from './dto/job.dto';
import { Connection } from 'mongoose';
export declare class JobService {
    private JobModel;
    private connection;
    constructor(JobModel: Model<Job>, connection: Connection);
    create(createJobDTO: CreateJobDTO): Promise<any>;
    update(updateJobDTO: any): Promise<any>;
    findById(objectIdDTO: ObjectIdDTO): Promise<Job>;
    jobsByCompany(companyObjectIdDTO: CompanyObjectIdDTO): Promise<Job[]>;
}
