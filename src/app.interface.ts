import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

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
