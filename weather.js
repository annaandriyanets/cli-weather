import {getArgs} from './helpers/args.js'
import {printHelp, printSuccess, printError} from "./services/log.service.js";
import {getKeyValue, saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getWeather, getIcon} from "./services/api.service.js";
import {printWeather} from "./services/log.service.js";

const saveToken = async (token) => {
    if(!token.length) {
        printError('не передан token')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('токен сохранен');
    } catch (e) {
        printError(e.message);
    }
}

const saveCity = async (city) => {
    if(!city.length) {
        printError('не передан city')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('city сохранен');
    } catch (e) {
        printError(e.message);
    }
}


const getForecast = async () => {
    try{
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
        const weather = await getWeather(city)
        printWeather(weather, getIcon(weather?.weather[0].icon))
    }catch (e){
        if(e?.response?.status===404) {
            printError('неверный город')
        }else if (e?.response?.status===401) {
            printError('неверно указан токен')
        }else {
            printError(e.message)
        }
    }

}

const initCLI = () => {
    const args = getArgs(process.argv)


    if (args.h) {//выводит help
       return printHelp()
    }
    if (args.s) {//сохранить город
        return saveCity(args.s)
    }
    if (args.t) {//сохранить токен
        return saveToken(args.t)
    }
        getForecast()


};

initCLI();





//console.log(process.env) //окружение
//getWeather('gomel'){//вывести погоду