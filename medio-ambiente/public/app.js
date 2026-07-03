// ============================================
// VERSIÓN 3: COMENTARIOS + IMÁGENES + LIKES
// ============================================

// Datos de problemas ambientales
const problemas = [
    {
        id: 1,
        titulo: "Contaminación por Petróleo",
        descripcion: "Los derrames de petróleo en el mar destruyen ecosistemas y afectan la vida marina.",
        icono: "🛢️",
        estado: "crítico"
    },
    {
        id: 2,
        titulo: "Contaminación por Basura",
        descripcion: "Millones de toneladas de plástico y residuos llegan al mar, dañando la fauna.",
        icono: "🗑️",
        estado: "grave"
    },
    {
        id: 3,
        titulo: "Contaminación por Gases",
        descripcion: "La emisión de gases de efecto invernadero provoca el calentamiento global.",
        icono: "🏭",
        estado: "alerta"
    }
];

// Almacenamiento de publicaciones
let publicaciones = [];
let contadorId = 1;

// ============================================
// RENDERIZAR PROBLEMAS
// ============================================
function renderizarProblemas() {
    const container = document.getElementById('problemas-container');
    container.innerHTML = '';

    problemas.forEach(problema => {
        const tarjeta = document.createElement('div');
        tarjeta.className = `tarjeta-problema ${problema.estado}`;
        tarjeta.innerHTML = `
            <div class="icono">${problema.icono}</div>
            <h3>${problema.titulo}</h3>
            <p>${problema.descripcion}</p>
            <button class="btn-detalle" data-id="${problema.id}">Ver más</button>
            <div class="detalle-extra" id="detalle-${problema.id}" style="display: none;">
                <p>🌱 <strong>¿Qué puedes hacer?</strong> Infórmate y apoya iniciativas para reducir este problema.</p>
            </div>
        `;
        container.appendChild(tarjeta);
    });

    document.querySelectorAll('.btn-detalle').forEach(boton => {
        boton.addEventListener('click', function() {
            const id = this.dataset.id;
            const detalle = document.getElementById(`detalle-${id}`);
            detalle.style.display = detalle.style.display === 'none' ? 'block' : 'none';
            this.textContent = detalle.style.display === 'block' ? 'Ocultar' : 'Ver más';
        });
    });
}

// ============================================
// FUNCIONES DEL FORO (V3 - CON LIKES)
// ============================================

function cargarPublicaciones() {
    const guardado = localStorage.getItem('foroV3'); // Cambiar clave
    if (guardado) {
        publicaciones = JSON.parse(guardado);
        if (publicaciones.length > 0) {
            contadorId = Math.max(...publicaciones.map(p => p.id)) + 1;
        }
    } else {
        publicaciones = [
            {
                id: contadorId++,
                autor: 'Luzma 🌿',
                contenido: '¡Hoy limpié la playa con mi comunidad! Recogimos 50 kg de plástico.',
                imagen: null,
                likes: 5, // === NUEVO ===
                fecha: new Date(Date.now() - 3600000 * 2).toISOString()
            },
            {
                id: contadorId++,
                autor: 'Lorena 💚',
                contenido: 'Mi huerto urbano está creciendo. ¡Miren las fotos!',
                imagen: null,
                likes: 3, // === NUEVO ===
                fecha: new Date(Date.now() - 3600000 * 5).toISOString()
            }
        ];
        guardarPublicaciones();
    }
    renderizarPublicaciones();
    actualizarEstadisticas();
}

function guardarPublicaciones() {
    localStorage.setItem('foroV3', JSON.stringify(publicaciones)); // Cambiar clave
    actualizarEstadisticas();
}

