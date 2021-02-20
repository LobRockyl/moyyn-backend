import { Module,forwardRef } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { JobSchema } from './schema/job.schema';

import { JobController } from './job.controller';
import { JobService } from './job.service';
//import { CompanyModule } from '../company/company.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Job', schema: JobSchema }])],
  controllers: [JobController],
  providers: [JobService],
  exports: [JobService]

})
export class JobModule {}
