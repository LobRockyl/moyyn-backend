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
exports.JobController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const job_service_1 = require("./job.service");
const job_dto_1 = require("./dto/job.dto");
const mongoose_1 = require("mongoose");
const mongodb_1 = require("mongodb");
const mongoose_2 = require("@nestjs/mongoose");
let JobController = class JobController {
    constructor(jobService, connection) {
        this.jobService = jobService;
        this.connection = connection;
    }
    async addJob(res, createJobDTO) {
        console.log(createJobDTO.category);
        let x = await this.connection.collection('companies').find({ _id: new mongodb_1.ObjectID(createJobDTO.company) }).toArray();
        console.log(x[0].number_jobs_posted);
        if (x[0].category == 'Free' && x[0].number_jobs_posted >= 5) {
            return res.status(common_1.HttpStatus.OK).json({
                success: false,
                message: 'Maximum Limit Reached for FREE'
            });
        }
        else {
            if (x[0].category == 'Subs' && x[0].number_jobs_posted >= 10) {
                return res.status(common_1.HttpStatus.OK).json({
                    success: false,
                    message: 'Maximum Limit Reached for SUBS'
                });
            }
            else {
                const result = await this.jobService.create(createJobDTO);
                if (!result)
                    throw new common_1.NotFoundException({
                        success: false,
                        message: 'unable to create the job!',
                    });
                return res.status(common_1.HttpStatus.OK).json({
                    success: true,
                    message: 'The job has been successfully created',
                    result,
                });
            }
        }
    }
    async updateJob(res, updateJobDTO) {
        const result = await this.jobService.update(updateJobDTO);
        if (!result || result == null)
            throw new common_1.NotFoundException({
                success: false,
                message: 'Id does not exist!',
            });
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'Job has been successfully updated',
            result,
        });
    }
    async findById(res, objectIdDTO) {
        const result = await this.jobService.findById(objectIdDTO);
        if (!result)
            throw new common_1.NotFoundException({
                success: false,
                message: 'Id does not exist!',
            });
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'Job details successfully found',
            result,
        });
    }
    async jobsByCompany(res, companyObjectIdDTO) {
        const result = await this.jobService.jobsByCompany(companyObjectIdDTO);
        if (!result)
            throw new common_1.NotFoundException({
                success: false,
                message: 'Id does not exist!',
            });
        return res.status(common_1.HttpStatus.OK).json({
            success: true,
            message: 'Job list successfully found',
            result,
        });
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, job_dto_1.CreateJobDTO]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "addJob", null);
__decorate([
    common_1.Post('/update'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "updateJob", null);
__decorate([
    common_1.Post('/find'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, job_dto_1.ObjectIdDTO]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "findById", null);
__decorate([
    common_1.Post('/findByCompany'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, job_dto_1.CompanyObjectIdDTO]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "jobsByCompany", null);
JobController = __decorate([
    swagger_1.ApiTags('job'),
    common_1.Controller('job'),
    __param(1, mongoose_2.InjectConnection()),
    __metadata("design:paramtypes", [job_service_1.JobService, mongoose_1.Connection])
], JobController);
exports.JobController = JobController;
//# sourceMappingURL=job.controller.js.map