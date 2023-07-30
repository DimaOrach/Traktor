import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { QInfoAboutTriangleDto, QInfoAboutPerimeterDto, QInfoAboutAreaDto, QIsRightAngleDto, QIsEquilateraleDto, QIsIsoscelesDto } from './app.interface';


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
  @Get('/IsRightAngled')
  IsRightAngled(@Query() query: QIsRightAngleDto) {
    return this.appService.IsRightAngled(query);
  }
  @Get('/IsEquilateral')
  IsEquilateral(@Query() query: QIsEquilateraleDto) {
    return this.appService.IsEquilateral(query);
  }
  @Get('/IsIsosceles')
  IsIsosceles(@Query() query: QIsIsoscelesDto) {
    return this.appService.IsIsosceles(query);
  }
}
