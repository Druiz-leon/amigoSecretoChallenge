// Lista para almacenar los nombres
const nombres = [];

const inputNombre = document.getElementById("amigo");
const listaNombres = document.getElementById("listaNombres");

// Función para adicionar nombre a la lista
function adicionarNombre() {
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Validar si el nombre ya existe (ignorando mayúsculas/minúsculas)
  const nombreExiste = nombres.some(n => n.toLowerCase() === nombre.toLowerCase());

  if (nombreExiste) {
    alert("Este nombre ya fue agregado.");
    inputNombre.value = "";
    inputNombre.focus();
    return;
  }

  nombres.push(nombre);
  console.log("Nombre agregado:", nombre);
  console.log("Lista actual de nombres:", nombres);

  inputNombre.value = "";
  inputNombre.focus();
  actualizarLista();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
  listaNombres.innerHTML = "";

  nombres.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaNombres.appendChild(li);
  });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
  if (nombres.length === 0) {
    alert("Primero agrega al menos un nombre.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const nombreSorteado = nombres[indiceAleatorio];

  const resultado1 = document.getElementById("resultado");
  resultado1.innerHTML = `<li>${nombreSorteado}</li>`;  
  //` El amigo secreto es: ${nombreSorteado} `;

  console.log("Ganador sorteado:", nombreSorteado);
}

function borrarLista() {
  if (nombres.length === 0) {
    alert("La lista ya está vacía.");
    return;
  }

  if (confirm("¿Estás seguro de que deseas borrar toda la lista?")) {
    nombres.length = 0; // Vacía el array
    listaNombres.innerHTML = ""; // Limpia la lista en pantalla
    document.getElementById("resultado").innerHTML = ""; // Limpia el resultado del sorteo

    console.log("Lista de nombres borrada.");
  }
}

 // Conectar los botones con sus funciones
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("botonAdicionar").addEventListener("click", adicionarNombre);
  document.getElementById("botonSortear").addEventListener("click", sortearAmigo); 
  document.getElementById("botonBorrar").addEventListener("click", borrarLista);
});
