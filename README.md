# Veterinaria Huella · Sitio Web Comercial (Demo)

> **Demostración de alto impacto para veterinarias locales.**  
> Diseñado para convencer a dueños de negocios veterinarios de dar el salto digital con una propuesta cálida, profesional y orientada a la conversión.

---

## 🌟 Características Destacadas

- **Diseño Editorial & Calidez Visual:** Paleta armónica inspirada en tonos salvia, crema, bosque y terracota, con tipografías Google Fonts (*Fraunces* y *Plus Jakarta Sans*), micro-interacciones suaves y fotografía real.
- **Enfoque Comercial Local:** Diseñado para resolver dudas, derribar miedos de las familias tutoras y dirigir cada contacto hacia **WhatsApp** o llamada telefónica.
- **Centralización 100% Editable:** Todos los datos del negocio (teléfonos, WhatsApp, dirección, mapa, horarios, fotos, servicios, equipo, reseñas y preguntas frecuentes) están centralizados en `src/config/site.js`.
- **Cálculo de Horarios en Tiempo Real:** Indicador dinámico *"Abierto ahora / Cerrado"* calculado según la zona horaria argentina (`America/Argentina/Buenos_Aires`) con el día actual destacado en la tabla de atención.
- **Formulario Inteligente de Turnos:** Validación de campos y armado de mensaje formal en español rioplatense que se abre automáticamente en WhatsApp, aclarando al usuario que la veterinaria confirma el horario final.
- **SEO & Datos Estructurados:** Meta tags descriptivos, Open Graph, semántica HTML5 y esquema JSON-LD `VeterinaryCare` preconfigurado.
- **Medición de Eventos:** Función `trackEvent()` lista para Google Analytics (o debug en consola) que registra clics en WhatsApp, llamados, solicitudes de turno y consultas de cómo llegar.

---

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos previos
- Node.js (v18 o superior)
- npm

### 1. Instalación de dependencias
```bash
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm run dev
```
Abrí la URL que indique la consola (habitualmente `http://localhost:5173`).

### 3. Crear compilación para producción
```bash
npm run build
```
Los archivos optimizados y listos para cualquier hosting estático (Vercel, Netlify, Firebase Hosting, Apache/Nginx) se generarán en la carpeta `dist/`.

---

## ⚙️ Cómo Personalizar para un Cliente Real

Para adaptar este sitio a otra veterinaria, **solo necesitás editar un archivo**:  
👉 [`src/config/site.js`](./src/config/site.js)

Allí podrás cambiar:
- **Datos de contacto:** Teléfono, link y número de WhatsApp, dirección física, iframe de Google Maps y links a redes sociales.
- **Horarios:** Franjas de atención de lunes a viernes, sábados y domingos.
- **Servicios:** Títulos, descripciones, fotos de Unsplash/locales y mensajes predeterminados para WhatsApp.
- **Equipo:** Nombres, fotos, roles y filosofía de atención.
- **Preguntas frecuentes (FAQ):** Consultas y respuestas habituales.
- **Avisos de Demo:** Podés ocultar o personalizar el banner de demostración.

---

## 🎨 Paleta de Color y Tokens

| Color | Hex / Valor | Uso principal |
|---|---|---|
| **Verde Salvia** | `#8FA58A` | Primario suave, badges, acentos de bienestar |
| **Crema** | `#F6F1E7` | Fondo general cálido |
| **Verde Bosque** | `#24372D` | Tipografía principal, títulos y footer |
| **Terracota** | `#C8714F` | Acentos visuales, puntos de marca y llamadas secundarias |
| **Blanco Cálido** | `#FFFDF8` | Tarjetas con contraste suave |

---

## 📱 Navegación y Rutas

- `/`: Inicio con 8 secciones comerciales trabajadas en detalle (Hero, Servicios, Diferencial, Recorrido primera visita, Equipo, Prueba social, FAQs acordeón, Solicitud de turno y mapa).
- `/servicios`: Catálogo integral con beneficios para el tutor.
- `/servicios/consultas`: Página de detalle para consultas clínicas generales y preventivas.
- `/servicios/vacunacion`: Página de detalle con guía comprensible de vacunación y prevención canina y felina.
- `/equipo`: Perfiles de profesionales, valores y filosofía de atención sin estrés.
- `/contacto`: Formulario de solicitud de turno, mapa interactivo, estado de apertura y canales directos.
- `*`: Página 404 amable con retorno al inicio.

---

Diseñado y desarrollado como maqueta comercial de referencia por **Permaweb Studio**.
