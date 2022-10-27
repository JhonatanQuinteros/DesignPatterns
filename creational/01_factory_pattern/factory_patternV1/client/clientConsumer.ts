import { Creator } from "../pattern/creator";
import { MongoCreator } from "../pattern/factory/mongo/mongoCreator";
import { SqlCreator } from "../pattern/factory/sql/sqlCreator";

function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    const db = creator.getDabaseInstance();
    const dbStatus = db.Connect();
    console.log(dbStatus);
}

console.log('App: Launched with mongodb');
clientCode(new MongoCreator());


console.log('App: Launched with sql server');
clientCode(new SqlCreator());