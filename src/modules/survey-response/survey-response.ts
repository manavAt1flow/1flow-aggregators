import { INPUT_TYPE } from "../project-survey/project-survey.constant";

export class SurveyResponse {
    getTheAnswer(answer, question) {
        switch (question.input.input_type) {
            case INPUT_TYPE.CHECKBOX:
                return question.input.choices.find(a => a._id.toString() === answer.answer_index.toString())?.title;
            case INPUT_TYPE.MCQ:
                return question.input.choices.find(a => a._id.toString() === answer.answer_index.toString())?.title;
            case INPUT_TYPE.NPS:
                return answer.answer_value;
            case INPUT_TYPE.RATING:
                return answer?.answer_value;
            case INPUT_TYPE.RATING_5_STAR:
                return answer.answer_value;
            case INPUT_TYPE.RATING_EMOJIS:
                return answer.answer_value;
            case INPUT_TYPE.RATING_NUMERICAL:
                return answer.answer_value;;
            case INPUT_TYPE.TEXT:
                return answer.answer_value;
            case INPUT_TYPE.THANK_YOU:
                return answer?.answer_value;
            case INPUT_TYPE.SHORT_TEXT:
                return answer?.answer_value;
            default:
                return ""
        }
    }
}
