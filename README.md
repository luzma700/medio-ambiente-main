 Foro Ambiental - Proyecto UMM

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/luzma700/medio-ambiente-main/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/luzma700/medio-ambiente-main)](https://github.com/luzma700/medio-ambiente-main/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/luzma700/medio-ambiente-main)](https://github.com/luzma700/medio-ambiente-main/network)
[![GitHub issues](https://img.shields.io/github/issues/luzma700/medio-ambiente-main)](https://github.com/luzma700/medio-ambiente-main/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/luzma700/medio-ambiente-main)](https://github.com/luzma700/medio-ambiente-main/commits/main)

## 📋 Descripción del Proyecto

**Foro Ambiental** es una aplicación web colaborativa diseñada para concientizar sobre problemas ecológicos y fomentar la participación ciudadana. El proyecto transforma una página estática en una plataforma dinámica donde los usuarios pueden:

- 💬 **Publicar comentarios** y reflexiones sobre temas ambientales
- 📸 **Compartir imágenes** para evidenciar acciones concretas
- ❤️ **Interactuar** mediante un sistema de "Me gusta" (likes)

La aplicación está desarrollada con **HTML5, CSS3 y JavaScript puro**, utilizando `localStorage` para la persistencia de datos sin necesidad de un servidor backend.

---

## 🎯 Objetivos del Proyecto

1. **Ampliar la funcionalidad técnica** integrando componentes JavaScript que permitan la interacción bidireccional con el usuario.
2. **Mejorar la experiencia de usuario (UI/UX)** mediante un diseño moderno, responsivo y coherente con la temática ambiental.
3. **Fomentar la colaboración y la comunidad**, convirtiendo una página informativa en un espacio vivo de participación.

---

## 📸 Versiones del Proyecto

El proyecto se ha desarrollado en **3 versiones incrementales**, cada una con funcionalidades específicas que evidencian la evolución del código.

### 🔹 Versión 1: Foro Básico con Comentarios

**Commit:** `feat: agregar foro básico con comentarios`  
**Hash:** `88bb0aa`

**Funcionalidades:**
- ✅ Formulario para publicar comentarios (nombre + contenido)
- ✅ Visualización de publicaciones ordenadas por fecha
- ✅ Eliminación de publicaciones propias
- ✅ Almacenamiento en `localStorage`

**Captura de pantalla:**
![Versión 1 - Comentarios](https://via.placeholder.com/600x300/2e7d32/ffffff?text=V1+-+Foro+con+Comentarios)

---

### 🔹 Versión 2: Subida de Imágenes

**Commit:** `feat: agregar subida de imágenes en comentarios`  
**Hash:** `a7020a1`

**Funcionalidades nuevas:**
- ✅ Campo para subir imágenes en el formulario
- ✅ Conversión de imágenes a Base64 con `FileReader API`
- ✅ Visualización de imágenes dentro de las publicaciones
- ✅ Persistencia de imágenes en `localStorage`

**Captura de pantalla:**
![Versión 2 - Imágenes](https://via.placeholder.com/600x300/f57c00/ffffff?text=V2+-+Subida+de+Imágenes)

---

### 🔹 Versión 3: Sistema de "Me Gusta"

**Commit:** `feat: agregar sistema de likes en publicaciones`  
**Hash:** `1986c31` (último commit)

**Funcionalidades nuevas:**
- ✅ Botón "Me gusta" (❤️) en cada publicación
- ✅ Contador de likes en tiempo real
- ✅ Estadísticas globales en el encabezado
- ✅ Almacenamiento de likes en `localStorage`

**Captura de pantalla:**
![Versión 3 - Likes](https://via.placeholder.com/600x300/1b5e20/ffffff?text=V3+-+Sistema+de+Likes)

---
 Tecnologías Utilizadas

| **Tecnología** | **Uso** |
|---|---|
| **HTML5** | Estructura y contenido de la página |
| **CSS3** | Estilos visuales y diseño responsivo |
| **JavaScript (ES6+)** | Lógica de la aplicación y manipulación del DOM |
| **FileReader API** | Conversión de imágenes a Base64 |
| **localStorage** | Persistencia de datos en el navegador |
| **Git & GitHub** | Control de versiones y colaboración |

---

## 📦 Instalación y Uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/luzma700/medio-ambiente-main.git
cd medio-ambiente-main/medio-ambiente
