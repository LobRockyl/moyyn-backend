"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const company_service_1 = require("./company.service");
const company_dto_1 = require("./dto/company.dto");
let CompanyController = class CompanyController {
    constructor(CompanyService) {
        this.CompanyService = CompanyService;
    }
    async validateEmail(res, emailDTO) {
        const result = await this.CompanyService.validateEmail(emailDTO);
        if (!result)
            throw new common_1.NotFoundException({
                success: false,
                message: 'unable to validate the email!',
            });
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'The email status has successfully validated',
            result,
        });
    }
    async addCompany(res, createAboutDTO) {
        const result = await this.CompanyService.create(createAboutDTO);
        if (!result)
            throw new common_1.NotFoundException({
                success: false,
                message: 'unable to create the company!',
            });
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'The company has been successfully created',
            result,
        });
    }
    async company_update(res, updateCompanyDTO) {
        const result = await this.CompanyService.update(updateCompanyDTO);
        if (!result)
            throw new common_1.NotFoundException({
                success: false,
                message: 'Id does not exist!',
            });
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'Company has been successfully updated',
            result,
        });
    }
    async findById(res, objectIdDTO) {
        const result = await this.CompanyService.findById(objectIdDTO);
        if (!result)
            throw new common_1.NotFoundException({
                success: false,
                message: 'Id does not exist!',
            });
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'Company details successfully found',
            result,
        });
    }
    async delete(res, deleteCompanyDTO) {
        const result = await this.CompanyService.delete(deleteCompanyDTO);
        if (!result)
            throw new common_1.NotFoundException({
                success: false,
                message: 'Id does not exist!',
            });
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'Company successfully removed',
        });
    }
    async loginValidate(res, companyLoginDTO) {
        const result = await this.CompanyService.loginValidate(companyLoginDTO);
        if (!result)
            throw new common_1.NotFoundException({
                success: false,
                message: 'Email or password is invalid!',
            });
        delete result.password;
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'Login details successfully verified',
            result,
        });
    }
    async updatePassword(res, passwordResetDTO) {
        const result = await this.CompanyService.updatePassword(passwordResetDTO);
        if (!result)
            throw new common_1.NotFoundException({
                success: false,
                message: 'Id does not exist!',
            });
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'Password has been successfully updated',
        });
    }
    async checkNotification(res, objectIdDTO) {
        const result = await this.CompanyService.checkNotification(objectIdDTO);
        if (!result)
            throw new common_1.NotFoundException({
                success: false,
                message: 'Id does not exist!',
            });
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'Company notification status successfully found',
            result,
        });
    }
    async updateNotification(res, notificationStatusDTO) {
        const result = await this.CompanyService.updateNotification(notificationStatusDTO);
        if (!result)
            throw new common_1.NotFoundException({
                success: false,
                message: 'Id does not exist!',
            });
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'Notification status has been updated',
        });
    }
};
__decorate([
    common_1.Post('/validateEmail'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.EmailDTO]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "validateEmail", null);
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.CreateCompanyDTO]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "addCompany", null);
__decorate([
    common_1.Post('/update'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "company_update", null);
__decorate([
    common_1.Post('/find'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.ObjectIdDTO]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findById", null);
__decorate([
    common_1.Post('/delete'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.DeleteCompanyDTO]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "delete", null);
__decorate([
    common_1.Post('/login'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.CompanyLoginDTO]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "loginValidate", null);
__decorate([
    common_1.Post('/updatePassword'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.PasswordResetDTO]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "updatePassword", null);
__decorate([
    common_1.Post('/checkNotification'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.ObjectIdDTO]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "checkNotification", null);
__decorate([
    common_1.Post('/updateNotification'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.NotificationStatusDTO]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "updateNotification", null);
CompanyController = __decorate([
    swagger_1.ApiTags('company'),
    common_1.Controller('company'),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map