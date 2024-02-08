import { Injectable } from '@nestjs/common';
import { ModulesModel } from './model/modules.model';

@Injectable()
export class ModulesService {
  constructor(private readonly modulesModel: ModulesModel) {}
  saveModuels(body: any , users): Promise<any> {

    body.createdBy = users.userId
    return this.modulesModel.save(body);
  }
}
