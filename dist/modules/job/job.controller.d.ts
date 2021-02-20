import { JobService } from './job.service';
import { CompanyObjectIdDTO, CreateJobDTO, ObjectIdDTO } from './dto/job.dto';
import { Connection } from 'mongoose';
export declare class JobController {
    private readonly jobService;
    private connection;
    constructor(jobService: JobService, connection: Connection);
    addJob(res: any, createJobDTO: CreateJobDTO): Promise<any>;
    updateJob(res: any, updateJobDTO: any): Promise<any>;
    findById(res: any, objectIdDTO: ObjectIdDTO): Promise<any>;
    jobsByCompany(res: any, companyObjectIdDTO: CompanyObjectIdDTO): Promise<any>;
}
