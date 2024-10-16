//Pagina web escogida, Fybeca
//Jose Lincango

//Objetos 
const producto1 = {
    nombre: "Paracetamol 500mg",
    precio: 2.50,
    categoria: "Medicamento",
    disponible: true
  };
  
  const producto2 = {
    nombre: "Gel Antibacterial 250ml",
    precio: 5.00,
    categoria: "Higiene",
    disponible: true
  };
  
  const producto3 = {
    nombre: "Ibuprofeno 400mg",
    precio: 3.00,
    categoria: "Medicamento",
    disponible: false
  };
  
  const producto4 = {
    nombre: "Mascarilla KN95",
    precio: 1.20,
    categoria: "Protección",
    disponible: true
  };
  
  const productos = [producto1, producto2, producto3, producto4];
  console.log(productos)
  
  const nombresProductos = productos.map(producto => producto.nombre);
  console.log(nombresProductos)

  const productosDisponibles = productos.filter(producto => producto.disponible);
  console.log(productosDisponibles)

  const preciosProductos = productos.map(producto => producto.precio);
  console.log(preciosProductos)



  //Arreglos

  const listaProductos = [
    {
      nombre: "Aspirina 100mg",
      precio: 1.50,
      categoria: "Medicamento",
      disponible: true
    },
    {
      nombre: "Jabón Líquido 500ml",
      precio: 4.00,
      categoria: "Higiene",
      disponible: true
    },
    {
      nombre: "Vaselina 100g",
      precio: 2.00,
      categoria: "Cuidado Personal",
      disponible: false
    },
    {
      nombre: "Termómetro Digital",
      precio: 10.00,
      categoria: "Electrodoméstico",
      disponible: true
    }
  ];
  
  const nombresDeProductos = listaProductos.map(producto => producto.nombre);
  
  const preciosDisponibles = listaProductos.map(producto => {
    return producto.disponible ? producto.precio : 0;
  });
  
  const productosAñadidos = [];
  
  productosAñadidos.push({
    nombre: "Crema Hidratante 200ml",
    precio: 6.50,
    categoria: "Cuidado Personal",
    disponible: true
  });
  
  const nuevoProductoAñadido = {
    nombre: "Protector Solar 50 SPF",
    precio: 12.00,
    categoria: "Cuidado Personal",
    disponible: true
  };
  
  if (nuevoProductoAñadido.precio > 5) {
    productosAñadidos.push(nuevoProductoAñadido);
  }
  
  console.log("Nombres de productos:", nombresDeProductos);
  console.log("Precios disponibles:", preciosDisponibles);
  console.log("Productos añadidos:", productosAñadidos);