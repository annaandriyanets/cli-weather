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

export {printError, printSuccess, printHelp}