import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateFormAnswareNestedDto } from './create-form-answare-nested.dto';

export class PauseEvaluationAnswareDto {
  @IsString()
  @IsNotEmpty()
  professionalId: string;

  @ValidateNested()
  @IsArray() // Add IsArray decorator as the payload indicates it's an array
  @Type(() => CreateFormAnswareNestedDto)
  formAnswares: CreateFormAnswareNestedDto[]; // Change to array type
}
