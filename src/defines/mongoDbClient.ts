import { MongoClient, Db } from "mongodb";
import { mongodbConnections } from './mongodbConnections'

export class mongoDbClient {
    public db!: MongoClient;

    public async connect() {
        // async / await approach:
        this.db = await MongoClient.connect(mongodbConnections.local);
        console.log("Connected to db");
        return this.db;

        // -------------------------------------------------
        // Promises approach:
        // -------------------------------------------------
        // return MongoClient.connect("mongodb://localhost:27017/test")
        //     .then(db => {
        //         this.db = db;
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        // -------------------------------------------------
        // Callback approach:
        // -------------------------------------------------

        //     MongoClient.connect("mongodb://localhost:27017/test", (err, db) => {
        //         if(err) {
        //             console.log(err);
        //         } else {
        //             this.db = db;
        //         } 
        //     });
        // }
    }
}