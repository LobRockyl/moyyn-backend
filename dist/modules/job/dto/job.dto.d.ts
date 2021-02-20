export declare class LanguagesDTO {
    readonly language: string;
    readonly level: string;
}
export declare class WorkExperienceDTO {
    readonly Category: string;
    readonly Role: string;
    readonly Experience: number;
}
export declare class CreateJobDTO {
    readonly company: string;
    jobTitle: string;
    jobUrl: string;
    jobCodeUnique: number;
    jobCode: string;
    requirements: string;
    description: string;
    readonly careerLevel: string;
    readonly Date: string;
    readonly Industries: [string];
    readonly Languages: LanguagesDTO[];
    readonly Skills: [string];
    readonly workExperience: WorkExperienceDTO[];
    city: string;
    country: string;
    currency: string;
    from: number;
    to: number;
    otherCountries: boolean;
    ifDeleted: boolean;
    readonly timestamp: Date;
    category: string;
}
export declare class UpdateJobDTO {
    readonly _id: string;
    jobTitle: string;
    jobUrl: string;
    requirements: string;
    description: string;
    readonly careerLevel: string;
    readonly Date: string;
    readonly Industries: [string];
    readonly Languages: LanguagesDTO[];
    readonly Skills: [string];
    readonly workExperience: WorkExperienceDTO[];
    city: string;
    country: string;
    currency: string;
    from: number;
    to: number;
    otherCountries: boolean;
    ifDeleted: boolean;
    readonly timestamp: Date;
}
export declare class ObjectIdDTO {
    _id: string;
}
export declare class CompanyObjectIdDTO {
    company: string;
}
