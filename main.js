const fs = require('fs');
const { json } = require('stream/consumers');


//let productos = [];
class Contenedor{
    constructor(){
    
        this.productos = [];
        this.archivo = `productos.txt`

        const data = {
            
            productos: this.productos,
            archivo:this.archivo
        }
        fs.writeFileSync(this.archivo, JSON.stringify(data, null, '\t'))
        
    }

    // funcion que lee el archivo
    readFile(){
        const data = fs.readFileSync(this.archivo, 'utf-8' )
        return JSON.parse(data);
    }

    //función que escribe en el archivo
    writeFile(data){
       
        fs.writeFileSync(this.archivo, JSON.stringify(data, null, '\t'))

    }

    getFullName(){
        const data = this.readFile();
        return `${data.nombre} ${data.apellido}`
    }




     //Método que agrega y guarda 
     save( nuevoProducto){
        const data = this.readFile();
         const producto = {
             id: nuevoProducto.id,
             nombre: nuevoProducto.nombre,
             precio: nuevoProducto.precio,
             imagen:nuevoProducto.imagen
         }
         data.productos.push(producto)
         this.writeFile(data)   
        // return data.id
        //console.log(data.productos.id)
       
    }

 //Método para visualizar el id del producto
    verProducto(){
        const data = this.readFile();
        return data.productos[0].id
    }
 //Método que trae el objeto pasándole el ID
 getById(idSelet){
    const data = this.readFile();
    
    if(data.productos[0].id === idSelet){
        console.log(data)
    }
     else{
         console.log("producto no existe")
     }
  
 }

 //Método que devuelve el arary de productos
 getAll(){
    const data = this.readFile();
    console.log(data.productos)

 }

 //Método que elimina array con el id
 deleteById(eliminaId){

    const data = this.readFile();

    let obj = data.productos[0].id 
    console.log(obj)
    
        if(obj === eliminaId){
           let objetoBorrado = data.productos
           objetoBorrado.splice(0,1)
           console.log(objetoBorrado)
           this.writeFile(data) 
              
            
        }
        else{
            console.log("producto no existe")
        }   
            
 }

 //Método que elimina todo el objeto
 deleteById(eliminaId){

    const data = this.readFile();

    let obj = data.productos[0].id 
    console.log(obj)
    
        if(obj === eliminaId){
           let objetoBorrado = data.productos
           objetoBorrado.splice(0,1)
           console.log(objetoBorrado)
           this.writeFile(data) 
              
            
        }
        else{
            console.log("producto no existe")
        }   
            
 }

 //Método que elimina todo el objeto

 



 deleteById(eliminaId){

    const data = this.readFile();

    let obj = data.productos[0].id 
    console.log(obj)
    
        if(obj === eliminaId){
           let objetoBorrado = data.productos
           objetoBorrado.splice(0,1)
           console.log(objetoBorrado)
           this.writeFile(data) 
              
            
        }
        else{
            console.log("producto no existe")
        }   
            
 }

 //Método que elimina todo el objeto   
 
 deleteAll(){

    const data = this.readFile();
    let obj = data.productos     
    obj.splice(0,1)
    console.log(obj)
    this.writeFile(data)       
        
            
 }
    
}

const misProductos = new Contenedor()

const product1 = {id: 1, nombre:"Algas", precio: 99.90, imagen: "images/Algas.jpg"}


misProductos.save(product1)

console.log(misProductos.verProducto())
misProductos.getById(1)
misProductos.getAll()
misProductos.deleteById(1)
misProductos.deleteAll()
