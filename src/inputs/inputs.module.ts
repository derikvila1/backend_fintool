
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { InputsController } from './inputs.controller';
import { inputsProviders } from './inputs.providers';
import { InputsService } from './inputs.service';

@Module({
  imports: [DatabaseModule],
  controllers:[InputsController],
  providers: [
    ...inputsProviders,
    InputsService,
  ],
})
export class InputsModule {}