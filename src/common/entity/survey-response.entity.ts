import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { PLATFORM } from "src/modules/survey-response/survey-response.constant";
import { AnalyticsUser } from "./analytics-user.entity";
import { ProjectSurvey } from "./project-survey.entity";

export type SurveyResponseDocument = SurveyResponse & Document;

@Schema({
    strict: false,
})
class Answer {
	@Prop({ // (this is aka the question id, because 1 screen = 1 question) // Check
		type: String,
		required: true
	})
	screen_id: String;
	@Prop({ // (raw string value reported on the multiple choice)  // Rating
		type: String,
		default: null
	})
	answer_value: String;
	@Prop({ // (multiple choice questions) // Choice Id
		type: String,
		default: null
	})
	answer_index: String
}
const AnswerSchema = SchemaFactory.createForClass(Answer);


@Schema({
	collection: 'project_survey_new_responses'
})
export class SurveyResponse extends Document {
    @Prop({
		type: String,
		required: true,
		enum: PLATFORM
	})
    os: {
		type: String,
		required: true,
		enum: PLATFORM
	};
	@Prop( {
		type: mongoose.Types.ObjectId,
		ref: AnalyticsUser.name
	})
	analytic_user_id: String;
	@Prop( {
		type: mongoose.Types.ObjectId,
		ref: ProjectSurvey.name
	})
	survey_id: String;
	@Prop( {
		type: mongoose.Types.ObjectId,
	})
	session_id: String;
	@Prop({ 
		type: Number,
		default: null
	})
	tot_duration: Number;
	@Prop({ // InSeconds
		type: String,
		default: null
	})
	trigger_event: String;
	@Prop( {
		type: Number,
		default: () => new Date().valueOf()
	})
	created: Number;
	@Prop({
		type: Number,
		default: () => new Date().valueOf()
	})
	updated_on: Number;
	@Prop({
        type: [AnswerSchema],
        default: []
    })
	answers: Answer[]
}

export const SurveyResponseSchema = SchemaFactory.createForClass(SurveyResponse);

SurveyResponseSchema.set('toJSON', {
    virtuals: true
});
