import { Injectable } from '@nestjs/common';

const AWS = require('aws-sdk');


@Injectable()
export class AwsSqsService {

    public sqs = new AWS.SQS({
        apiVersion: "2012-11-05",
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-west-1'
    });
    public accountId = '220396164681';
    public queueName = '1flow-sqs';
    public queueUrl = process.env.SQS_URL;
    constructor() { }

    sendData(groupId, deduplicationId, body) {
        const params = {
            MessageBody: JSON.stringify(body),
            QueueUrl: this.queueUrl
        }
        this.sqs.sendMessage(params, (err, data) => {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Successfully added message", data.MessageId);
            }
        });
    }

    receiveData(callback) {
        const params = {
            QueueUrl: this.queueUrl,
            MaxNumberOfMessages: 10,
            VisibilityTimeout: 60,
            WaitTimeSeconds: 0
        };

        this.sqs.receiveMessage(params, (err, data) => {
            if (err) {
                console.log(err, err.stack);
            } else {
                if (!data.Messages) {
                    console.log('Nothing to process');
                    return;
                }
                for(let { Body } of data.Messages){
                    callback(JSON.parse(Body));
                }
                const deleteParamsBatch = {
                    QueueUrl: this.queueUrl,
                    Entries: data.Messages.map(message => ({
                        Id: message.MessageId,
                        ReceiptHandle: message.ReceiptHandle
                    })).filter((value, index, self) =>
                        index === self.findIndex((t) => (
                            t.Id === value.Id
                        ))
                    )
                };
                this.sqs.deleteMessageBatch(deleteParamsBatch, function (err, data) {
                    if (err) console.log(err, err.stack); // an error occurred
                    else console.log(data);           // successful response
                });
            }
        });
    }
}
