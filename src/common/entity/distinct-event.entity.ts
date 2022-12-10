import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { AccountProject } from "./account-project.entity";

export type DistinctEventsDocument = DistinctEvents & Document;

@Schema({
    collection: 'distinct_events',
    strict: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

export class DistinctEvents extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: AccountProject.name })
    project_id: string;

    @Prop({ type: mongoose.Schema.Types.String, default: "" })
    display_name: string;

    @Prop({ type: mongoose.Schema.Types.String, required: true })
    code_name: string;

    @Prop({ type: mongoose.Schema.Types.String, default: "" })
    description: string;

    @Prop({ type: [mongoose.Schema.Types.String], default: [] })
    event_properties: string[];
}

export const DistinctEventsSchema = SchemaFactory.createForClass(DistinctEvents);

DistinctEventsSchema.set('toJSON', {
    virtuals: true
});