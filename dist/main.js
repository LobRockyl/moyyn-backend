"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const fs = require("fs");
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const mongo_exception_filter_1 = require("./helpers/mongo-exception.filter");
async function bootstrap() {
    const keyFile = fs.readFileSync(__dirname + '/../ssl/privkey.pem');
    const certFile = fs.readFileSync(__dirname + '/../ssl/cert.pem');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions: {
            key: keyFile,
            cert: certFile,
        },
    });
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory: (validationErrors = []) => {
            const errResponse = validationErrors.map((error) => {
                const constraintsArr = Object.keys(error.constraints);
                const errorMessage = constraintsArr.map((errKey) => error.constraints[errKey]);
                const newErr = {
                    property: error.property,
                    message: errorMessage,
                };
                return newErr;
            });
            return new common_1.BadRequestException(errResponse);
        },
    }));
    app.useGlobalFilters(new mongo_exception_filter_1.MongoExceptionFilter());
    class_validator_1.useContainer(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Moyyn-API')
        .setDescription('Follow the Detailed API`s and Keys')
        .setVersion('1.0')
        .addTag('company')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000, function () {
        console.log("Server is up and running! Go ahead make your move.");
    });
}
bootstrap();
//# sourceMappingURL=main.js.map