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
exports.JobService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose_3 = require("@nestjs/mongoose");
const mongodb_1 = require("mongodb");
const mongoose_4 = require("mongoose");
let JobService = class JobService {
    constructor(JobModel, connection) {
        this.JobModel = JobModel;
        this.connection = connection;
    }
    async create(createJobDTO) {
        createJobDTO.ifDeleted = false;
        const lastJob = await this.JobModel.findOne({}, { jobCodeUnique: 1 }, { sort: { jobCodeUnique: 1 } });
        let LastJobUnique = 1;
        if (lastJob !== null && lastJob.jobCodeUnique) {
            LastJobUnique = lastJob.jobCodeUnique + 1;
        }
        const re = await this.connection.collection('companies')
            .findOneAndUpdate({ _id: new mongodb_1.ObjectID(createJobDTO.company) }, { $inc: { number_jobs_posted: 1 } });
        console.log(re);
        createJobDTO.jobCodeUnique = LastJobUnique;
        createJobDTO.jobCode = 'CI' + new Date().getFullYear() + '-' + LastJobUnique;
        const createdJob = new this.JobModel(createJobDTO);
        const result = await createdJob.save();
        if (result) {
            result.jobCodeUnique = undefined;
            result.ifDeleted = undefined;
            result.__v = undefined;
            delete result.jobCodeUnique;
            delete result.__v;
            delete result.ifDeleted;
        }
        return result;
    }
    async update(updateJobDTO) {
        console.log(typeof updateJobDTO.workExperience);
        const result = await this.JobModel.updateOne({ _id: updateJobDTO._id, ifDeleted: false }, { $set: updateJobDTO }).exec();
        if (result && result.n && result.n >= 1) {
            const data = await this.JobModel.findOne({ _id: updateJobDTO._id, ifDeleted: false }, {
                jobCodeUnique: 0,
                ifDeleted: 0,
                __v: 0,
            }).exec();
        }
        else {
            return;
        }
    }
    async findById(objectIdDTO) {
        const Jobs = await this.JobModel.findOne({ _id: objectIdDTO._id, ifDeleted: false }, { ifDeleted: 0, jobCodeUnique: 0, __v: 0 }).exec();
        const returnData = JSON.parse(JSON.stringify(Jobs));
        return returnData;
    }
    async jobsByCompany(companyObjectIdDTO) {
        const Jobs = await this.JobModel.find({ company: companyObjectIdDTO.company, ifDeleted: false }, { ifDeleted: 0, jobCodeUnique: 0, __v: 0 }).exec();
        const data = JSON.parse(JSON.stringify(Jobs));
        const returnData = data.map((Obj) => {
            return Obj;
        });
        return returnData;
    }
};
JobService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Job')), __param(1, mongoose_3.InjectConnection()),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_4.Connection])
], JobService);
exports.JobService = JobService;
//# sourceMappingURL=job.service.js.map