import { IsString, IsNotEmpty } from "@nestjs/class-validator";


export class CreatePageDto {
  @IsString()
  @IsNotEmpty()
  public  url: string;

  public depth: number;
}
