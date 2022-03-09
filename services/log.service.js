import chalk from 'chalk'//стилизация консольного вывода

const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + ' ' + error);
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen('SUCCESS') + ' ' + message);
}

const printHelp = () => {
    console.log(
        `${chalk.bgCyan('HELP')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
        `
    )
}

const printWeather = (res, icon) => {
    console.log(
        `${chalk.bgYellow('WEATHER')} погода в городе${res.name}
        ${icon} ${res.weather[0].description}
        температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
        влажность: ${res.main.humidity}%
        скорость ветра: ${res.wind.speed}
        `
    )
}

export {printError, printSuccess, printHelp, printWeather}