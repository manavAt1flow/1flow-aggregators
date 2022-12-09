export enum PLATFORM {
    IOS = "iOS",
    ANDROID = "android",
    WINDOWS = "windows",
    MAC = "mac",
    WEB = "web"
}

export enum DISPLAY_MODE {
    LIGHT = "light",
    DARK = "dark",
    AUTO = "auto"
}

export enum INPUT_TYPE {
    RATING = "rating",
    MCQ = "mcq",
    TEXT = "text",
    THANK_YOU = "thank_you",
    RATING_NUMERICAL = "rating-numerical",
    RATING_5_STAR = "rating-5-star",
    RATING_EMOJIS = "rating-emojis",
    CHECKBOX = "checkbox",
    NPS = "nps",
    SHORT_TEXT = "short-text",
    WELCOME = "welcome-screen",
    END = "end-screen"
}

export enum BUTTON_ACTION {
    BUTTON_ACTION_SUBMIT= "button_action_submit",
    BUTTON_ACTION_DISMISS= "button_action_dismiss",
    BUTTON_ACTION_REDIRECT_STORE_REVIEW = "button_action_redirect_store_review",
    BUTTON_ACTION_REDIRECT_URL="button_action_redirect_url",
    BUTTON_ACTION_REDIRECT_STORE_RATING="button_action_redirect_store_rating"
}

export enum BUTTON_TYPE {
   PRIMARY="primary",
   SECONDARY="secondary",
   DONE="done"
}

export enum STATUS {
    IN_PROGRESS = "in-progress",
    COMPLETED = "completed",
    PAUSED = "paused",
    DRAFT = "draft",
    ARCHIVED = "archived"
}

export enum RETAKE_VALUE {
    MINUTES = "minutes",
    DAYS = "days",
    HOURS = "hours"
}

export enum RELATION {
    IS = "is",
    IS_NOT = "is not",
    STARTS_WITH = "starts with",
    ENDS_WITH = "ends with",
    CONTAINS = "contains",
    DOES_NOT_CONTAIN = "does not contain"
}