import { Schema } from 'mongoose';

import { FilterQuery } from 'mongoose';

export interface requestBodyDto {
  user: {
    username: string;
    sub: string;
    email: string;
    _id: Schema.Types.ObjectId;
  };
}

export interface objectIdDto {
  _id: Schema.Types.ObjectId;
}





interface LookupStage {
  from: string;
  localField: string;
  foreignField: string;
  as: string;
}

interface AddFieldsStage {
  [fieldName: string]: any;
}

interface UnwindStage {
  path: string;
  includeArrayIndex?: string;
  preserveNullAndEmptyArrays?: boolean;
}

export interface AggregationOptions {
  pipeline?: any[];
  where?: FilterQuery<any>;
  projection?: any;
  limit?: number;
  skip?: number;
  orderBy?: string;
  sortBy?: 'asc' | 'desc';
  lookup?: LookupStage[];
  addFields?: AddFieldsStage,
  unwind?: UnwindStage[],
}

