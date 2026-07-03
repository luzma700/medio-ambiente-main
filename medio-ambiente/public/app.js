// ============================================
// VERSIÓN 1: SOLO COMENTARIOS
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
// FUNCIONES DEL FORO (V1 - SOLO COMENTARIOS)
// ============================================

function cargarPublicaciones() {
    const guardado = localStorage.getItem('foroV1');
    if (guardado) {
        publicaciones = JSON.parse(guardado);
        if (publicaciones.length > 0) {
            contadorId = Math.max(...publicaciones.map(p => p.id)) + 1;
        }
    } else {
        // Datos de ejemplo
        publicaciones = [
            {
                id: contadorId++,
                autor: 'Luzma 🌿',
                contenido: '¡Hoy limpié la playa con mi comunidad! Recogimos 50 kg de plástico.',
                fecha: new Date(Date.now() - 3600000 * 2).toISOString()
            },
            {
                id: contadorId++,
                autor: 'Lorena 💚',
                contenido: 'Estoy creando un huerto urbano en mi casa. ¡Las plantas ayudan al planeta!',
                fecha: new Date(Date.now() - 3600000 * 5).toISOString()
            }
        ];
        guardarPublicaciones();
    }
    renderizarPublicaciones();
    actualizarEstadisticas();
}

function guardarPublicaciones() {
    localStorage.setItem('foroV1', JSON.stringify(publicaciones));
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

        const div = document.createElement('div');
        div.className = 'publicacion';
        div.innerHTML = `
            <div class="publicacion-header">
                <strong class="publicacion-autor">👤 ${pub.autor}</strong>
                <span class="publicacion-fecha">📅 ${fechaStr} - ${horaStr}</span>
            </div>
            <div class="publicacion-contenido">${pub.contenido}</div>
            <div class="publicacion-acciones">
                <button class="btn-eliminar" data-id="${pub.id}">🗑️ Eliminar</button>
            </div>
        `;
        container.appendChild(div);
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

function crearPublicacion(autor, contenido) {
    const nueva = {
        id: contadorId++,
        autor: autor.trim() || 'Anónimo 🌱',
        contenido: contenido.trim(),
        fecha: new Date().toISOString()
    };
    publicaciones.push(nueva);
    guardarPublicaciones();
    renderizarPublicaciones();
    actualizarEstadisticas();
}

function actualizarEstadisticas() {
    document.getElementById('total-comentarios').textContent = `💬 ${publicaciones.length}`;
}

// ============================================
// CONFIGURAR FORMULARIO
// ============================================
function configurarFormulario() {
    const form = document.getElementById('form-publicacion');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const autor = document.getElementById('autor-publicacion').value;
        const contenido = document.getElementById('contenido-publicacion').value;

        if (!autor.trim() || !contenido.trim()) {
            alert('Completa tu nombre y el contenido.');
            return;
        }

        crearPublicacion(autor, contenido);
        form.reset();
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderizarProblemas();
    cargarPublicaciones();
    configurarFormulario();
    console.log('🌿 Foro V1 cargado.');
});