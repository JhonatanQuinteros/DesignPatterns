import { Database } from "../../interfaces/database";

export class SqlInstance implements Database{
    Connect(): string {
        return "connected to SQL Server";
    }
    GetOne(): Promise<Object | Error | null> {
        throw new Error("Method not implemented.");
    }
    GetAll(): Promise<Error | [] | null> {
        throw new Error("Method not implemented.");
    }
    Create(): Promise<boolean | Error | null> {
        throw new Error("Method not implemented.");
    }
    Update(): Promise<boolean | Error> {
        throw new Error("Method not implemented.");
    }
    Delete(): Promise<boolean | Error> {
        throw new Error("Method not implemented.");
    }
    
}