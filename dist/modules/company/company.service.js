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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const CryptoJS = require("crypto-js");
const job_service_1 = require("../job/job.service");
let CompanyService = class CompanyService {
    constructor(CompanyModel, jobService) {
        this.CompanyModel = CompanyModel;
        this.jobService = jobService;
    }
    async validateEmail(emailDTO) {
        const company = await this.CompanyModel.findOne({ email: emailDTO.email }, { email: 1 }, {}).exec();
        if (company !== null)
            return { Availability: false };
        return { Availability: true };
    }
    async create(createCompanyDTO) {
        createCompanyDTO.password = CryptoJS.SHA256(createCompanyDTO.password).toString(CryptoJS.enc.Hex);
        createCompanyDTO.notification = false;
        createCompanyDTO.status = 'Pending';
        createCompanyDTO.category = 'Free';
        createCompanyDTO.ifDeleted = false;
        createCompanyDTO.number_jobs_posted = 0;
        const createdCat = new this.CompanyModel(createCompanyDTO);
        const result = await createdCat.save();
        if (result) {
            result.password = undefined;
            result.ifDeleted = undefined;
            result.__v = undefined;
            delete result.password;
            delete result.__v;
            delete result.ifDeleted;
        }
        return result;
    }
    async update(updateCompanyDTO) {
        const result = await this.CompanyModel.updateOne({ _id: updateCompanyDTO._id, ifDeleted: false }, { $set: updateCompanyDTO }).exec();
        if (result && result.n && result.n >= 1) {
            return await this.CompanyModel.findOne({ _id: updateCompanyDTO._id, ifDeleted: false }, { password: 0, ifDeleted: 0, __v: 0 }).exec();
        }
        else {
            return;
        }
    }
    async findById(objectIdDTO) {
        const customer = await this.CompanyModel.findOne({ _id: objectIdDTO._id, ifDeleted: false }, { password: 0, ifDeleted: 0, __v: 0 }).exec();
        if (customer && customer !== null) {
            const Jobs = await this.jobService.jobsByCompany({ company: objectIdDTO._id });
            const result = JSON.parse(JSON.stringify(customer));
            result.Jobs = Jobs;
            return result;
        }
        else {
            return customer;
        }
    }
    async delete(deleteCompanyDTO) {
        return await this.CompanyModel.updateOne({ _id: deleteCompanyDTO._id }, { $set: { ifDeleted: true, timestamp: deleteCompanyDTO.timestamp } }).exec();
    }
    async loginValidate(companyLoginDTO) {
        const encPassword = CryptoJS.SHA256(companyLoginDTO.password).toString(CryptoJS.enc.Hex);
        const result = await this.CompanyModel.findOne({
            email: companyLoginDTO.email,
            ifDeleted: false,
        }).exec();
        if (result && result.password === encPassword) {
            result.password = undefined;
            result.ifDeleted = undefined;
            result.__v = undefined;
            delete result.password;
            delete result.ifDeleted;
            delete result.__v;
            return result;
        }
        return;
    }
    async updatePassword(passwordResetDTO) {
        const encPassword = CryptoJS.SHA256(passwordResetDTO.new_password).toString(CryptoJS.enc.Hex);
        return await this.CompanyModel.updateOne({ _id: passwordResetDTO._id }, {
            $set: {
                password: encPassword,
                timestamp: passwordResetDTO.timestamp,
            },
        }).exec();
    }
    async checkNotification(objectIdDTO) {
        return await this.CompanyModel.findOne({ _id: objectIdDTO._id }, { notification: 1 }).exec();
    }
    async updateNotification(notificationStatusDTO) {
        return await this.CompanyModel.updateOne({ _id: notificationStatusDTO._id }, {
            $set: {
                notification: notificationStatusDTO.notification,
                timestamp: notificationStatusDTO.timestamp,
            },
        }).exec();
    }
    async update_number_jobs(id, x) {
        return await this.CompanyModel.updateOne({ _id: id }, {
            $set: {
                number_jobs_posted: x
            },
        }).exec();
    }
};
CompanyService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Company')),
    __metadata("design:paramtypes", [mongoose_2.Model, job_service_1.JobService])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map