import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare type JobsPostedDocument = JobsPosted & Document;
export declare class JobsPosted {
    company: {
        type: mongoose.Types.ObjectId;
        ref: 'Company';
    };
    category: String;
    number_jobs_posted: string;
}
export declare const CatSchema: mongoose.Schema<any, mongoose.Model<any>>;
