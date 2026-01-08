S# Portafolio de Ingeniería Civil - Blueprint Edition

Un portafolio profesional bilingüe (ES/EN) construido con Astro, Tailwind CSS y una estética distintiva de plano arquitectónico.

## 🚀 Características

- **Bilingüe**: Soporte completo para Español e Inglés con i18n routing
- **Design System Blueprint**: Paleta de colores técnica (#0047AB, #FF5733), grid patterns, dimension lines
- **Content Collections**: Gestión de proyectos con validación de tipos vía Zod
- **SEO Optimizado**: Meta tags dinámicos, structured data, Open Graph
- **Responsive**: Mobile-first design con navegación adaptativa
- **CI/CD**: Deployment automático a GitHub Pages

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build) v5.16+
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1+
- **Content**: MDX + Content Collections
- **Validation**: Zod schemas
- **Deployment**: GitHub Pages via GitHub Actions

## 📦 Instalación

### Prerequisitos

- Node.js v18.14.1 o superior (recomendado: v20 LTS)
- npm v9 o superior

### Clonar e Instalar

```bash
git clone https://github.com/[tu-usuario]/ing-civil.git
cd ing-civil
npm install
```

## 🔧 Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila el sitio para producción en `./dist` |
| `npm run preview` | Previsualiza el build localmente |
| `npm run astro check` | Valida tipos de TypeScript |

## 📁 Estructura del Proyecto

```
ing-civil/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD workflow
├── public/                          # Assets estáticos
├── src/
│   ├── components/                  # Componentes reutilizables
│   │   ├── FloatingActions.astro
│   │   ├── MetaTags.astro
│   │   └── Navigation.astro
│   ├── content/
│   │   ├── config.ts               # Zod schemas
│   │   └── projects/
│   │       ├── es/                 # Proyectos en español
│   │       └── en/                 # Proyectos en inglés
│   ├── i18n/
│   │   └── translations.ts         # Diccionario de traducciones
│   ├── layouts/
│   │   └── Layout.astro            # Layout principal
│   ├── pages/                       # Páginas del sitio
│   │   ├── es/
│   │   └── en/
│   └── styles/
│       └── global.css              # Estilos globales + Blueprint utilities
├── astro.config.mjs                # Configuración de Astro
└── tailwind.config.mjs             # Configuración de Tailwind
```

## 🎨 Sistema de Diseño Blueprint

### Paleta de Colores

```css
--blueprint-blue: #0047AB      /* Color primario */
--safety-orange: #FF5733       /* Color de acento */
--background: #F8F9FA          /* Fondo tipo papel técnico */
```

### Componentes Especiales

- **`.dimension-line`**: Líneas de cota con markers en extremos
- **`.technical-border`**: Bordes de 1px tipo estilógrafo
- **`.blueprint-grid-bg`**: Fondo con patrón de cuadrícula 40x40px

### Tipografía

- **Headings**: Montserrat (Medium, Bold, Extra Bold)
- **Body**: Montserrat (Regular, Medium)
- **Technical Data**: IBM Plex Mono (Regular, Medium, Semibold)

## ✍️ Agregar Nuevos Proyectos

### 1. Crear archivo MDX

Crea un nuevo archivo en `src/content/projects/es/` (y su versión en `/en/`):

```mdx
---
title: "Nombre del Proyecto"
client: "Nombre del Cliente"
period: "2020-2021"
location: "Ciudad, País"
role: "Construcción / Supervisión / Asesoría"
category: "hydraulic | railroad | roads | buildings | advisory"
featured: true
order: 1
metrics:
  length: "100 km"
  volume: "500,000 m³"
  concrete: "Concreto MR-50"
---

## El Desafío
[Descripción del problema y contexto técnico]

## Solución Técnica
[Metodología y procedimientos aplicados]

## Resultados
[Métricas cuantificables y desempeño]

## Ficha Técnica
**Cliente:** ...
**Ubicación:** ...
```

### 2. Validación Automática

El schema de Zod en `src/content/config.ts` validará automáticamente todos los campos requeridos.

## 🌐 Deployment

### GitHub Pages (Automático)

1. Hacer push a la rama `main`
2. GitHub Actions ejecutará el workflow `.github/workflows/deploy.yml`
3. El sitio se desplegará en `https://[tu-usuario].github.io/ing-civil`

### Configuración Inicial

1. Ve a **Settings → Pages** en tu repositorio
2. Source: **GitHub Actions**
3. Actualiza `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://[tu-usuario].github.io',
     base: '/ing-civil',
   });
   ```

## 🔐 Variables de Entorno

No se requieren variables de entorno para un sitio estático básico.

## 📝 Personalización

### Información de Contacto

Actualiza los siguientes archivos con tu información real:

- `src/components/FloatingActions.astro`: Número de WhatsApp
- `src/components/MetaTags.astro`: Nombre profesional
- `src/layouts/Layout.astro`: Email y teléfono en footer
- `astro.config.mjs`: URL del sitio

### PDFs del CV

Coloca tus archivos PDF en `/public/`:
- `public/cv-es.pdf`
- `public/cv-en.pdf`

### Imágenes

- **Logo/Foto profesional**: `public/profile.jpg`
- **Open Graph image**: `public/og-image.jpg` (1200x630px)
- **Favicon**: `public/favicon.svg`

## 🧪 Testing

### Build Local

```bash
npm run build
npm run preview
```

### Checklist Manual

- [ ] Navegación responsive funciona
- [ ] Cambio de idioma funciona correctamente
- [ ] Proyectos se cargan sin errores
- [ ] Botones flotantes (WhatsApp, PDF) tienen URLs correctas
- [ ] Meta tags se generan correctamente (ver source HTML)
- [ ] Imágenes cargan correctamente

### Performance

Ejecuta Lighthouse en Chrome DevTools:
- **Performance**: Target 90+
- **Accessibility**: Target 95+
- **Best Practices**: Target 95+
- **SEO**: Target 100

## 🤝 Contribuir

Este es un proyecto personal de portafolio. Si encuentras bugs o tienes sugerencias de mejoras, por favor abre un issue.

## 📄 Licencia

© 2026 [Nombre del Ingeniero]. Todos los derechos reservados.

---

## 📚 Recursos Adicionales

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [Zod Schema Validation](https://zod.dev)

## 🐛 Troubleshooting

### Build Errors

**Error: "Could not resolve theme function"**
- Asegúrate de usar valores directos en CSS en lugar de `theme()`
- Tailwind v4 cambió su API

**Error: "Collection 'projects' does not exist"**
- Verifica que existan archivos `.mdx` en `src/content/projects/`
- Los archivos deben tener extensión `.mdx`, no `.md`

### Routing Issues

**404 en producción**
- Verifica que `base` en `astro.config.mjs` coincida con el nombre del repo
- Las rutas deben incluir el prefijo base: `/ing-civil/es/`

---

**Desarrollado con ❤️ usando Astro**
