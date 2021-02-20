import { Model } from 'mongoose';
import { Company } from './interface/company.interface';
import { EmailDTO, CreateCompanyDTO, UpdateCompanyDTO, PasswordResetDTO, NotificationStatusDTO, ObjectIdDTO, CompanyLoginDTO, DeleteCompanyDTO } from './dto/company.dto';
import { JobService } from '../job/job.service';
export declare class CompanyService {
    private CompanyModel;
    private jobService;
    constructor(CompanyModel: Model<Company>, jobService: JobService);
    validateEmail(emailDTO: EmailDTO): Promise<{
        Availability: boolean;
    }>;
    create(createCompanyDTO: CreateCompanyDTO): Promise<any>;
    update(updateCompanyDTO: UpdateCompanyDTO): Promise<any>;
    findById(objectIdDTO: ObjectIdDTO): Promise<Company>;
    delete(deleteCompanyDTO: DeleteCompanyDTO): Promise<any>;
    loginValidate(companyLoginDTO: CompanyLoginDTO): Promise<any>;
    updatePassword(passwordResetDTO: PasswordResetDTO): Promise<any>;
    checkNotification(objectIdDTO: ObjectIdDTO): Promise<any>;
    updateNotification(notificationStatusDTO: NotificationStatusDTO): Promise<any>;
    update_number_jobs(id: any, x: any): Promise<any>;
}
