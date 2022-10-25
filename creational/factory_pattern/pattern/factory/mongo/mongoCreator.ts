import { Database } from "../../interfaces/database";
import { Creator } from "../../creator";
import { MongoInstance } from "./mongoInstance";

export class MongoCreator extends Creator{
    public factoryDatabase(): Database {
        return new MongoInstance();
    }    
}