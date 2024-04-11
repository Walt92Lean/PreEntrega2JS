let catalogo = parseInt(prompt('Hola como estas! queres ver nuestro Catálogo de Productos?\n1-Si\n2-No, me equivoque de página'));

let total = 0

if (catalogo ==1){
    let opcion =parseInt(prompt('Elige una de las opciones de los distintos rangos de precio que tenemos\n1-Menor a u$d 10\n2-Menor a u$d 20\n3-Mayor a u$d 20\n4-Ver todos'))

    function filtrarporPrecio(precio){
        let filtrados=[]
        if(precio ==1){
            filtrados = productos.filter(producto => producto.precio <= 10)
        }
        else if(precio ==2){
            filtrados = productos.filter(producto => producto.precio <= 20)
        }
        else if(precio ==3){
            filtrados = productos.filter(producto => producto.precio >20)
        }
        else if(precio ==4){
            console.table(productos)
        }
        else{
            alert('Opcion incorrecta');
        }
        console.table(filtrados)
        // QUISE USAR ESTE COMANDO PARA QUE LA LISTA ME SALGA POR ALERT, PERO COMO NO PUDE, UTILICE console.table, alert(`Estos son los productos: \nID:${productos.id}\nNOMBRE:${productos.nombre}\nTIPO:${productos.tipo}\nMEDIDAS:${productos.medidas}\nPRECIO: ${productos.precio}`);
    }

    filtrarporPrecio(opcion);

    let compra =parseInt(prompt('Deseas realizar la compra de alguno de los productos?\n Ingresa el Id del Producto a comprar:\n1\n2\n3\n4\n5\n6\n0-Terminar la Compra'))
        while (compra !=0){
            switch(compra){
                case 1:
                    total += productos[0].precio;
                    alert('Elegiste '+productos[0].nombre);
                    alert('Valor de la Compra $' + total)
                    break;
                case 2:
                    total += productos[0].precio;
                    alert('Elegiste '+productos[1].nombre);
                    alert('Valor de la Compra $' + total)
                    break;
                case 3:
                    total += productos[0].precio;
                    alert('Elegiste '+productos[2].nombre);
                    alert('Valor de la Compra $' + total)
                    break;
                case 4:
                    total += productos[0].precio;
                    alert('Elegiste '+productos[3].nombre);
                    alert('Valor de la Compra $' + total)
                    break;
                case 5:
                    total += productos[0].precio;
                    alert('Elegiste '+productos[4].nombre);
                    alert('Valor de la Compra $' + total)
                    break;
                case 6:
                    total += productos[0].precio;
                    alert('Elegiste '+productos[5].nombre);
                    alert('Valor de la Compra $' + total)
                    break;
                default:
                    alert('El Código Ingresado es Incorrecto');
                    break;   
            }
        compra =parseInt(prompt('Deseas realizar la compra de alguno de los productos?\n Ingresa el Id del Producto a comprar:\n1\n2\n3\n4\n5\n6\n0-Terminar la Compra'))
        }
        if (total !=0){
            alert('El total de su compra es: $' + total + '\nMuchas gracias!')
            

      
            
        }}





else if (catalogo ==2){
alert('Gracias por tu Visita!')
}

else {
    alert('Codigo Incorrecto')
}
