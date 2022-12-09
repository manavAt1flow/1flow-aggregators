import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { BUTTON_ACTION, BUTTON_TYPE, DISPLAY_MODE, INPUT_TYPE, PLATFORM, RELATION, RETAKE_VALUE, STATUS } from "../../modules/project-survey/project-survey.constant";
import { AccountProject, AccountProjectSchema } from "./account-project.entity";

export type ProjectSurveyDocument = ProjectSurvey & Document;


@Schema({
    strict: false
})
class Style {
    @Prop({
        type: String,
        enum: DISPLAY_MODE,
        default: DISPLAY_MODE.AUTO
    })
    display_mode: String;

    @Prop({
        type: String,
        default: ""
    })
    font: String;

    @Prop({
        type: String,
        required: false,
        default: null
    })
    primary_color: String;

    @Prop({
        type: Number,
        default: null
    })
    color_opacity: Number;

    @Prop({
        type: Boolean,
        default: false
    })
    change_trigger: Boolean;

    @Prop({
        type: Boolean,
        default: false
    })
    previous_change_color: Boolean;

    @Prop({
        type: Number,
        required: false,
        default: null
    })
    corner_radius: Number;
}
const StyleSchema = SchemaFactory.createForClass(Style);

@Schema({
    strict: false
})
class Choices {
    @Prop({
        type: String,
        default: null
    })
    title: String
}
const ChoicesSchema = SchemaFactory.createForClass(Choices);

@Schema({
    strict: false
})
class Input {
    @Prop({
        type: String,
        enum: INPUT_TYPE,
        required: false
    })
    input_type: String;

    @Prop({
        type: String,
        default: null
    })
    placeholder_text: String;

    @Prop({
        type: Number,
        default: null
    })
    min_val: Number;

    @Prop({
        type: Number,
        default: null
    })
    max_val: Number;

    @Prop({
        type: Boolean
    })
    emoji: Boolean;

    @Prop({
        type: Boolean
    })
    stars: Boolean

    @Prop({
        type: [String],
        default: null
    })
    emojis: String[];

    @Prop({
        type: String,
        default: null
    })
    star_fill_color: String;

    @Prop({
        type: [ChoicesSchema],
        default: null
    })
    choices: Choices[];

    @Prop({
        type: Number,
        default: null
    })
    min_chars: Number;

    @Prop({
        type: Number,
        default: null
    })
    max_chars: Number;

    @Prop({
        type: Number,
        default: null
    })
    number_of_choices: Number;

    @Prop({
        type: String,
        default: null
    })
    rating_min_text: String;

    @Prop({
        type: String,
        default: null
    })
    rating_max_text: String;

    @Prop({
        type: String,
    })
    other_option_id: String;

    @Prop({
        type: Object,
        default: null
    })
    rating_text: Object;
}
const InputSchema = SchemaFactory.createForClass(Input);

@Schema({
    strict: false
})
class Button {
    @Prop({
        type: String,
        required: false
    })
    title: String;
    @Prop({
        type: String,
        enum: BUTTON_ACTION,
        required: false
    })
    action: String;
    @Prop({
        type: String,
        enum: BUTTON_TYPE,
        default: BUTTON_TYPE.PRIMARY
    })
    button_type: String;
}
const ButtonSchema = SchemaFactory.createForClass(Button);

@Schema({
    strict: false
})
class Screen {
    @Prop({
        type: String,
        default: null
    })
    _id: string;
    @Prop({
        type: String,
        default: null
    })
    title: String;
    @Prop({
        type: String,
        default: null
    })
    message: String;

    @Prop({
        type: InputSchema,
    })
    input: Input;

    @Prop({
        type: [ButtonSchema],
    })
    buttons: Button[]
}
const ScreenSchema = SchemaFactory.createForClass(Screen);

@Schema({
    strict: false
})
class FrequencyCapping {
    @Prop({
        type: Boolean,
        default: null
    })
    enabled: Boolean;
    @Prop({
        type: Number,
        default: null
    })
    frequency_capping_input_value: Number;
    @Prop({
        type: String,
        required: false,
        default: "minutes"
    })
    frequency_capping_select_value: String;
    @Prop({
        type: Number,
        default: null
    })
    time_per_user: Number
}
const FrequencyCappingSchema = SchemaFactory.createForClass(FrequencyCapping);

@Schema({
    strict: false
})
class RetakeSurvey {
    @Prop({
        type: Number,
        default: null
    })
    retake_input_value: Number;
    @Prop({
        type: String,
        enum: RETAKE_VALUE,
        required: false,
        default: RETAKE_VALUE.MINUTES
    })
    retake_select_value: String;
}
const RetakeSurveySchema = SchemaFactory.createForClass(RetakeSurvey);

