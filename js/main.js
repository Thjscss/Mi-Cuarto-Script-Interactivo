alert("Bienvenido a Cafe de barrio, el mejor cafe de la ciudad");
const nombreUsuario = prompt("Ingrese su nombre:");
let inventarioComida = [
    "medialunas",
    "crossant",
    "magdalenas ",
    "mafaldas",
    "tostado con papas"
];

let inventarioBebida = [
    "cafe de watemala",
    "cafe colombiano",
    "te de limon",
    "te de arandanos",
    "leche",
    "chocolate",
    "cafe peruano",
    "te de frutilla"
];
const eliminado = inventarioBebida.pop();

inventarioBebida.push("leche")
inventarioComida.push("azucar","pan")
inventarioBebida.unshift("sanguches")

console.log("Se ha eliminado el elemento: ", eliminado)

// --- Programa principal ---
function verificarStock(inventarioBebida, cafeBuscado) {
    for (const bebidas of inventarioBebida) {
        if (bebidas.trim().toLowerCase() === cafeBuscado.toLowerCase()) {
            return true;
        }
    }
    return false;
}

console.log(inventarioComida);

// --- Reporte Iterativo: recorre un array con for...of y muestra cada elemento ---
function mostrarInventario(inventario) {
    for (const producto of inventario) {
        console.log("Producto: " + producto);
    }
}

// --- Búsqueda y Validación: includes() + indexOf() ---
function buscarProducto(inventario, nombreBuscado) {
    const buscado = nombreBuscado.trim().toLowerCase();
    const inventarioNormalizado = inventario.map(item => item.trim().toLowerCase());

    if (inventarioNormalizado.includes(buscado)) {
        const posicion = inventarioNormalizado.indexOf(buscado);
        alert(`"${nombreBuscado}" está disponible. Posición en el inventario: ${posicion}`);
        return posicion;
    } else {
        alert(`"${nombreBuscado}" no está disponible en el inventario.`);
        return -1;
    }
}

// --- Actualización por índice: splice() ---
function actualizarProducto(inventario, indice, nuevoValor) {
    if (indice >= 0 && indice < inventario.length) {
        inventario.splice(indice, 1, nuevoValor);
        console.log(`Producto en índice ${indice} actualizado a: "${nuevoValor}"`);
    } else {
        console.log("Índice fuera de rango, no se pudo actualizar.");
    }
    return inventario;
}

// Reporte inicial de inventarios
console.log("--- Reporte de inventario de bebidas ---");
mostrarInventario(inventarioBebida);
console.log("--- Reporte de inventario de comida ---");
mostrarInventario(inventarioComida);

// Búsqueda solicitada al usuario
const productoBuscado = prompt("¿Qué producto de bebidas querés buscar en el inventario?");
buscarProducto(inventarioBebida, productoBuscado);

// Actualización por índice (ejemplo: se reemplaza el producto en índice 0)
actualizarProducto(inventarioBebida, 0, "cafe descafeinado");
console.log("Inventario de bebidas luego de la actualización:", inventarioBebida);

let totalPrecio = 0;
let comidaFinal = "";
let bebidaFinal = "";

let sumarAlTotal = (montoActual, monto) => montoActual + monto;

// Función declarada
function pedidoBebida(opcionesBebida) {
    let bebidaElegida = "";
    let precioBebida = 0;
    switch (opcionesBebida) {
        case "1":
            bebidaElegida = "Café Americano";
            precioBebida += 3000;
            break;
        case "2":
            bebidaElegida = "Café con leche";
            precioBebida += 3500;
            break;
        case "3":
            bebidaElegida = "Capuccino";
            precioBebida += 3500;
            break;
        case "4":
            bebidaElegida = "Té";
            precioBebida += 2500;
            break;
        case "5":
            bebidaElegida = "Chocolate caliente";
            precioBebida += 3500;
            break;
        default:
            alert("Opción de bebida no válida. No se sumará bebida al pedido.");
            break;
    }
    console.log("Bebida procesada -> nombre:", bebidaElegida, "precio:", precioBebida);
    return { nombre: bebidaElegida, precio: precioBebida };
}

