import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { QInfoAboutTriangleDto, QInfoAboutPerimeterDto, QInfoAboutAreaDto } from './app.interface';


@Controller('triangle')
export class AppController {
  constructor(private appService: AppService) {}
  @Get('/Info')
  getInfoAboutTriangle(@Query() query: QInfoAboutTriangleDto) {
    return this.appService.getInfoAboutTriangle(query);
  }
  @Get('/Perimeter')
  getPerimeterOfTriangle(@Query() query: QInfoAboutPerimeterDto) {
    return this.appService.getPerimeterOfTriangle(query);
  }
  @Get('/Area')
  getAreaOfTriangle(@Query() query: QInfoAboutAreaDto) {
    return this.appService.getAreaOfTriangle(query);
  }
}
