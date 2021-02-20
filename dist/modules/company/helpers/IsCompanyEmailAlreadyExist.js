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
exports.IsCompanyEmailAlreadyExist = exports.IsCompanyEmailAlreadyExistConstraint = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
let IsCompanyEmailAlreadyExistConstraint = class IsCompanyEmailAlreadyExistConstraint {
    constructor(companyModel) {
        this.companyModel = companyModel;
    }
    async validate(email, validationArguments) {
        const findQuery = { email: email };
        if (validationArguments.targetName === 'UpdateCompanyDTO') {
            const DTOValue = validationArguments.object;
            findQuery['_id'] = { $ne: DTOValue._id };
        }
        const company = await this.companyModel.findOne(findQuery, { email: 1 }, {}).exec();
        if (company !== null)
            return false;
        return true;
    }
};
IsCompanyEmailAlreadyExistConstraint = __decorate([
    class_validator_1.ValidatorConstraint({ async: true }),
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Company')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], IsCompanyEmailAlreadyExistConstraint);
exports.IsCompanyEmailAlreadyExistConstraint = IsCompanyEmailAlreadyExistConstraint;
function IsCompanyEmailAlreadyExist(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsCompanyEmailAlreadyExistConstraint,
        });
    };
}
exports.IsCompanyEmailAlreadyExist = IsCompanyEmailAlreadyExist;
//# sourceMappingURL=IsCompanyEmailAlreadyExist.js.map