import { Injectable } from '@nestjs/common';
import { QInfoAboutTriangleDto, QInfoAboutPerimeterDto, QInfoAboutAreaDto, QIsRightAngleDto, 
  QIsEquilateraleDto, QIsIsoscelesDto, QAreCongruentDto } from './app.interface';

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
  IsRightAngled(query: QIsRightAngleDto) {
    const {side1, side2, side3} = query;
    return side2 * side2 === (side1 * side1 + side3 * side3);
  }
  IsEquilateral(query: QIsEquilateraleDto) {
    const {side1, side2, side3} = query;
    return (side1 === side2 && side2 === side3);
  }
  IsIsosceles(query: QIsIsoscelesDto) {
    const {side1, side3} = query;
    return (side1 === side3);
  }
  AreCongruent(query: QAreCongruentDto) {
    const {tr1, tr2} = query;
    const array1 = [ tr1.side1, tr1.side2, tr1.side3 ].sort()
    const array2 = [ tr2.side1, tr2.side2, tr2.side3 ].sort()
    const isEqual = JSON.stringify(array1) === JSON.stringify(array2);
    return isEqual;
  
  }
}