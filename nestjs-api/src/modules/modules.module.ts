import { ModuleSchema, Modules } from '@app/schemas';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModulesModel } from './model/modules.model';

import { ModulesController } from './modules.controller';
import { ModulesService } from './modules.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Modules.name, schema: ModuleSchema }]),
  ],
  providers: [ModulesModel, ModulesService],
  controllers: [ModulesController],
})
export class ModulesModule {}
