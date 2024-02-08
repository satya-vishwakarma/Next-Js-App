import { RequestMethod } from '@nestjs/common';
export const excludeRoutes = [
  { path: '/auth/login', method: RequestMethod.POST },
];

export const excludeCommonAuthRoutes = [];

export * from './excludeRoutes';
