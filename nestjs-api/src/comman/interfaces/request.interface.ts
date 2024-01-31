import { Request } from 'express';

export interface userRequest {
  user: object;
  Request: Request;
}
