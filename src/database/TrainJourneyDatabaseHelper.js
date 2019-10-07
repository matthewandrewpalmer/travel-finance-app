import shortid from "shortid";
import {allTheStations} from "./TrainStationDatabase";

class TrainJourney {
    constructor(date, departing, destination, ticketType, cost, railcard, totalCost, saving) {
        this.id = shortid.generate();
        this.date = date;
        this.departing = departing;
        this.destination = destination;
        this.ticketType = ticketType;
        this.cost = cost;
        this.railcard = railcard;
        this.totalCost = totalCost;
        this.saving = saving;
    }
}


// Define your models and their properties
const TRAIN_TRAVEL_SCHEMA = 'TrainTravel';
const TrainTravelSchema = {
    name: TRAIN_TRAVEL_SCHEMA,
    properties: {
        id: 'string', // primary key
        date: 'date',
        departing: 'string',
        destination: 'string',
        ticketType: 'string',
        cost: 'double',
        railcard: 'bool',
        totalCost: 'double',
        saving: 'double',
        // miles: {type: 'int', default: 0},
    }
};

const databaseOptions = {
    path: 'travelFinanceApp.realm',
    schema: [TrainTravelSchema],
    schemaVersion: 2, // optional
};

function generateTestJourney(realm) {
    let city1 = allTheStations[Math.floor(Math.random() * allTheStations.length)];
    let city2 = allTheStations[Math.floor(Math.random() * allTheStations.length)];
    let randomJourney = new TrainJourney(new Date(), city1, city2, 'single', 10, true, 6,4);

    realm.write(() => {
        realm.create(TRAIN_TRAVEL_SCHEMA, randomJourney);
    });
}

export {
    TrainJourney,
    TRAIN_TRAVEL_SCHEMA,
    databaseOptions,
    generateTestJourney
}