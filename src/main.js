import {Animal} from './import-export/import-export';
import express from 'express';


var tigerObj = new Animal();
console.log(tigerObj.getName());

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello World ${tigerObj.getName()}`)
});
app.listen(8000, () => {
    console.log(`Hello World ${tigerObj.getName()} from 8000 port`)
});