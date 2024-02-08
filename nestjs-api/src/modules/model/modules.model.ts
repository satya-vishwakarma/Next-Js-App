import { BaseModel } from '@app/common/model/baseModel.model';
import { Modules } from '@app/schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class ModulesModel extends BaseModel {
  constructor(
    @InjectModel(Modules.name)
    private modulesModel: Model<Modules>,
  ) {
    super(modulesModel);
  }
}
