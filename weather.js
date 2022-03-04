import {getArgs} from './helpers/args.js'
import {printHelp, printSuccess, printError} from "./services/log.service.js";
import {saveKeyValue} from "./services/storage.service.js";

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);
        printSuccess('токен сохранен');
    } catch (e) {
        printError(e.message);
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {//выводит help
        printHelp()
    }
    if (args.s) {//сохранить город

    }
    if (args.t) {//сохранить токен
        return saveToken(args.t)
    }
    //вывести погоду
};

initCLI();