import { Model } from 'mongoose';
import { JobsPosted, JobsPostedDocument } from './schema/jobsPosted.schema';
export declare class JobsPostedService {
    private JobsPostedModel;
    constructor(JobsPostedModel: Model<JobsPostedDocument>);
    create(x: any): Promise<JobsPosted>;
    findById(id: any): Promise<JobsPosted>;
}
