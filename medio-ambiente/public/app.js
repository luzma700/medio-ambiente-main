// Datos de los problemas ambientales
const problemas = [
    {
        titulo: "Contaminación por petróleo en el mar",
        descripcion: "Los derrames de petróleo causan un daño devastador a los ecosistemas marinos, afectando a aves, peces y mamíferos. La limpieza es compleja y costosa, y los efectos pueden durar décadas.",
        imagen: "https://images.unsplash.com/photo-1612881574301-23a8e5b9e8e9?w=400&auto=format", // Imagen ilustrativa (reemplazar si se desea)
        impacto: "Alto"
    },
    {
        titulo: "Contaminación por basura en el mar",
        descripcion: "Millones de toneladas de plástico y otros residuos llegan a los océanos cada año, formando islas de basura y siendo ingeridos por la vida marina, entrando así en la cadena alimenticia.",
        imagen: "https://images.unsplash.com/photo-1582602697314-bda5c3067f7f?w=400&auto=format", // Imagen ilustrativa (reemplazar si se desea)
        impacto: "Crítico"
    },
    {
        titulo: "Contaminación por gases",
        descripcion: "La emisión de gases de efecto invernadero (CO2, metano) provenientes de la quema de combustibles fósiles es la principal causa del calentamiento global y el cambio climático.",
        imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&auto=format", // Imagen ilustrativa (reemplazar si se desea)
        impacto: "Extremo"
    }
];

// Función para mostrar los problemas en la página
function mostrarProblemas() {
    const container = document.getElementById('problemas-container');
    
    if (!container) {
        console.error("No se encontró el contenedor 'problemas-container' en el HTML.");
        return;
    }

    // Limpiar el contenedor por si tiene contenido previo
    container.innerHTML = '';

    // Recorrer el array de problemas y crear tarjetas
    problemas.forEach(problema => {
        // Crear un div para cada tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-problema';
        
        // Construir el contenido de la tarjeta usando template literals
        tarjeta.innerHTML = `
            <h2>${problema.titulo}</h2>
            <img src="${problema.imagen}" alt="${problema.titulo}" loading="lazy">
            <p>${problema.descripcion}</p>
            <p><strong>Nivel de Impacto:</strong> <span class="impacto ${problema.impacto.toLowerCase()}">${problema.impacto}</span></p>
        `;
        
        // Agregar la tarjeta al contenedor
        container.appendChild(tarjeta);
    });
}

// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', mostrarProblemas);