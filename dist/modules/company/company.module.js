"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const company_schema_1 = require("./schema/company.schema");
const company_controller_1 = require("./company.controller");
const company_service_1 = require("./company.service");
const IsCompanyEmailAlreadyExist_1 = require("./helpers/IsCompanyEmailAlreadyExist");
const job_module_1 = require("../job/job.module");
let CompanyModule = class CompanyModule {
};
CompanyModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Company', schema: company_schema_1.CompanySchema }]), job_module_1.JobModule],
        controllers: [company_controller_1.CompanyController],
        providers: [company_service_1.CompanyService, IsCompanyEmailAlreadyExist_1.IsCompanyEmailAlreadyExistConstraint],
        exports: [mongoose_1.MongooseModule]
    })
], CompanyModule);
exports.CompanyModule = CompanyModule;
//# sourceMappingURL=company.module.js.map