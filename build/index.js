"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const reader = new CSVFileReader_1.CsvFileReader('football.csv');
reader.read();
let manUnitedWins = 0;
console.log(`Man United won ${manUnitedWins} games.`);