// Función expresada
const pedidoComida = function (opcionesComida) {
    let comidaElegida = "";
    let precioComida = 0;
    switch (opcionesComida) {
        case "1":
            comidaElegida = "Crossant";
            precioComida += 4000;
            break;
        case "2":
            comidaElegida = "Medialunas x2";
            precioComida += 3000;
            break;
        case "3":
            comidaElegida = "Magdalenas x4";
            precioComida += 3500;
            break;
        case "4":
            comidaElegida = "Mafaldas x2";
            precioComida += 4500;
            break;
        case "5":
            comidaElegida = "Tostado con papas";
            precioComida += 3500;
            break;
        default:
            alert("Opción de comida no válida.");
    }
    console.log("Comida procesada -> nombre:", comidaElegida, "precio:", precioComida);
    return { nombre: comidaElegida, precio: precioComida };
};

// Función expresada, reciclable: recibe el TIPO de pedido como parámetro
const confirmarPedido = function (tipoPedido) {
    const respuesta = prompt(
        "¿Desea agregar " + tipoPedido + " a su pedido? Ingrese una opción: 1. Sí  2. Salir"
    );
    if (respuesta === "2") {
        alert("Gracias por visitar Cafe de barrio, vuelva pronto!");
    } else if (respuesta !== "1") {
        alert("Opción no válida.");
    }
    return respuesta === "1";
};

let seguirBebida = confirmarPedido("una bebida");
while (seguirBebida) {
    const menuBebida = prompt(
        "Ingrese una opción del 1 al 5 para elegir su pedido:\n" +
        "1. Café Americano ($3000)\n" +
        "2. Café con leche ($3500)\n" +
        "3. Capuccino ($3500)\n" +
        "4. Té ($2500)\n" +
        "5. Chocolate caliente ($3500)\n" +
        "\n(Escriba el número)"
    );

    if (!["1","2","3","4","5"].includes(menuBebida)) {
        alert("Opción de bebida no válida.");
        continue;
    }

    else if (["1", "2", "3"].includes(menuBebida)) {
        const tipoCafe = prompt(
            "Elija el tipo de café:\n" +
            "1. cafe de guatemala\n" +
            "2. cafe colombiano\n" +
            "3. cafe peruano\n" +
            "4. Cancelar pedido\n\n" +
            "(Escriba el número)"
        );
        const cafes = {
            "1": "cafe de watemala",
            "2": "cafe colombiano",
            "3": "cafe peruano"
        };
        if (tipoCafe === "4") {
            seguirBebida = false;
            continue;
        }

        else if (!cafes[tipoCafe] || !verificarStock(inventarioBebida, cafes[tipoCafe])) {
            alert("No contamos con stock. Por favor, elija otra opción del 1 al 4.");
            continue;
        }

        const resultado = pedidoBebida(menuBebida);
        bebidaFinal = cafes[tipoCafe];
        totalPrecio = sumarAlTotal(totalPrecio, resultado.precio);
    } else {
        const resultado = pedidoBebida(menuBebida);
        bebidaFinal = resultado.nombre;
        totalPrecio = sumarAlTotal(totalPrecio, resultado.precio);
    }
    seguirBebida = false;
}

let seguirComida = confirmarPedido("una comida");
while (seguirComida) {
    const menuComida = prompt(
        "Ingrese una opción del 1 al 5 para elegir su pedido:\n" +
        "1. Crossant ($4000)\n" +
        "2. Medialunas x2 ($3000)\n" +
        "3. Magdalenas x4 ($3500)\n" +
        "4. Mafaldas x2 ($4500)\n" +
        "5. Tostado con papas ($3500)\n" +
        "\n(Escriba el número)"
    );
    const resultado = pedidoComida(menuComida);
    if (resultado.nombre) {
        comidaFinal = resultado.nombre;
        totalPrecio = sumarAlTotal(totalPrecio, resultado.precio);
    }
    seguirComida = false;
}

function mostrarTicket(bebidaElegida, comidaElegida, totalPrecio) {
    alert(
        "--- TICKET DE TU PEDIDO ---\n" +
        "Bebida: " + (bebidaElegida || "Ninguna") + "\n" +
        "Comida: " + (comidaElegida || "Ninguna") + "\n" +
        "---------------------------\n" +
        "TOTAL A PAGAR: $" + totalPrecio + "\n" +
        "¡Disfruta tu pedido, " + nombreUsuario + "!"
    );
    console.log("Ticket final:", { bebida: bebidaElegida, comida: comidaElegida, total: totalPrecio });
    return { bebida: bebidaElegida, comida: comidaElegida, total: totalPrecio };
}

mostrarTicket(bebidaFinal, comidaFinal, totalPrecio);