const fs=require('fs');
const colors=require('colors');

const crearArchivo=async(base,listar,hasta=10)=>{

    try{
        let salida,consola='';
        for(let i=1; i <=hasta ; i++){
            salida +=(`${base} x ${i} = ${base *i}\n`);
            consola +=(`${base} ${'x'.green} ${i} = ${base *i}\n`);
        }

        if(listar==true){
            console.log(consola);
        }else{
            console.log('tabla creada');
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;
    }catch(e){
        throw (e);
    }
}

module.exports={
    crearArchivo
}
