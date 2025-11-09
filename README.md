# 🌌 Rick & Morty Characters App

> **Proyecto Académico - 4to Ciclo**  
> Diseño y Desarrollo de Software  | Curso: Desarrollo de Aplicaciones Empresariales
> Single Page Application desarrollada con React 19 + Vite

<div align="center">

**Explora el multiverso de Rick & Morty a través de una aplicación web moderna y responsiva**

🌐 **Demo en vivo:**  
👉 [https://rick-and-mortyyyy.netlify.app/](https://rick-and-mortyyyy.netlify.app/)

📖 **API utilizada:**  
[Rick and Morty API - Documentación oficial](https://rickandmortyapi.com/documentation)

</div>

---

## 📋 Tabla de Contenidos

- [Descripción General](#-descripción-general)
- [Características Principales](#-características-principales)
- [Stack Tecnológico](#-stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Rutas y Páginas](#-rutas-y-páginas)
- [Equipo de Desarrollo](#-equipo-de-desarrollo)
- [Roadmap Futuro](#-roadmap-futuro)

---

## 🎯 Descripción General

**Rick & Morty Characters App** es una **Single Page Application (SPA)** diseñada para explorar, buscar y filtrar los personajes de la icónica serie animada **Rick & Morty**. 

La aplicación consume la [Rick and Morty API](https://rickandmortyapi.com) para obtener información actualizada de más de 800 personajes, implementando patrones modernos de desarrollo web y una experiencia de usuario fluida y responsiva.

### ✨ Propósito Académico

Este proyecto fue desarrollado como parte del curso Desarrollo de Aplicaciones Empresariales, con el objetivo de demostrar:

- Arquitectura de componentes en React
- Consumo de APIs REST
- Gestión de estado y efectos
- Enrutamiento en aplicaciones SPA
- Validación de formularios
- Diseño responsivo y accesible

---

## 🌟 Características Principales

- 🏠 **Homepage Atractiva**: Hero section con diseño impactante y personajes destacados
- 🔍 **Búsqueda Inteligente**: Filtrado en tiempo real por nombre con debounce
- 🎛️ **Filtros Múltiples**: Por estado (vivo/muerto/desconocido) y especies
- 📄 **Paginación Avanzada**: Control completo con selector de elementos por página (10, 20, 50)
- 📱 **100% Responsivo**: Optimizado para móviles, tablets y escritorio
- ✅ **Validación Robusta**: Formulario de contacto con validación en tiempo real
- ⚡ **Performance**: Lazy loading de imágenes y optimización de renders
- ♿ **Accesible**: Implementación de estándares ARIA y navegación por teclado

---

## 🛠 Stack Tecnológico

### Core

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | ^19.1.1 | Biblioteca principal para construir la UI |
| **React DOM** | ^19.1.1 | Renderizado de componentes en el DOM |
| **Vite** | ^6.3.1 | Build tool y dev server ultrarrápido |

### Dependencias

| Librería | Versión | Uso |
|----------|---------|-----|
| **React Router** | ^7.9.5 | Sistema de enrutamiento SPA |
| **Axios** | ^1.13.1 | Cliente HTTP para peticiones a la API |
| **Bootstrap** | ^5.3.8 | Framework CSS para diseño responsivo |

### API Externa

- **Rick and Morty API** - `https://rickandmortyapi.com/api`
  - RESTful API gratuita y pública
  - 800+ personajes
  - Datos actualizados de la serie

---

## 📂 Estructura del Proyecto

```
rick-morty-characters-app/
│
├── public/                          # Archivos estáticos
│   └── vite.svg
│
├── src/
│   ├── components/                  # Componentes reutilizables
│   │   ├── common/                  # Componentes compartidos
│   │   │   ├── Navbar.jsx           # Barra de navegación principal
│   │   │   ├── Footer.jsx           # Pie de página
│   │   │   ├── LoadingSpinner.jsx   # Indicador de carga
│   │   │   └── ErrorAlert.jsx       # Manejo de errores
│   │   │
│   │   ├── home/                    # Componentes de Home
│   │   │   ├── HeroSection.jsx      # Sección hero principal
│   │   │   └── FeaturedCharacters.jsx # Grid de destacados
│   │   │
│   │   ├── list/                    # Componentes de Listado
│   │   │   ├── FilterBar.jsx        # Barra de filtros y búsqueda
│   │   │   ├── CharacterCard.jsx    # Tarjeta de personaje
│   │   │   └── Pagination.jsx       # Controles de paginación
│   │   │
│   │   └── contact/                 # Componentes de Contacto
│   │       └── ContactForm.jsx      # Formulario con validación
│   │
│   ├── pages/                       # Páginas principales
│   │   ├── HomePage.jsx             # Página de inicio
│   │   ├── ListPage.jsx             # Página de listado
│   │   ├── ContactPage.jsx          # Página de contacto
│   │   └── NotFoundPage.jsx         # Página 404 (opcional)
│   │
│   ├── services/                    # Servicios de API
│   │   ├── api.js                   # Configuración de Axios
│   │   └── characterService.js      # Métodos de personajes
│   │
│   ├── hooks/                       # Custom Hooks
│   │   ├── useCharacters.js         # Hook para listado
│   │   └── useCharacter.js          # Hook para detalle (opcional)
│   │
│   ├── utils/                       # Utilidades (opcional)
│   │   └── validators.js            # Funciones de validación
│   │
│   ├── App.jsx                      # Componente raíz
│   ├── main.jsx                     # Punto de entrada
│   └── index.css                    # Estilos globales
│
├── .gitignore                       # Archivos ignorados por Git
├── index.html                       # HTML base
├── package.json                     # Dependencias y scripts
├── vite.config.js                   # Configuración de Vite
└── README.md                        # Este archivo
```

---

## 🚀 Instalación

### Prerrequisitos

Asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (incluido con Node.js) o **yarn**
- **Git** - [Descargar aquí](https://git-scm.com/)

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/Cris-div/Proyecto-o3-React.git
cd Proyecto-o3-React

# 2. Instalar todas las dependencias
npm install

# 3. Verificar instalación de dependencias principales
npm list react react-dom react-router axios bootstrap

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir en el navegador
# La aplicación estará disponible en: http://localhost:5173
```

### Scripts Disponibles

```bash
npm run dev        # 🚀 Inicia el servidor de desarrollo con hot-reload
npm run build      # 📦 Construye la aplicación para producción
npm run preview    # 👀 Previsualiza el build de producción
npm run lint       # 🔍 Ejecuta el linter para verificar código
```

### Instalación Manual de Dependencias (si es necesario)

```bash
# Core de React
npm install react@^19.1.1 react-dom@^19.1.1

# Routing
npm install react-router@^7.9.5

# HTTP Client
npm install axios@^1.13.1

# UI Framework
npm install bootstrap@^5.3.8
```

---

## 🗺️ Rutas y Páginas

### Arquitectura de Rutas

```jsx
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/lista" element={<ListPage />} />
    <Route path="/contacto" element={<ContactPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
  <Footer />
</BrowserRouter>
```

### 📍 Detalle de Páginas

| Ruta | Componente | Descripción | Elementos Clave |
|------|------------|-------------|-----------------|
| `/` | `HomePage` | Página de inicio | Hero Section + Personajes Destacados |
| `/lista` | `ListPage` | Catálogo completo | Filtros + Grid + Paginación |
| `/contacto` | `ContactPage` | Formulario de contacto | Validación en tiempo real |
| `*` | `NotFoundPage` | Página 404 | Manejo de rutas no encontradas |

---

### 🏠 Homepage (`/`)

**Objetivo:** Presentar la aplicación y captar la atención del usuario

#### Secciones:

**1. Hero Section**
```
- Imagen de fondo a pantalla completa
- Título principal: "Explora el Multiverso de Rick & Morty"
- Subtítulo descriptivo
- Call-to-Action: "Ver Todos los Personajes" → redirige a /lista
- Overlay con gradiente para legibilidad
```

**2. Featured Characters**
```
- Grid responsivo de 6-8 personajes destacados
- Cada card incluye:
  ✓ Imagen del personaje
  ✓ Nombre
  ✓ Especie
  ✓ Badge de estado (vivo/muerto/desconocido)
- Animación hover con efecto lift
- Botón "Ver Catálogo Completo"
```

**Responsividad:**
- 📱 Mobile: 1 card por fila
- 📱 Tablet: 2 cards por fila
- 💻 Desktop: 3-4 cards por fila

---

### 📜 Listado de Personajes (`/lista`)

**Objetivo:** Explorar el catálogo completo con herramientas de búsqueda y filtrado

#### Componentes:

**1. FilterBar** 🎛️
```javascript
Controles:
- 🔍 Input de búsqueda (con debounce de 300ms)
- 📊 Select de estado: Todos | Vivo | Muerto | Desconocido
- 🧬 Select de especie: Humano, Alien, Robot, etc.
- 🗑️ Botón "Limpiar Filtros"
```

**2. Character Grid** 🎴
```javascript
- Grid responsivo adaptativo
- CharacterCard con:
  • Imagen (lazy loading)
  • Nombre del personaje
  • Especie
  • Estado con color badge
  • Botón "Ver Más" (opcional)
```

**3. Pagination** 📄
```javascript
Controles:
- Botones ⬅️ Anterior / Siguiente ➡️
- Botones numéricos (1, 2, 3, ..., 42)
- Selector de items por página: 10, 20, 50
- Indicador: "Página X de Y"
- Estado disabled para primera/última página
```

**Implementación Técnica:**
```javascript
// La API retorna 20 items por página
// Estrategias según selector:

- 10 items/página → Slicing local de resultados
- 20 items/página → 1 request directo a la API
- 50 items/página → Concatenar múltiples páginas con cache
```

---

### 📬 Contacto (`/contacto`)

**Objetivo:** Formulario de contacto profesional con validación robusta

#### Campos del Formulario:

| Campo | Tipo | Validaciones | Mensajes de Error |
|-------|------|--------------|-------------------|
| **Nombre** | text | • Obligatorio<br>• Min 3 caracteres<br>• Solo letras | "El nombre debe tener al menos 3 caracteres" |
| **Email** | email | • Obligatorio<br>• Formato válido | "Ingresa un email válido" |
| **Asunto** | text | • Obligatorio | "El asunto es requerido" |
| **Mensaje** | textarea | • Obligatorio<br>• Min 10 caracteres | "El mensaje debe tener al menos 10 caracteres" |

#### Características:

✅ **Validación en Tiempo Real**
- Validación onChange para cada campo
- Feedback visual inmediato (bordes verdes/rojos)
- Mensajes de error debajo de cada input

✅ **Estados del Formulario**
```javascript
- 🔄 Loading → Muestra spinner durante envío
- ✅ Success → "Tu mensaje fue enviado exitosamente"
- ❌ Error → "Hubo un error. Intenta nuevamente"
```

✅ **Acciones**
- Botón "Enviar" (disabled si hay errores)
- Botón "Limpiar" para resetear formulario
- Auto-limpieza tras envío exitoso

**Layout:**
- Centrado en la página
- Ancho máximo: 600px
- Padding responsivo
- Box-shadow sutil

---

## 👥 Equipo de Desarrollo

### Distribución de Responsabilidades

<table>
<tr>
<td align="center" width="25%">
<h4>Yair Araujo Gabriel</h4>
<p>🏗️ Arquitectura Base</p>
<ul align="left">
<li>Configuración inicial del proyecto</li>
<li>Sistema de routing (React Router)</li>
<li>Estructura de carpetas</li>
<li>Layout general (App.jsx)</li>
<li>Integración de componentes</li>
</ul>
</td>

<td align="center" width="25%">
<h4>Yamile Ochoa Marin</h4>
<p>🏠 Página de Inicio</p>
<ul align="left">
<li>Hero Section design</li>
<li>Featured Characters grid</li>
<li>Animaciones y transiciones</li>
<li>Responsive home layout</li>
<li>Integración con API</li>
</ul>
</td>

<td align="center" width="25%">
<h4>Christian David Unocc</h4>
<p>📋 Sistema de Listado</p>
<ul align="left">
<li>FilterBar component</li>
<li>Sistema de búsqueda</li>
<li>Paginación completa</li>
<li>Character cards grid</li>
<li>Hooks personalizados</li>
</ul>
</td>

<td align="center" width="25%">
<h4>Josue Zapata Villegas</h4>
<p>📬 Servicios & Deploy</p>
<ul align="left">
<li>Contact page & validación</li>
<li>API services (Axios)</li>
<li>Documentación (README)</li>
<li>Despliegue</li>
<li>Testing y debugging</li>
</ul>
</td>
</tr>
</table>

---

## 🗺️ Roadmap Futuro

### Fase 1: Mejoras Básicas ✅

- [x] Estructura base del proyecto
- [x] Consumo de API
- [x] Páginas principales
- [x] Filtros y búsqueda
- [x] Paginación
- [x] Validación de formularios

### Fase 2: Features Intermedias 🚧

- [ ] **Página de detalle** de personaje individual
- [ ] **Favoritos** con LocalStorage
- [ ] **Modo oscuro** toggle
- [ ] **Compartir personaje** (copy link)
- [ ] **Skeleton loaders** en lugar de spinners
- [ ] **Infinite scroll** como alternativa a paginación

### Fase 3: Features Avanzadas 🔮

- [ ] **Autenticación** (login/register)
- [ ] **Backend propio** para guardar favoritos
- [ ] **Comparador** de personajes
- [ ] **Estadísticas** visuales (charts)
- [ ] **PWA** (Progressive Web App)
- [ ] **Tests unitarios** con Jest/Vitest
- [ ] **Tests E2E** con Cypress/Playwright

### Fase 4: Optimizaciones 🚀

- [ ] **Server-Side Rendering** (Next.js migration)
- [ ] **State management** (Zustand/Redux)
- [ ] **TypeScript** migration
- [ ] **CI/CD pipeline** (GitHub Actions)
- [ ] **SEO optimization**
- [ ] **Analytics** (Google Analytics)

---

## 🌐 Despliegue

El proyecto está actualmente desplegado en **Netlify**:  
🔗 [https://rick-and-mortyyyy.netlify.app/](https://rick-and-mortyyyy.netlify.app/)

### Detalles del Deploy
- **Plataforma:** Netlify  
- **Build Command:** `npm run build`  
- **Public Directory:** `dist`  
- **Branch conectada:** `main` del repositorio en GitHub  
- **Integración continua:** Cada push al repositorio actualiza automáticamente la versión publicada.

---

## 📝 Licencia

Este proyecto es de código abierto para fines educativos.

**Nota sobre los datos:**  
Los datos de personajes son proporcionados por la [Rick and Morty API](https://rickandmortyapi.com) y son propiedad de © Adult Swim / Cartoon Network.

---

## 🤝 Contribuciones

Este proyecto fue desarrollado con fines académicos, pero las contribuciones son bienvenidas:

1. 🍴 Fork el proyecto  
2. 🌿 Crea una rama (`git checkout -b feature/nueva-funcionalidad`)  
3. 💾 Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)  
4. 📤 Push a la rama (`git push origin feature/nueva-funcionalidad`)  
5. 🔃 Abre un Pull Request

---

## 📞 Contacto y Soporte

📧 **Correo:** zjosue775@gmail.com  

### Enlaces del Proyecto
- 📦 **Repositorio:** [https://github.com/Cris-div/Proyecto-o3-React.git](https://github.com/Cris-div/Proyecto-o3-React.git)  
- 🌐 **Deploy:** [https://rick-and-mortyyyy.netlify.app/](https://rick-and-mortyyyy.netlify.app/)

---

<div align="center">

💫 Desarrollado con 💚 por el equipo de **CHIRIBAYAS 03**

</div>
