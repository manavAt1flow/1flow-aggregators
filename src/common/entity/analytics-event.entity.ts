import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type AnalyticsEventDocument = AnalyticsEvent & Document;

@Schema({
	collection: 'analytics_events_v2'
})
export class AnalyticsEvent extends Document {
    @Prop({
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "account_projects",
	})
	project_id: String;
    @Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "account_users",
		required: true
	})
	user_id: String;
    @Prop({
        type: String,
        required: true
    })
    event: String;
    @Prop({ 
        type: Object, 
        default: {} 
    })
    properties: { 
        type: Object, 
        default: {} 
    };
    @Prop({
		type: Number,
	})
    timestamp: {
		type: Number,
	};
    @Prop({
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
	deleted_at: Number;
    @Prop({
		type: Boolean,
		default: false
	})
	deleted: Boolean;
    @Prop({
        type: Number,
    })
    schema_version: Number
}

export const AnalyticsEventSchema = SchemaFactory.createForClass(AnalyticsEvent);