const total = require('./total.js');
const deposito = require('./deposito.js')
const extraccion = require('./extraccion.js')


const accion = process.argv[2];

switch(accion){
    case 'total': {
        total()
    }break;

    case 'deposito': {
        deposito()

    }break;

    case 'extraccion':{
        extraccion();
    }break;
}

