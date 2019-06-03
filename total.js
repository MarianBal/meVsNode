module.exports= function (){
    const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'banco.txt');

fs.readFile(file, function(err, data){

    const extractos = data.toString().split(' ')

    let saldo = 0;

    for(let i =0; i<extractos.length; i++){

        const valor = parseInt(extractos[i]);
        saldo = saldo + valor;
    }
    console.log('tu saldo es ' + saldo);
 })

}