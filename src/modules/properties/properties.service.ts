import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Properties, PropertiesDocument } from 'src/common/entity/properties.entity';
import { DATA_TYPE, PROPERTIES_TYPE } from './properties.constant';
const cron = require('node-cron');

@Injectable()
export class PropertiesService{
    constructor(
        @InjectModel(Properties.name) private propertiesModel: Model<PropertiesDocument>,
    ) {
        this.aggregate = this.aggregate.bind(this)
    }

    public async aggregate(data) {
        console.log("Received event._id", data._id, data.event);
        console.log(data);
        const response = data.hasOwnProperty('properties')? 
                            this.prepareProperties(PROPERTIES_TYPE.EVENT, data.project_id, data.properties):
                            this.prepareProperties(PROPERTIES_TYPE.USER, data.project_id, data.traits);
                            
        for(let res of response){
            const resu = await this.propertiesModel.updateOne({
                project_id: res.project_id,
                code_name: res.code_name,
                type: res.type
            }, {
                ...res
            }, { upsert: true });
            console.log(resu);
        }
    }


    public prepareProperties(type: PROPERTIES_TYPE, project_id, properties) {
        const keys = Object.keys(properties || {});
        return keys.map(key => {
            return {
                project_id: new Types.ObjectId(project_id),
                display_name: key,
                code_name: key,
                description: "",
                type: type,
                data_type: this.getType(properties[key])
            }
        })
    }

    public getType(value): DATA_TYPE {
        return DATA_TYPE.STRING;
    }
}
