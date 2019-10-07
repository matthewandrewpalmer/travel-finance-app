import Realm from 'realm';
import {allTheStations} from "./TrainStationDatabase";
import {databaseOptions, generateTestJourney, TRAIN_TRAVEL_SCHEMA} from "./TrainJourneyDatabaseHelper";


export const storeNewJourney = (newJourney) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.create(TRAIN_TRAVEL_SCHEMA, newJourney);

        resolve(true)
    }).catch(error => reject(error))
});


export const queryAllJourneys = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {

        // var i = 2;
        // var len =50;
        // var text = "";
        // for (; i < len; i++) {
        //     generateTestJourney(realm);
        // }

        // generateTestJourney(realm);

        // return all Non synced (isSync = false) noise data sorted by timestamp
        let allJourneys = realm.objects(TRAIN_TRAVEL_SCHEMA)
            .sorted('date', true);

        console.log("==============>>" + allJourneys);
        console.log("==============>>" + allJourneys.length);
        resolve(allJourneys)
    }).catch(error => reject(error))
});

export default new Realm(databaseOptions);