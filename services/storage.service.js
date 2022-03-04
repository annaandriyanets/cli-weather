import {homedir} from 'os';//папка os для работы с информацией с ОС
import {join} from 'path';//библиотека для пути/basename - это имя последней папки
import {promises} from 'fs'
import * as path from "path";

const filePath = join(homedir(),'weather-data.json');

const saveKeyValue = async (key, value) => {
    let data = {};
    if(await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
    if(await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file);
        return data[key]
    }
return undefined;
}

const isExist = async (path) => {
    try {
        await promises.stat(path)
        return true;
    } catch(e) {
        return false
    }
}

export {saveKeyValue, getKeyValue}











// console.log(basename(filePath));//weather-data.json
// console.log(dirname(filePath));//C:\Users\alexs
// console.log(extname(filePath));//.json
// console.log(relative(filePath, dirname(filePath)));//..(на одну директорию назад)
// console.log(isAbsolute(filePath));//true
// console.log(resolve('..'))//C:\Users\alexs\OneDrive\Рабочий стол\курс
// console.log(sep);//папки отделаются при помощи \ (в зависимости от ОС)
