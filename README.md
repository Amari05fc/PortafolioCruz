# Portafolio Personal

Este proyecto es un portafolio personal desarrollado con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**.
Su objetivo es presentar mi perfil, experiencia y proyectos de forma moderna, limpia y visualmente atractiva.

## ✨ Características

- Diseño moderno y responsive
- Sección de presentación principal
- Sección sobre mí
- Sección de proyectos
- Navegación sencilla y fluida
- Estilos con Tailwind CSS

## 🛠️ Tecnologías utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

## ✅ Requisitos

Antes de instalar el proyecto, asegúrate de tener:

- Node.js 20 o superior
- npm

## 📦 Instalación

Clona el repositorio y ejecuta:

```bash
npm install
```

Luego, inicia el servidor de desarrollo:

```bash
npm run dev
```

El proyecto quedará disponible en `http://localhost:3000`.

## 🏗️ Construir para producción

```bash
npm run build
```

Y para levantar el build de producción:

```bash
npm run start
```

## 📁 Estructura del proyecto

| Carpeta | Responsabilidad |
|---|---|
| `app/` | Páginas principales del sitio |
| `components/` | Componentes reutilizables |
| `public/` | Archivos estáticos (imágenes, íconos, etc.) |
| `lib/` | Utilidades y helpers |

### Conceptos clave usados

- **Next.js (App Router)**: maneja el enrutamiento del sitio basado en la estructura de carpetas dentro de `app/`, junto con renderizado del lado del servidor y optimizaciones automáticas.
- **TypeScript**: aporta tipado estático sobre React, ayudando a detectar errores antes de tiempo de ejecución y mejorando el autocompletado.
- **Tailwind CSS**: framework de utilidades CSS que permite construir la interfaz directamente en el markup, sin escribir hojas de estilo separadas.
- **shadcn/ui**: colección de componentes reutilizables y accesibles, construidos sobre Tailwind, usados como base de la interfaz.
- **Lucide React**: librería de íconos SVG livianos usados en distintas secciones del sitio.
- **Componentización**: la interfaz se divide en componentes reutilizables dentro de `components/`, favoreciendo un código más ordenado y fácil de mantener.

## 🎨 Personalización

- **Contenido personal**: actualiza los textos de las secciones de presentación y "sobre mí" con tu propia información.
- **Proyectos mostrados**: agrega, edita o elimina proyectos desde la sección correspondiente en `app/` o `components/`.
- **Colores y estilos**: ajusta la paleta de colores y estilos generales modificando la configuración de Tailwind CSS.
- **Íconos**: cambia o agrega íconos utilizando los disponibles en Lucide React.

## 🚀 Posibles próximos pasos

- Agregar modo oscuro / claro.
- Incluir una sección de blog o artículos.
- Conectar un formulario de contacto funcional.
- Agregar animaciones adicionales para mejorar la experiencia de usuario.
