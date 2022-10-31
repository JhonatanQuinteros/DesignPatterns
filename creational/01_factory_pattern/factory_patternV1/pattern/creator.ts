import { Database } from "./interfaces/database";

export abstract class Creator{
    public abstract factoryDatabase():Database;
    
    public getDabaseInstance(): Database {                
        return this.factoryDatabase();
    }
}