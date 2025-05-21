const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const chalk = require('chalk');

let city = argv.city;
let cityLowerCase = city.toLowerCase();

if(cityLowerCase === "new york") {
    console.log(`
${chalk.blue.bold("===== WEATHER REPORT =====")}
        
${chalk.yellow.bold(`Location: ${city}`)}
${chalk.green("Temperature: 72 F")}
${chalk.blue("Conditions: Partly Cloudy")}
${chalk.magenta("Humidity: 65")}
${chalk.red("Wind Speed: 8")}
        
${chalk.blue.bold("==========================")}`);
}

else if(cityLowerCase === "london") {
    console.log(`
${chalk.blue.bold("===== WEATHER REPORT =====")}
        
${chalk.yellow.bold(`Location: ${city}`)}
${chalk.green("Temperature: 60 F")}
${chalk.blue("Conditions: Rainy")}
${chalk.magenta("Humidity: 80")}
${chalk.red("Wind Speed: 12")}
        
${chalk.blue.bold("==========================")}`);
}

else if(cityLowerCase === "paris") {
    console.log(`
${chalk.blue.bold("===== WEATHER REPORT =====")}
        
${chalk.yellow.bold(`Location: ${city}`)}
${chalk.green("Temperature: 0 F")}
${chalk.blue("Conditions: Unknown")}
${chalk.magenta("Humidity: 0")}
${chalk.red("Wind Speed: 0")}
        
${chalk.blue.bold("==========================")}`);
}

else {
    console.log("City not supported");
}

// The package.json file indicates which modules the program needs in order to work.

// The node_modules folder should not be included in version control, because it probably contains larger files that can easily be obtained elsewhere.

// npm install reinstalls dependencies found in the package.json file, and ensures that others who utilize this project can easily obtain modules that the program needs in order to work.