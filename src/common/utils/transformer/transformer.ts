import { SCREEN } from "src/modules/analytics-user/context/context.constant"

export class Transformer {
    constructor() { }

    public analyticsUser({
        user_id,
        app,
        device,
        location,
        project_id,
        timestamp
    }) {
        return {
            project_id,
            user_id,
            context: {
                app: {
                    version: app?.version || null,
                    build: app?.build || null
                },
                device: {
                    manufacturer: (device?.manufacturer) ? device?.manufacturer : null,
                    model: (device?.model) ? device?.model : null
                },
                library: {
                    name: null,
                    version: null
                },
                location: {
                    country: location?.country || null,
                    region: location?.region || null,
                    city: location?.city || null
                },
                network: {
                    carrier: device?.carrier || null,
                    wifi: device?.wifi || false
                },
                os: {
                    name: device?.os || null,
                    version: device?.os_ver || null
                },
                screen: {
                    width: device?.screen_width || 0,
                    height: device?.screen_height || 0,
                    type: device?.type || SCREEN.MOBILE
                }
            },
            timestamp: new Date(timestamp).valueOf() || new Date().valueOf(),
        }
    }

    public analyticsEvent({
        timestamp,
        project_id,
        analytics_user_id,
        event,
        properties
    }){
        return {
            project_id,
            analytics_user_id,
            event,
            properties,
            timestamp: new Date(timestamp).valueOf() || new Date().valueOf(),
        }
    }

}
