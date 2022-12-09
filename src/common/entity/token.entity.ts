import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TokenDocument = Token & Document;

@Schema({
	collection: 'tokens'
})
export class Token extends Document {

	@Prop({ type: String, required: true })
	common_id: String;

	@Prop({ type: Object, required: false })
	user_permission: String;

	@Prop({ type: String, required: true, index:true})
	token: String;

	@Prop({ type: Number, default: new Date().valueOf() })
	created_on: Number;

    @Prop({ type: Number })
	schema_version: Number;
}

export const TokenSchema = SchemaFactory.createForClass(Token);