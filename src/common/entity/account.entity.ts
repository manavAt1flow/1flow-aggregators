import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AccountDocument = Account & Document;

@Schema({
	collection: 'accounts'
})
export class Account  {
	@Prop({ type: String, required: true })
	name: String;

	@Prop({ type: String, required: true })
	company_size: String;

	@Prop({ type: Number, required: false, default: 0 })
	active_users: Number;

	@Prop({ type: Boolean, default: false })
	deleted: Boolean;

	@Prop({ type: Number, default: new Date().valueOf() })
	created_on: Number;

	@Prop({ type: Number, default: new Date().valueOf() })
	updated_on: Number;

	@Prop({ type: Number, default: null })
	deleted_on: Number;

	@Prop({ type: Number, default: new Date().valueOf() })
	trial_start: Number;

	@Prop({ type: Number })
	schema_version: Number;

}

export const AccountSchema = SchemaFactory.createForClass(Account);