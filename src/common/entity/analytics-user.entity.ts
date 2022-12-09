import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Context, ContextSchema } from "./context.entity";

export type AnalyticsUserDocument = AnalyticsUser & Document;

@Schema({
	collection: 'analytics_users_v2',
	strict:true
})
export class AnalyticsUser extends Document {
    @Prop({
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "account_projects",
	})
	project_id: String;
    @Prop({
		type: String,
	})
	user_id: String;
    @Prop({
		type: Object,
		default: {}
	})
	traits: {};
	@Prop({
		type: Boolean,
		default: true
	})
	identified: Boolean;
	@Prop({
		type: ContextSchema,
		default: {}
	})
	context: Context;
    @Prop({
		type: Number,
	})
	timestamp: Number;
    @Prop( {
		type: Number,
		default: () => new Date().valueOf()
	})
	created_at:Number;
    @Prop({
		type: Number,
		default: () => new Date().valueOf()
	})
	updated_at: Number;
    @Prop({
		type: Number,
		default: null
	})
	deleted_at:Number;
    @Prop( {
		type: Boolean,
		default: false
	})
	deleted: Boolean;
    @Prop( {
		type: Number,
	})
	schema_version:Number;
}

export const AnalyticsUserSchema = SchemaFactory.createForClass(AnalyticsUser);