const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const chalk = require('chalk');

class City {
    constructor(name, temperature, conditions, humidity, wind) {
        this.name = name,
        this.temperature = temperature,
        this.conditions = conditions,
        this.humidity = humidity,
        this.wind = wind
    }

    reportWeather() {
        console.log(chalk.blue.bold("===== WEATHER REPORT =====\n"));
        console.log(chalk.yellow.bold("Location:", userCity));
        console.log(chalk.green("Temperature:", this.temperature, "F"));
        console.log(chalk.blue("Conditions:", this.conditions));
        console.log(chalk.magenta("Humidity:", this.humidity));
        console.log(chalk.red("Wind Speed:", this.wind));
        console.log(chalk.blue.bold("\n=========================="));
    }

}

let cities = [];
cities.push(new City("new york", 72, "Partly Cloudy", 65, 8));
cities.push(new City("london", 60, "Rainy", 80, 12));
cities.push(new City("paris", 0, "Unknown", 0, 0));

let isCitySupported = false;
let isInputAString = true;

let userCity = argv.city;
let userCityLowerCase = "";

try {
    userCityLowerCase = userCity.toLowerCase();
}
catch (e) {
    console.error("City argument is not a string");
    isInputAString = false;
}

for (let city of cities) {
    if (userCityLowerCase === city.name) {
        city.reportWeather();
        isCitySupported = true;
        break;
    }
}

if (!isCitySupported && isInputAString) {
    console.log("City not supported");
}

// The package.json file indicates which modules the program needs in order to work.

// The node_modules folder should not be included in version control, because it probably contains larger files that can easily be obtained elsewhere.

// npm install reinstalls dependencies found in the package.json file, and ensures that others who utilize this project can easily obtain modules that the program needs in order to work.