module.exports= function (){
    const fs = require('fs');
    const path = require('path');

    const file = path.join(__dirname, 'banco.txt');

    if(monto ===undefined){

        console.log('No aclaraste el monto')

    }else {

        fs.readFile(file, function(err, data){

            const monto = process.argv[3];

            fs.appendFile(file, ` -${monto}`, function(err){
                if(err){
                    console.log('no podés extraer');
                }else {
                    console.log('Extrajiste '+ monto)
                }
            });
        })
    }
}
