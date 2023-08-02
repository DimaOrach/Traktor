import { Expose, Transform, Type } from 'class-transformer';
import { IsNumber, IsObject, ValidateNested } from 'class-validator';

export class QInfoAboutTriangleDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  side1: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side2: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side3: number;
}

export class QInfoAboutPerimeterDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  side1: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side2: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side3: number;
}
export class QInfoAboutAreaDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  side1: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side2: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side3: number;
}

export class QIsRightAngleDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  side1: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side2: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side3: number;
}
export class QIsEquilateraleDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  side1: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side2: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side3: number;
}
export class QIsIsoscelesDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  side1: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side2: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side3: number;
}
export class QTriangleDto {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  side1: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side2: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  side3: number;
}
export class QAreCongruentDto {
  @Transform(({ value }) => JSON.parse(value))
  // @ValidateNested()
  // @Type(() => QTriangleDto)
  tr1: QTriangleDto;
  @Transform(({ value }) => JSON.parse(value))
  // @ValidateNested()
  // @Type(() => QTriangleDto)
  tr2: QTriangleDto;
}