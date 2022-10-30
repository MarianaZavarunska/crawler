import { IsString, IsNotEmpty } from "class-validator";


export class CreatePageDto {
  @IsString()
  @IsNotEmpty()
  public  url: string;

  public depth: number;
}
