import { Creator } from "../../creator";
import { Database } from "../../interfaces/database";
import { SqlInstance } from "./sqlInstance";

export class SqlCreator extends Creator{
    public factoryDatabase(): Database {
        return new SqlInstance();
    }
    
}