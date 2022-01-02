

const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'base de tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type: 'boolean',
        default:false,
        describe:'muestra la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        type: 'number',
        default:10,
        describe:'hasta donde quieres la tabla'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'La base tien que ser un numero'
        }
        return true;
    })
    .argv;

module.exports={
    argv
};