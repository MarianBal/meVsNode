module.exports= function (){
    const fs = require('fs');
    const path = require('path');

    const file = path.join(__dirname, 'banco.txt');

    fs.readFile(file, function(err, data){

        const monto = process.argv[3];

        if(monto ===undefined){

            console.log('No aclaraste el monto')

        }else {

            fs.appendFile(file, ` ${monto}`, function(err){
                if(err){
                    console.log('no podés depositar');
                }else {
                    console.log('Depositaste '+ monto)
                }
            });
            
        }
    })
}
