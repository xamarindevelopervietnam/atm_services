import { Server, Client } from "mosca";
import * as mongoose from "mongoose";
import { mongoDbNaming } from '../defines/mongoDbNaming';
import { atmLocationStatusSchema} from '../models/atmLocationStatusModel';
import { atmLocationStatusMessage } from "../messages/atmLocationStatusMessage";
const atmLocationStatus = mongoose.model(mongoDbNaming.atmLocationStatus, atmLocationStatusSchema);

export class atmLocationStatusReactor {
    private topic: string;
    private retain: boolean;
    private qos: number;
    private network: number;
    private clientId: string;

    constructor(topic: string, retain: boolean, qos: number, clientId: string, network: number) {
        this.topic = topic;
        this.retain = retain;
        this.qos = qos;
        this.network = network;
        this.clientId = clientId;
    }

    processMessage(socketServer: Server, mqttClient: Client) {
           atmLocationStatus.find({network : this.network}, (err, locations) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log(locations);
                var msg = new atmLocationStatusMessage(locations);
                var packet = msg.createMessage(this.topic, this.retain, this.qos, this.clientId);
                socketServer.published(packet, mqttClient, function(cb) {
                    console.log(`Send message with callback: ${cb}`);
                });
            }
        });
    }
}