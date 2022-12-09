import { Transformer } from './transformer';

describe('Transformer', () => {
  const analyticsUser = {
    "project_id": "62c5b2538ab2d3000ed75b44",
    "user_id": "2342342434",
    "context": {
      "app": {
        "version": "1",
        "build": "1"
      },
      "device": {
        "manufacturer": "Xiomi",
        "model": "1"
      },
      "library": {
        "name": null,
        "version": null
      },
      "location": {
        "country": "India",
        "region": null,
        "city": "Mumbai"
      },
      "network": {
        "carrier": null,
        "wifi": false
      },
      "os": {
        "name": "windows",
        "version": "1"
      },
      "screen": {
        "width": 566,
        "height": 567,
        "type": "Laptop"
      }
    },
    "timestamp": 1657339620000,
  }

  const createAnalyticsUserPayload = {
    "timestamp": 1657339620,
    "user_id": "2342342434",
    "app": {
      "version": "1",
      "build": "1"
    },
    "device": {
      "os": "windows",
      "device_id": "dev_cc",
      "unique_id": "",
      "manufacturer": "Xiomi",
      "model": "1",
      "os_ver": "1",
      "screen_width": 566,
      "screen_height": 567,
      "wifi": false,
      "type": "Laptop"
    },
    "location": {
      "country": "India",
      "city": "Mumbai",
      "region": "",
      "longitude": "12.54",
      "latitude": "12.5"
    },
    "project_id": "62c5b2538ab2d3000ed75b44",
  }

  const eventPayload = {
    "analytics_user_id": "62c678adad2302d24ac5e291",
    "event": "click",
    "timestamp": 2343234,
    "properties": {
      "message": "hello"
    },
    "project_id": "62c678adad2302d24ac5e291",
  }

  const event= {
    "analytics_user_id": "62c678adad2302d24ac5e291",
    "event": "click",
    "timestamp": 2343234000,
    "properties": {
      "message": "hello"
    },
    "project_id": "62c678adad2302d24ac5e291",
  }

  let transformer = new Transformer();
  it('should be defined', () => {
    expect(transformer).toBeDefined();
  });

  it('analyticsUser', () => {
    const obj = transformer.analyticsUser(createAnalyticsUserPayload);

    expect(obj).toEqual(analyticsUser);
  });

  it('analyticsEvent', () => {
    const obj = transformer.analyticsEvent(eventPayload);

    expect(obj).toEqual(event);
  });

});
