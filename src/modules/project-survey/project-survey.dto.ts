import { ArrayMinSize, IsArray, IsEmail, IsEnum, isNotEmpty, IsNotEmpty, isNumber, IsOptional, ValidateIf, ValidateNested } from "class-validator";
import { BUTTON_ACTION, BUTTON_TYPE, DISPLAY_MODE, INPUT_TYPE, PLATFORM, RELATION, RETAKE_VALUE, STATUS } from "./project-survey.constant";
import { Type } from "class-transformer";

class StyleDto {
    @IsEnum(DISPLAY_MODE)
    display_mode: String;

    font:String;

    primary_color: String;

    @IsNotEmpty()
    corner_radius: Number;

    color_opacity: Number;

    change_trigger: Boolean;

    previous_change_color: Boolean;
}

class ChoiceDto {
    @IsNotEmpty()
    title: String;
}

class InputDto{
    @IsEnum(INPUT_TYPE)
    input_type: String;

    @IsOptional()
    placeholder_text?: String;

    @ValidateIf(o => o.input_type == INPUT_TYPE.RATING)
    @IsNotEmpty()
    min_val: Number;

    @ValidateIf(o => o.input_type == INPUT_TYPE.RATING)
    @IsNotEmpty()
    max_val: Number;

    @IsNotEmpty()
    emoji: Boolean;

    @IsNotEmpty()
    stars: Boolean;

    emojis: String[];

    star_fill_color: String;

    @Type(()=> ChoiceDto)
    choices: ChoiceDto[];

    @ValidateIf(o => o.input_type == INPUT_TYPE.TEXT)
    @IsNotEmpty()
    min_chars:Number;

    @ValidateIf(o => o.input_type == INPUT_TYPE.TEXT)
    @IsNotEmpty()
    max_chars: Number;

    @ValidateIf(o => o.input_type == INPUT_TYPE.MCQ)
    @IsNotEmpty()
    number_of_choices: Number;

    @IsOptional()
    rating_min_text?: String;

    @IsOptional()
    rating_max_text?: String;

    @IsOptional()
    other_option_id?: String;

    @IsOptional()
    rating_text?: Object;
}

class ButtonDto{
    @IsNotEmpty()
    title:String;

    @IsNotEmpty()
    @IsEnum(BUTTON_ACTION)
    action: String;

    @IsNotEmpty()
    @IsEnum(BUTTON_TYPE)
    button_type:String;
}

class ScreenDto {
    @IsNotEmpty()
    title: String;

    message: String;

    @Type(()=> InputDto)
    input: InputDto;

    @Type(()=> ButtonDto)
    buttons: ButtonDto[];
}

class FrequencyCappingDto{
    
    enabled: Boolean;

    @IsNotEmpty()
    frequency_capping_input_value: Number;
    
    @IsNotEmpty()
    frequency_capping_select_value: String;
    
    @IsNotEmpty()
    time_per_user: Number;
}

class RetakeInputValueDto{
    @IsNotEmpty()
    retake_input_value: Number;
    @IsNotEmpty()
    retake_select_value: String;
}

class RetakeSurveyDto{
    @IsOptional()
    retake_input_value?: Number;

    @IsOptional()
    @IsEnum(RETAKE_VALUE)
    retake_select_value?: String;
}

class PageRulesDto{
    @IsOptional()
    url_type?: String;

    @IsOptional()
    @IsEnum(RELATION)
    relation?: String;
    
    @IsOptional()
    url?: String;
    
    @IsOptional()
    time_spend_type?: String;
    
    @IsOptional()
    time_spend_relation?: String;
    
    @IsOptional()
    time_spend?: Number;
}

class FrequencyAndSchedulingDto{
    @IsOptional()
    enabled?: Boolean;
    @IsOptional()
    frequency_capping_input_value?: Number;
    @IsOptional()
    frequency_capping_select_value?: String;
    @IsOptional()
    time_per_user?: Number;
}

class SdkThemeDto{
    @IsOptional()
    background_color?: String;
    @IsOptional()
    background_color_opacity?: Number;
    @IsOptional()
    text_color?: String;
    @IsOptional()
    text_color_opacity?: Number;
    @IsOptional()
    remove_watermark?: Boolean;
    @IsOptional()
    widget_position?: String;
    @IsOptional()
    dark_overlay?: Boolean;
    @IsOptional()
    close_button?: Boolean;
    @IsOptional()
    progress_bar?: Boolean;
}

class EventRulesDto{}

class AudienceRulesDto{
    @IsOptional()
    event_name?: String;
    @IsOptional()
    event_value?: Object;
}

class SurveySettingsDto {
    @IsNotEmpty()
    show_watermark: Boolean;

    @IsNotEmpty()
    resurvey_option: Boolean;

    @IsOptional()
    closed_as_finished?: Boolean;

    @Type(()=> FrequencyCappingDto)
    frequency_capping: FrequencyCappingDto;

    @IsOptional()
    @Type(()=> RetakeSurveyDto)
    retake_survey?: RetakeSurveyDto;

    @IsOptional()
    @Type(()=> PageRulesDto)
    page_rules?: PageRulesDto;

    @IsOptional()
    @Type(()=> FrequencyAndSchedulingDto)
    frequencyAndScheduling?: FrequencyAndSchedulingDto;

    @Type(()=> RetakeInputValueDto)
    retake_input_value: RetakeInputValueDto;

    @IsOptional()
    @Type(()=> SdkThemeDto)
    sdk_theme?: SdkThemeDto;

    @IsOptional()
    @Type(()=> EventRulesDto)
    event_rules?: EventRulesDto;

    @IsOptional()
    @Type(()=> AudienceRulesDto)
    audience_rules?: AudienceRulesDto[];
}

export class CreateProjectSurveyDto {
    @IsNotEmpty()
    project_id: String;

    @IsNotEmpty()
    name: String;

    description: String;

    @IsOptional()
    created_by?: String;

    @IsOptional()
    updated_by?: String;

    start_date: Number;

    @IsOptional()
    end_date?: Number

    @IsOptional()
    live?: Boolean;

    @IsNotEmpty()
    @IsEnum(PLATFORM, { each: true  })
    @ArrayMinSize(1)
    platforms: String[];

    @IsNotEmpty()
    trigger_event_name: String;
   
    @Type(()=> StyleDto)
    style: StyleDto;

    @IsArray()
    @ValidateNested({each: true})
    @Type(()=> ScreenDto)
    screens: ScreenDto[];

    @Type(()=> SurveySettingsDto)
    survey_settings: SurveySettingsDto;

    @IsOptional()
    icon?: String;

    @IsOptional()
    color?: String;

    @IsOptional()
    @IsEnum(STATUS)
    status?: String;

    @IsOptional()
    created_on?: Number;
    @IsOptional()
    updated_on?: Number;
    @IsOptional()
    deleted?: Boolean
    @IsOptional()
    deleted_on?: Number;
    @IsOptional()
    schema_version?: Number;
}

export class ProJectIDParamsDTO {
    @IsNotEmpty()
    project_id: string;
}