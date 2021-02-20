export declare enum CompanyCategory {
    PPH = "PPH",
    Subscription = "Subscription",
    Free = "Free"
}
export declare enum CompanyStatus {
    Pending = "Pending",
    Approved = "Approved",
    InActive = "In-Active"
}
export declare class CreateCompanyDTO {
    company: string;
    name: string;
    website: string;
    location: string;
    email: string;
    phone: string;
    password: string;
    notification?: boolean;
    category?: string;
    status?: string;
    ifDeleted: boolean;
    timestamp: Date;
    number_jobs_posted: number;
}
export declare class UpdateCompanyDTO {
    _id: string;
    company: string;
    name: string;
    website: string;
    location: string;
    email: string;
    phone: string;
    timestamp: Date;
}
export declare class CompanyLoginDTO {
    email: string;
    password: string;
    timestamp: Date;
}
export declare class PasswordResetDTO {
    _id: string;
    old_password: string;
    new_password: string;
    timestamp: Date;
}
export declare class NotificationStatusDTO {
    _id: string;
    notification: boolean;
    timestamp: Date;
}
export declare class DeleteCompanyDTO {
    _id: string;
    timestamp: Date;
}
export declare class ObjectIdDTO {
    _id: string;
}
export declare class EmailDTO {
    email: string;
}
