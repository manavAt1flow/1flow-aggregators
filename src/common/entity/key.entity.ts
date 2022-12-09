import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { KEY_TYPE } from "src/modules/account/key/key.constant";

export type KeyDocument = Key & Document;

@Schema({
	collection: 'project_keys'
})
export class Key extends Document {
	@Prop({
		type: mongoose.Types.ObjectId,
		required: true
	})
	project_id: String;
	@Prop({
		type: String,
		required: true
	})
	key: String;
	@Prop({
		type: String,
		required: true
	})
	key_name: String;
	@Prop({
		type: Boolean,
		default: true
	})
	active: Boolean;
	@Prop({
		type: String,
		enum: KEY_TYPE,
		default: KEY_TYPE.PROD
	})
	key_mode: String;
	@Prop({
		type: Boolean,
		default: false
	})
	deleted: Boolean;
	@Prop({
		type: Number,
		default: () => new Date().valueOf()
	})
	created_on: Number;
	@Prop({
		type: Number,
		default: () => new Date().valueOf()
	})
	updated_on: Number;
	@Prop({
		type: Number,
		default: null
	})
	deleted_on: Number;
	@Prop({
		type: Number,
	})
	schema_version: Number;
}

export const KeySchema = SchemaFactory.createForClass(Key);