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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyObjectIdDTO = exports.ObjectIdDTO = exports.UpdateJobDTO = exports.CreateJobDTO = exports.WorkExperienceDTO = exports.LanguagesDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LanguagesDTO {
}
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], LanguagesDTO.prototype, "language", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], LanguagesDTO.prototype, "level", void 0);
exports.LanguagesDTO = LanguagesDTO;
class WorkExperienceDTO {
}
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], WorkExperienceDTO.prototype, "Category", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], WorkExperienceDTO.prototype, "Role", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], WorkExperienceDTO.prototype, "Experience", void 0);
exports.WorkExperienceDTO = WorkExperienceDTO;
class CreateJobDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsMongoId({ message: 'Unique id is invalid!' }),
    class_validator_1.IsNotEmpty({ message: 'Company unique id is mandatory!' }),
    __metadata("design:type", String)
], CreateJobDTO.prototype, "company", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateJobDTO.prototype, "jobTitle", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateJobDTO.prototype, "jobUrl", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateJobDTO.prototype, "jobCodeUnique", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateJobDTO.prototype, "jobCode", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateJobDTO.prototype, "requirements", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateJobDTO.prototype, "description", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateJobDTO.prototype, "careerLevel", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateJobDTO.prototype, "Date", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], CreateJobDTO.prototype, "Industries", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], CreateJobDTO.prototype, "Languages", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], CreateJobDTO.prototype, "Skills", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], CreateJobDTO.prototype, "workExperience", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateJobDTO.prototype, "city", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateJobDTO.prototype, "country", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateJobDTO.prototype, "currency", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateJobDTO.prototype, "from", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateJobDTO.prototype, "to", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateJobDTO.prototype, "otherCountries", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateJobDTO.prototype, "ifDeleted", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], CreateJobDTO.prototype, "timestamp", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateJobDTO.prototype, "category", void 0);
exports.CreateJobDTO = CreateJobDTO;
class UpdateJobDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsMongoId({ message: 'Unique id is invalid!' }),
    class_validator_1.IsNotEmpty({ message: 'Company unique id is mandatory!' }),
    __metadata("design:type", String)
], UpdateJobDTO.prototype, "_id", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateJobDTO.prototype, "jobTitle", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateJobDTO.prototype, "jobUrl", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateJobDTO.prototype, "requirements", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateJobDTO.prototype, "description", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateJobDTO.prototype, "careerLevel", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateJobDTO.prototype, "Date", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], UpdateJobDTO.prototype, "Industries", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], UpdateJobDTO.prototype, "Languages", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], UpdateJobDTO.prototype, "Skills", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], UpdateJobDTO.prototype, "workExperience", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateJobDTO.prototype, "city", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateJobDTO.prototype, "country", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateJobDTO.prototype, "currency", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], UpdateJobDTO.prototype, "from", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], UpdateJobDTO.prototype, "to", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], UpdateJobDTO.prototype, "otherCountries", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], UpdateJobDTO.prototype, "ifDeleted", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], UpdateJobDTO.prototype, "timestamp", void 0);
exports.UpdateJobDTO = UpdateJobDTO;
class ObjectIdDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsMongoId({ message: 'Unique id is invalid!' }),
    class_validator_1.IsNotEmpty({ message: 'Company unique id is mandatory!' }),
    __metadata("design:type", String)
], ObjectIdDTO.prototype, "_id", void 0);
exports.ObjectIdDTO = ObjectIdDTO;
class CompanyObjectIdDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsMongoId({ message: 'Unique id is invalid!' }),
    class_validator_1.IsNotEmpty({ message: 'Company unique id is mandatory!' }),
    __metadata("design:type", String)
], CompanyObjectIdDTO.prototype, "company", void 0);
exports.CompanyObjectIdDTO = CompanyObjectIdDTO;
//# sourceMappingURL=job.dto.js.map