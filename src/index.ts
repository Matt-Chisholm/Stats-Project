import { CsvFileReader } from "./CSVFileReader";
import { MatchResult } from "./MatchResult";

const reader = new CsvFileReader('football.csv');
reader.read();


let manUnitedWins = 0;



console.log(`Man United won ${manUnitedWins} games.`);