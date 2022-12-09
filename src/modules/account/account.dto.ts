import { IsEmail, IsNotEmpty, isNumber } from "class-validator";

export class CreateAccountDto {
    @IsNotEmpty()
    name: String;

    @IsNotEmpty()
    company_size: String;

    active_users: Number;
    
    deleted: Boolean;

	created_on: Number;

	updated_on: Number;

	deleted_on: Number;

	trial_start: Number;

	schema_version: Number;
}