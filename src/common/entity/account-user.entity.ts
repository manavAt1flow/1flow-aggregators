import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { LOGIN_METHOD, STEP } from "../../modules/account/account-user/account-user.constant";

export type AccountUserDocument = AccountUser & Document;

@Schema({
    collection: 'account_users'
})
export class AccountUser {
    @Prop({ type: String, required: false, default: null })
    first_name: String;

    @Prop({ type: String, required: false, default: null })
    last_name: String;

    @Prop({ type: String, required: false, default: null })
    phone_number: String;

    @Prop({ type: String, required: true, lowercase: true })
    email: String;

    @Prop({ type: String, required: false, default: "" })
    password: String;

    @Prop({ type: String, required: false, default: null })
    password_token: String;

    @Prop({ type: String, required: false, default: "" })
    google_id: String;

    @Prop({ type: String, enum: LOGIN_METHOD, default: LOGIN_METHOD.MANUAL })
    logon_type: String;

    @Prop({
        type: String, 
        enum: STEP,
        default: STEP.STEP_1
    })
    step: String;

    @Prop({ type: Number, default: new Date().valueOf() })
    trial_start: Number;

    @Prop({ type: Boolean, default: false })
    deleted: Boolean;

    @Prop({ type: Number, default: new Date().valueOf() })
    created_on: Number;

    @Prop({ type: Number, default: new Date().valueOf() })
    updated_on: Number;

    @Prop({ type: Number, default: null })
    deleted_on: Number;

    @Prop({ type: Number })
    schema_version: Number;
}

export const AccountUserSchema = SchemaFactory.createForClass(AccountUser);