import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type AccountProjectDocument = AccountProject & Document;

@Schema({
	strict: false
})
class Theme {
	@Prop({
		type: String,
		default: "2d4eff"
	})
	theme_color: String;
	@Prop({
		type: String,
		default: "100"
	})
	theme_opacity: String
}
const ThemeSchema = SchemaFactory.createForClass(Theme);


@Schema({
	strict: false
})
class WebHook {
	@Prop( {
		type: String,
		default: null
	})
	url:String;
	@Prop({
		type:Boolean,
		default:false
	})
	active: Boolean;
}
const WebHookSchema = SchemaFactory.createForClass(WebHook);


@Schema({
	strict: false
})
class SurveySettings {
	@Prop({
		type: String,
		default: null
	})
	project_name: String;
	@Prop({
		type: String,
		default: null
	})
	logo: String;
	@Prop({
		type: String,
		default: null
	})
	brand_color: String;
	@Prop({
		type: String,
		default: null
	})
	color_preview: String;
	@Prop({
		type: Boolean,
		default: false
	})
	signature: Boolean;
}
const SurveySettingsSchema = SchemaFactory.createForClass(SurveySettings);

@Schema({
	collection: 'account_projects'
})
export class AccountProject extends Document {
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "accounts",
		required: true
	})
	account_id: String;

	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: "account_users",
		required: true
	})
	created_by: String;

	@Prop({
		type: String,
		required: true
	})
	name: String;

	@Prop({
		type: String,
		required: true
	})
	timezone: String;

	@Prop({
		type: String,
		required: true
	})
	description: String;

	@Prop({
		type: ThemeSchema,
		required: true
	})
	theme_style: Theme;

	@Prop({
		type: SurveySettingsSchema,
	})
	survey_setting: SurveySettings;

	@Prop({
		type: WebHookSchema,
	})
	web_hook: WebHook;

	@Prop({ type: Number, default: new Date().valueOf() })
	created_on: Number;
	@Prop({ type: Number, default: new Date().valueOf() })
	updated_on: Number;
	@Prop({ type: Boolean, default: false })
	deleted: Boolean;
	@Prop({ type: Number })
	schema_version: Number;
}

export const AccountProjectSchema = SchemaFactory.createForClass(AccountProject);