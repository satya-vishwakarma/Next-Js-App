import { BaseModelInterface } from '../interfaces/baseModel.interface';

export abstract class BaseModel implements BaseModelInterface {
  private readonly currentModel;
  constructor(modelRef) {
    this.currentModel = modelRef;
  }
  find(where: object, projection: object = {}) {
    return this.currentModel.find(where, projection);
  }

  findById(id: string, projection = {}) {
    return this.currentModel.findById(id, projection);
  }

  save(data: object) {
    const response = new this.currentModel(data);
    return response.save();
  }

  findOne(condition: object) {
    return this.currentModel.findOne(condition);
  }

  findByIdAndUpdate(_id, data) {
    return this.currentModel.findByIdAndUpdate(_id, data, { new: true });
  }
}
