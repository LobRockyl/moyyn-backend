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
exports.EmailDTO = exports.ObjectIdDTO = exports.DeleteCompanyDTO = exports.NotificationStatusDTO = exports.PasswordResetDTO = exports.CompanyLoginDTO = exports.UpdateCompanyDTO = exports.CreateCompanyDTO = exports.CompanyStatus = exports.CompanyCategory = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const IsCompanyEmailAlreadyExist_1 = require("./../helpers/IsCompanyEmailAlreadyExist");
var CompanyCategory;
(function (CompanyCategory) {
    CompanyCategory["PPH"] = "PPH";
    CompanyCategory["Subscription"] = "Subscription";
    CompanyCategory["Free"] = "Free";
})(CompanyCategory = exports.CompanyCategory || (exports.CompanyCategory = {}));
var CompanyStatus;
(function (CompanyStatus) {
    CompanyStatus["Pending"] = "Pending";
    CompanyStatus["Approved"] = "Approved";
    CompanyStatus["InActive"] = "In-Active";
})(CompanyStatus = exports.CompanyStatus || (exports.CompanyStatus = {}));
class CreateCompanyDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: 'Please enter company name' }),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "company", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "website", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "location", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: 'Please enter your email' }),
    class_validator_1.IsEmail({}, { message: 'Please enter your email address in format:yourname@example.com' }),
    IsCompanyEmailAlreadyExist_1.IsCompanyEmailAlreadyExist({ message: 'Email $value is already exists.' }),
    class_transformer_1.Transform((value) => value.toLowerCase(), { toClassOnly: true }),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "email", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({
        description: 'Note: enter valid German phone/mobile number',
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsPhoneNumber('DE', {
        message: 'Please enter your valid mobile/phone number',
    }),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Note: password length has restricted to 5 to 15  characters',
    }),
    class_validator_1.IsNotEmpty({ message: 'Please enter your Password' }),
    class_validator_1.Length(5, 15, {
        message: 'Password must be longer than or equal to 5 and less than or equal to 15 characters',
    }),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "password", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateCompanyDTO.prototype, "notification", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(CompanyCategory, { message: 'Please select company category' }),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "category", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(CompanyStatus, { message: 'Please select company status' }),
    __metadata("design:type", String)
], CreateCompanyDTO.prototype, "status", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateCompanyDTO.prototype, "ifDeleted", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], CreateCompanyDTO.prototype, "timestamp", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateCompanyDTO.prototype, "number_jobs_posted", void 0);
exports.CreateCompanyDTO = CreateCompanyDTO;
class UpdateCompanyDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsMongoId({ message: 'Unique id is invalid!' }),
    class_validator_1.IsNotEmpty({ message: 'Company unique id is mandatory!' }),
    __metadata("design:type", String)
], UpdateCompanyDTO.prototype, "_id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: 'Please enter company name' }),
    __metadata("design:type", String)
], UpdateCompanyDTO.prototype, "company", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateCompanyDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateCompanyDTO.prototype, "website", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateCompanyDTO.prototype, "location", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: 'Please enter your email' }),
    class_validator_1.IsEmail({}, { message: 'Please enter your email address in format:yourname@example.com' }),
    IsCompanyEmailAlreadyExist_1.IsCompanyEmailAlreadyExist({ message: 'Email $value is already exists.' }),
    class_transformer_1.Transform((value) => value.toLowerCase(), { toClassOnly: true }),
    __metadata("design:type", String)
], UpdateCompanyDTO.prototype, "email", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({
        description: 'Note: enter valid German phone/mobile number',
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsPhoneNumber('DE', {
        message: 'Please enter your valid mobile/phone number',
    }),
    __metadata("design:type", String)
], UpdateCompanyDTO.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], UpdateCompanyDTO.prototype, "timestamp", void 0);
exports.UpdateCompanyDTO = UpdateCompanyDTO;
class CompanyLoginDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsEmail({}, { message: 'Please enter your email address in format:yourname@example.com' }),
    class_validator_1.IsNotEmpty({ message: 'Please enter your Email' }),
    class_transformer_1.Transform((value) => value.toLowerCase(), { toClassOnly: true }),
    __metadata("design:type", String)
], CompanyLoginDTO.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: 'Please enter your Password' }),
    __metadata("design:type", String)
], CompanyLoginDTO.prototype, "password", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], CompanyLoginDTO.prototype, "timestamp", void 0);
exports.CompanyLoginDTO = CompanyLoginDTO;
class PasswordResetDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsMongoId({ message: 'Unique id is invalid!' }),
    class_validator_1.IsNotEmpty({ message: 'Company unique id is mandatory!' }),
    __metadata("design:type", String)
], PasswordResetDTO.prototype, "_id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: 'Please enter your old Password' }),
    __metadata("design:type", String)
], PasswordResetDTO.prototype, "old_password", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Note: password length has restricted to 5 to 15  characters',
    }),
    class_validator_1.IsNotEmpty({ message: 'Please enter your new Password' }),
    class_validator_1.Length(5, 15, {
        message: 'Password must be longer than or equal to 5 and less than or equal to 15 characters',
    }),
    __metadata("design:type", String)
], PasswordResetDTO.prototype, "new_password", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], PasswordResetDTO.prototype, "timestamp", void 0);
exports.PasswordResetDTO = PasswordResetDTO;
class NotificationStatusDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsMongoId({ message: 'Unique id is invalid!' }),
    class_validator_1.IsNotEmpty({ message: 'Company unique id is mandatory!' }),
    __metadata("design:type", String)
], NotificationStatusDTO.prototype, "_id", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], NotificationStatusDTO.prototype, "notification", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], NotificationStatusDTO.prototype, "timestamp", void 0);
exports.NotificationStatusDTO = NotificationStatusDTO;
class DeleteCompanyDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsMongoId({ message: 'Unique id is invalid!' }),
    class_validator_1.IsNotEmpty({ message: 'Company unique id is mandatory!' }),
    __metadata("design:type", String)
], DeleteCompanyDTO.prototype, "_id", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], DeleteCompanyDTO.prototype, "timestamp", void 0);
exports.DeleteCompanyDTO = DeleteCompanyDTO;
class ObjectIdDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsMongoId({ message: 'Unique id is invalid!' }),
    class_validator_1.IsNotEmpty({ message: 'Company unique id is mandatory!' }),
    __metadata("design:type", String)
], ObjectIdDTO.prototype, "_id", void 0);
exports.ObjectIdDTO = ObjectIdDTO;
class EmailDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty({ message: 'Please enter your email' }),
    class_validator_1.IsEmail({}, { message: 'Please enter your email address in format:yourname@example.com' }),
    class_transformer_1.Transform((value) => value.toLowerCase(), { toClassOnly: true }),
    __metadata("design:type", String)
], EmailDTO.prototype, "email", void 0);
exports.EmailDTO = EmailDTO;
//# sourceMappingURL=company.dto.js.map