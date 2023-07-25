import { Injectable } from '@nestjs/common';
import { QInfoAboutTriangleDto, QInfoAboutPerimeterDto, QInfoAboutAreaDto } from './app.interface';

@Injectable()
export class AppService {
  getInfoAboutTriangle(query: QInfoAboutTriangleDto) {
    const perimeter = query.side1 + query.side2 + query.side3;
    const result = `Triangle:
    ([${query.side1}], [${query.side2}], [${query.side3}])
    Reduced:
    ([${query.side1 / perimeter}], [${query.side2 / perimeter}], [${
      query.side3 / perimeter
    }])
    
    Area = ${perimeter / 2}
    Perimeter = ${perimeter}`;
    return result;
  }

  getPerimeterOfTriangle(query: QInfoAboutPerimeterDto) {
    const perimeter = query.side1 + query.side2 + query.side3;
    return perimeter;
  }
  getAreaOfTriangle(query: QInfoAboutAreaDto) {
    const perimeter = query.side1 + query.side2 + query.side3;
    return perimeter / 2;
  }
}