function renderizarPublicaciones() {
    const container = document.getElementById('publicaciones-container');
    container.innerHTML = '';

    const ordenadas = [...publicaciones].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    if (ordenadas.length === 0) {
        container.innerHTML = '<p class="sin-publicaciones">🌟 Sé el primero en compartir algo.</p>';
        return;
    }

    ordenadas.forEach(pub => {
        const fecha = new Date(pub.fecha);
        const fechaStr = fecha.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
        const horaStr = fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

        let imagenHTML = '';
        if (pub.imagen) {
            imagenHTML = `<img src="${pub.imagen}" alt="Imagen de la publicación" class="publicacion-imagen">`;
        }

        const div = document.createElement('div');
        div.className = 'publicacion';
        div.innerHTML = `
            <div class="publicacion-header">
                <strong class="publicacion-autor">👤 ${pub.autor}</strong>
                <span class="publicacion-fecha">📅 ${fechaStr} - ${horaStr}</span>
            </div>
            <div class="publicacion-contenido">${pub.contenido}</div>
            ${imagenHTML}
            <div class="publicacion-acciones">
                <!-- === NUEVO: Botón de Like === -->
                <button class="btn-like" data-id="${pub.id}">
                    ❤️ <span class="likes-count">${pub.likes}</span>
                </button>
                <button class="btn-eliminar" data-id="${pub.id}">🗑️ Eliminar</button>
            </div>
        `;
        container.appendChild(div);
    });

    // === NUEVO: Eventos de Like ===
    document.querySelectorAll('.btn-like').forEach(boton => {
        boton.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            darLike(id);
        });
    });

    document.querySelectorAll('.btn-eliminar').forEach(boton => {
        boton.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            if (confirm('¿Eliminar esta publicación?')) {
                publicaciones = publicaciones.filter(p => p.id !== id);
                guardarPublicaciones();
                renderizarPublicaciones();
                actualizarEstadisticas();
            }
        });
    });
}

// === NUEVO: Función para dar Like ===
function darLike(id) {
    const publicacion = publicaciones.find(p => p.id === id);
    if (publicacion) {
        publicacion.likes += 1;
        guardarPublicaciones();
        renderizarPublicaciones();
        actualizarEstadisticas();
    }
}

// === NUEVO: Actualizar estadísticas con likes ===
function actualizarEstadisticas() {
    const totalLikes = publicaciones.reduce((sum, p) => sum + (p.likes || 0), 0);
    document.getElementById('total-comentarios').textContent = `💬 ${publicaciones.length}`;
    document.getElementById('total-likes').textContent = `❤️ ${totalLikes}`;
}

// ============================================
// CREAR PUBLICACIÓN CON IMAGEN
// ============================================
function crearPublicacion(autor, contenido, imagenBase64 = null) {
    const nueva = {
        id: contadorId++,
        autor: autor.trim() || 'Anónimo 🌱',
        contenido: contenido.trim(),
        imagen: imagenBase64,
        likes: 0, // Inicializar likes en 0
        fecha: new Date().toISOString()
    };
    publicaciones.push(nueva);
    guardarPublicaciones();
    renderizarPublicaciones();
    actualizarEstadisticas();
}

// ============================================
// CONFIGURAR FORMULARIO (CON IMAGEN)
// ============================================
function configurarFormulario() {
    const form = document.getElementById('form-publicacion');
    const inputImagen = document.getElementById('imagen-publicacion');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const autor = document.getElementById('autor-publicacion').value;
        const contenido = document.getElementById('contenido-publicacion').value;
        const archivo = inputImagen.files[0];

        if (!autor.trim() || !contenido.trim()) {
            alert('Completa tu nombre y el contenido.');
            return;
        }

        if (archivo) {
            const lector = new FileReader();
            lector.onload = function(e) {
                const imagenBase64 = e.target.result;
                crearPublicacion(autor, contenido, imagenBase64);
                form.reset();
                inputImagen.value = '';
            };
            lector.readAsDataURL(archivo);
        } else {
            crearPublicacion(autor, contenido, null);
            form.reset();
        }
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderizarProblemas();
    cargarPublicaciones();
    configurarFormulario();
    console.log('🌿 Foro V3 cargado.');
});