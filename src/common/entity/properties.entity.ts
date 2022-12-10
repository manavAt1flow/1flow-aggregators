import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { PROPERTIES_TYPE, DATA_TYPE } from "src/modules/properties/properties.constant";
import { AccountProject } from "./account-project.entity";

export type PropertiesDocument = Properties & Document;

@Schema({
    collection: 'properties',
    strict: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
export class Properties extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: AccountProject.name })
    project_id: String;

    @Prop({ type: mongoose.Schema.Types.String, default: "" })
    display_name: String;

    @Prop({ type: mongoose.Schema.Types.String, required: true })
    code_name: String;

    @Prop({ type: mongoose.Schema.Types.String, default: "" })
    description: String;

    @Prop({ type: mongoose.Schema.Types.String, default: "", enum: PROPERTIES_TYPE, required: true })
    type: String;

    @Prop({ type:  mongoose.Schema.Types.String, default: "string", enum: DATA_TYPE, required: true })
    data_type:  mongoose.Schema.Types.String;
}

export const PropertiesSchema = SchemaFactory.createForClass(Properties);

PropertiesSchema.set('toJSON', {
    virtuals: true
});