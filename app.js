let equipos = [];

function agregarEquipo() {
    const equipo = document.getElementById("equipo").value;
    if (equipo && !equipos.some(e => e.nombre === equipo)) {
        equipos.push({ nombre: equipo, puntos: Math.floor(Math.random() * 100) });
        actualizarLista();
    }
    document.getElementById("equipo").value = "";
}

function quitarEquipo() {
    const equipo = document.getElementById("equipo").value;
    equipos = equipos.filter(e => e.nombre !== equipo);
    actualizarLista();
    document.getElementById("equipo").value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaEquipos");
    lista.innerHTML = '';
    equipos.forEach(equipo => {
        const li = document.createElement("li");
        li.textContent = equipo.nombre;
        lista.appendChild(li);
    });
}

function mostrarTabla() {
    const tabla = document.getElementById("tablaPosiciones").querySelector("tbody");
    tabla.innerHTML = '';

    const equiposOrdenados = [...equipos].sort((a, b) => b.puntos - a.puntos);

    equiposOrdenados.forEach((equipo, index) => {
        const row = tabla.insertRow();
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = equipo.nombre;
        row.insertCell(2).textContent = equipo.puntos;
    });
}

function generarVersus() {
    const listaVersus = document.getElementById("listaVersus");
    listaVersus.innerHTML = ''; // Limpiar la lista anterior

    // Genera enfrentamientos aleatorios si hay al menos dos equipos
    if (equipos.length < 2) {
        alert("Debe haber al menos dos equipos para generar enfrentamientos.");
        return;
    }

    // Crear enfrentamientos aleatorios
    const enfrentamientos = [];
    const equiposCopy = [...equipos];
    while (equiposCopy.length > 1) {
        const equipo1 = equiposCopy.splice(Math.floor(Math.random() * equiposCopy.length), 1)[0];
        const equipo2 = equiposCopy.splice(Math.floor(Math.random() * equiposCopy.length), 1)[0];
        enfrentamientos.push(`${equipo1.nombre} vs ${equipo2.nombre}`);
    }

    // Mostrar enfrentamientos en la lista de versus
    enfrentamientos.forEach(enfrentamiento => {
        const li = document.createElement("li");
        li.textContent = enfrentamiento;
        listaVersus.appendChild(li);
    });
    
}
function login() {
    // Lógica de autenticación
    alert("Inicio de sesión exitoso");
    window.location.href = "pagina.html";
}

function register() {
    // Lógica de registro
    alert("Registro exitoso");
    showLogin();
}

function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function cerrarSesion() {
    alert("Sesión cerrada");
    window.location.href = "login_register.html";
}


