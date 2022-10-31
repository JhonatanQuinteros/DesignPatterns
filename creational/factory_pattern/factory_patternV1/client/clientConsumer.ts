import { Creator } from "../../../01_factory_pattern/factory_patternV1/pattern/creator";
import { MongoCreator } from "../../../01_factory_pattern/factory_patternV1/pattern/factory/mongo/mongoCreator";
import { SqlCreator } from "../../../01_factory_pattern/factory_patternV1/pattern/factory/sql/sqlCreator";

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