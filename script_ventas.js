const nombre_producto = document.getElementById("nombre_producto");
const cantidad_producto    = document.getElementById("cantidad_producto");
const precio             = document.getElementById("precio");
const ganancia_esperada  = document.getElementById("ganancia_esperada");
const descuento    = document.getElementById("descuento");
const iva          = document.getElementById("iva");
const resultado    = document.getElementById("resultado");
const calcular     = document.getElementById("calcular").value;

 function venta(){

    let producto = (nombre_producto.value);
    let cantidades = Number(cantidad_producto.value);
    let precio_inicial = Number(precio.value);
    let ganancia = Number(ganancia_esperada.value);
    let descuento_precio = Number(descuento.value);
    let iva1 = Number(iva.value);
    let iva2 = iva1 / 100;

    if (producto == "" || cantidades == "" || precio_inicial == "" || ganancia == "" || iva == ""){
        resultado.textContent = "Rellena Todos los Campos";
    
    }else{

    let impuesto;
    let impuesto1;
    let descuento1;
    let descuento2;
    let descuento3;
    let precio_finalisimo;
    let precio_a_venta;

    let aumento;
    let operacion_ganancia2;
    let operacion_precio_final;
    let venta;
    let cantidad;

    cantidad = cantidades * precio_inicial;

    aumento = (ganancia * cantidad ) / 100;
    operacion_ganancia2 = cantidad  + aumento;

    descuento1 = ( cantidad  * descuento_precio)  / 100;
             
    impuesto = iva2 * operacion_ganancia2;
    //venta = precio_finalisimo - impuesto;
    operacion_precio_final = (operacion_ganancia2 - impuesto - descuento1).toFixed(2);
    resultado.textContent = `El Precio de ${producto} es: ${operacion_precio_final}$`;
    }
    }
