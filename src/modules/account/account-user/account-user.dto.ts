import { IsEmail, IsNotEmpty, isNumber } from "class-validator";

export class CreateAccountUserDto {
    first_name: String;

    last_name: String;

    phone_number: String;

    @IsNotEmpty()
    email: String;

    password: String;

    password_token: String;

    google_id: String;

    logon_type: String;

    step: String;

    trial_start: Number;

    deleted: Boolean;

    created_on: Number;

    updated_on: Number;

    deleted_on: Number;

    schema_version: Number;
}