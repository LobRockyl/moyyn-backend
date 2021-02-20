import { CompanyService } from './company.service';
import { CreateCompanyDTO, PasswordResetDTO, NotificationStatusDTO, ObjectIdDTO, CompanyLoginDTO, DeleteCompanyDTO, EmailDTO } from './dto/company.dto';
export declare class CompanyController {
    private readonly CompanyService;
    constructor(CompanyService: CompanyService);
    validateEmail(res: any, emailDTO: EmailDTO): Promise<any>;
    addCompany(res: any, createAboutDTO: CreateCompanyDTO): Promise<any>;
    company_update(res: any, updateCompanyDTO: any): Promise<any>;
    findById(res: any, objectIdDTO: ObjectIdDTO): Promise<any>;
    delete(res: any, deleteCompanyDTO: DeleteCompanyDTO): Promise<any>;
    loginValidate(res: any, companyLoginDTO: CompanyLoginDTO): Promise<any>;
    updatePassword(res: any, passwordResetDTO: PasswordResetDTO): Promise<any>;
    checkNotification(res: any, objectIdDTO: ObjectIdDTO): Promise<any>;
    updateNotification(res: any, notificationStatusDTO: NotificationStatusDTO): Promise<any>;
}
