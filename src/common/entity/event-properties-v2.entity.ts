import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { AccountProject } from "./account-project.entity";
import { AnalyticsUser } from "./analytics-user.entity";

export type EventPropertiesV2Document = EventPropertiesV2 & Document;

@Schema({
    collection: 'event_properties_v2',
    strict: false
})
export class EventPropertiesV2 extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: AccountProject.name })
    project_id: String;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: AnalyticsUser.name })
    user_id: String;

    @Prop({ type: mongoose.Schema.Types.String })
    event: String;

    @Prop({ type: mongoose.Schema.Types.Number, default: 1 })
    count: Number;

    @Prop({ type: Number, default: null })
    first_occurred: Number;

    @Prop({ type: Number, default: null })
    last_occurred: Number;

    @Prop({ type: mongoose.Schema.Types.Mixed, default: {} })
    properties: any;

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
        default: 0
    })
    schema_version: Number;
}

export const EventPropertiesV2Schema = SchemaFactory.createForClass(EventPropertiesV2);

EventPropertiesV2Schema.set('toJSON', {
    virtuals: true
});