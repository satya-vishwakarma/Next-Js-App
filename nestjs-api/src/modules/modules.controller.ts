import { Body, Controller, Post, Req } from '@nestjs/common';
import { ModulesService } from './modules.service';

@Controller('modules')
export class ModulesController {
  constructor(private readonly modulesSercive: ModulesService) {}

  @Post()
  saveModules(@Body() body: any, @Req() req: Request) {
    return this.modulesSercive.saveModuels(body, req['user']);
  }
}