@Schema({
    strict: false
})
class PageRules {
    @Prop({ type: String, default: null })
    url_type: String;
    @Prop({ type: String, enum: RELATION, default: RELATION.IS })
    relation: String;
    @Prop({ type: String, default: null })
    url: String;
    @Prop({ type: String, default: null })
    time_spend_type: String;
    @Prop({ type: String, default: null })
    time_spend_relation: String;
    @Prop({ type: Number, default: null })
    time_spend: Number;
}
const PageRulesSchema = SchemaFactory.createForClass(PageRules);

@Schema({
    strict: false
})
class FrequencyAndScheduling {
    @Prop({
        type: Boolean,
        default: null
    })
    enabled: Boolean;
    @Prop({
        type: Number,
        default: null
    })
    frequency_capping_input_value: Number;
    @Prop({
        type: String,
        required: false,
        default: "minutes"
    })
    frequency_capping_select_value: String;
    @Prop({
        type: Number,
        default: null
    })
    time_per_user: Number;
}
const FrequencyAndSchedulingSchema = SchemaFactory.createForClass(FrequencyAndScheduling);

@Schema({
    strict: false
})
class SdkTheme {
    @Prop({ type: String, default: null })
    background_color: String;
    @Prop({ type: Number, default: null })
    background_color_opacity: Number;
    @Prop({ type: String, default: null })
    text_color: String;
    @Prop({ type: Number, default: null })
    text_color_opacity: Number;
    @Prop({ type: Boolean, default: false })
    remove_watermark: Boolean;
    @Prop({ type: String, default: null })
    widget_position: String;
    @Prop({ type: Boolean, default: false })
    dark_overlay: Boolean;
    @Prop({ type: Boolean, default: true })
    close_button: Boolean;
    @Prop({ type: Boolean, default: true })
    progress_bar: Boolean;
}
const SdkThemeSchema = SchemaFactory.createForClass(SdkTheme);

@Schema({
    strict: false
})
class EventRules {

}
const EventRulesSchema = SchemaFactory.createForClass(EventRules);

@Schema({
    strict: false
})
class AudienceRules {
    @Prop({ type: String })
    event_name: String;

    @Prop({ type: Object })
    event_value: Object;
}
const AudienceRulesSchema = SchemaFactory.createForClass(AudienceRules);

@Schema({
    strict: false
})
class SurveySettings {
    @Prop({
        type: Boolean,
        default: true
    })
    show_watermark: Boolean;
    @Prop({
        type: Boolean,
        default: true
    })
    resurvey_option: Boolean;
    @Prop({
        type: Boolean,
        default: false
    })
    closed_as_finished: Boolean;
    @Prop({
        type: FrequencyCappingSchema
    })
    frequency_capping: FrequencyCapping;
    @Prop({
        type: RetakeSurveySchema
    })
    retake_survey: RetakeSurvey;
    @Prop({
        type: PageRulesSchema
    })
    page_rules: PageRules;
    @Prop({
        type: FrequencyAndSchedulingSchema
    })
    frequencyAndScheduling: FrequencyAndScheduling;
    @Prop({
        type: SdkThemeSchema
    })
    sdk_theme: SdkTheme;
    @Prop({
        type: [EventRulesSchema],
        default: []
    })
    event_rules: EventRules[];
    @Prop({
        type: [AudienceRulesSchema],
        default: []
    })
    audience_rules: AudienceRules[];
}

const SurveySettingsSchema = SchemaFactory.createForClass(SurveySettings);

@Schema({
    collection: 'project_surveys',
    strict: false
})
export class ProjectSurvey extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: AccountProject.name })
    project_id: String;

    @Prop({ type: String, default: "" })
    name: String;

    @Prop({ type: String, default: "" })
    description: String;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "account_users", default: null })
    created_by: String;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "account_users", default: null })
    updated_by: String;

    @Prop({ type: Number, default: () => new Date().valueOf() })
    start_date: Number;

    @Prop({ type: Number, default: null })
    end_date: Number;

    @Prop({ type: Boolean, default: false })
    live: Boolean;

    @Prop({
        type: [String],
        enum: PLATFORM,
        required: true
    })
    platforms: String[];

    @Prop({
        type: String,
        required: false,
        default: null
    })
    trigger_event_name: String;

    @Prop({ type: StyleSchema })
    style: Style;

    @Prop({ type: [ScreenSchema], default: undefined })
    screens: Screen[];

    @Prop({ type: SurveySettingsSchema, default: undefined })
    survey_settings: SurveySettings;

    @Prop({ type: String, default: null })
    icon: String;

    @Prop({ type: String, default: null })
    color: String;

    @Prop({
        type: String,
        enum: STATUS,
        default: STATUS.DRAFT
    })
    status: String;

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
        type: Boolean,
        default: false
    })
    deleted: Boolean;

    @Prop({
        type: Number,
        default: null
    })
    deleted_on: Number;

    @Prop({
        type: Number,
        default: 0
    })
    schema_version: Number;
}

export const ProjectSurveySchema = SchemaFactory.createForClass(ProjectSurvey);

ProjectSurveySchema.set('toJSON', {
    virtuals: true
});