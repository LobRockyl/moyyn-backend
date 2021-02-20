import { ValidatorConstraintInterface, ValidationOptions, ValidationArguments } from 'class-validator';
import { Company } from '../interface/company.interface';
import { Model } from 'mongoose';
export declare class IsCompanyEmailAlreadyExistConstraint implements ValidatorConstraintInterface {
    private readonly companyModel;
    constructor(companyModel: Model<Company>);
    validate(email: string, validationArguments: ValidationArguments): Promise<boolean>;
}
export declare function IsCompanyEmailAlreadyExist(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
