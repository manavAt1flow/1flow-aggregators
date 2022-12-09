import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { SCREEN } from "src/modules/analytics-user/context/context.constant";

export type ContextDocument = Context & Document;

@Schema({
    strict: false,
	_id: false,
})
class App {
    _id: false;
    @Prop({
		type: String,
		default: null
	})
    version: String;
    @Prop({
		type: String,
		default: null
	})
    build: String;
}
export const AppSchema = SchemaFactory.createForClass(App);

@Schema({
    strict: false,
	_id: false,
})
class Device {
    _id: false;
    @Prop({
		type: String,
		default: null
	})
    manufacturer: String;
    @Prop({
		type: String,
		default: null
	})
    model: String;
}
export const DeviceSchema = SchemaFactory.createForClass(Device);

@Schema({
    strict: false,
	_id: false,
})
class Library {
    _id: false;
    @Prop({
		type: String,
		default: null
	})
    name: String;
    @Prop({
		type: String,
		default: null
	})
    version: String;
}
export const LibrarySchema = SchemaFactory.createForClass(Library);

@Schema({
    strict: false,
	_id: false
})
class Location {
    _id: false;
    @Prop({
		type: String,
		default: null
	})
    country: String;
    @Prop({
		type: String,
		default: null
	})
    region: String;
    @Prop({
		type: String,
		default: null
	})
    city: String;
}
export const LocationSchema = SchemaFactory.createForClass(Location);

@Schema({
    strict: false,
	_id: false
})
class Network {
    _id: false;
    @Prop({
		type: String,
		default: null
	})
    carrier: String;
    @Prop({
		type: Boolean,
		default: false
	})
    wifi: Boolean;
}
export const NetworkSchema = SchemaFactory.createForClass(Network);

@Schema({
    strict: false,
	_id: false
})
class OS {
    _id: false;
    @Prop({
		type: String,
		default: null
	})
    name: String;
    @Prop({
		type: String,
		default: null
	})
    version: String;
}
export const OSSchema = SchemaFactory.createForClass(OS);

@Schema({
    strict: false,
	_id: false
})
class Screen {
    _id: false;
    @Prop({
		type: Number,
		default: null
	})
    width: String;
    @Prop({
		type: Number,
		default: null
	})
    height: String;
    @Prop({
        type: String,
        enum: SCREEN,
        default: SCREEN.MOBILE
    })
    type: String;
}
export const ScreenSchema = SchemaFactory.createForClass(Screen);

@Schema({
    strict: false,
	_id: false
})
export class Context {
    @Prop({
		type: AppSchema,
		default: {}
	})
    app: App;
    @Prop({
		type: DeviceSchema,
		default: {}
	})
    device: Device;
    @Prop({
		type: LibrarySchema,
		default: {}
	})
    library: Library;
    @Prop({
		type: LocationSchema,
		default: {}
	})
    location: Location;
    @Prop({
		type: NetworkSchema,
		default: {}
	})
    network: Network;
    @Prop({
		type: OSSchema,
		default: {}
	})
    os: OS; 
    @Prop({
		type: ScreenSchema,
		default: {}
	})
    screen: Screen
}
export const ContextSchema = SchemaFactory.createForClass(Context);