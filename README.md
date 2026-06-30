# 🏋️ Gym Template Website

**Una plataforma web de alto rendimiento y nativa en IA, diseñada para convertir a los visitantes del sitio web de tu gimnasio en miembros que pagan.**

Creado por [Aland Cueva](https://github.com/AlandCueva) — Desarrollador Web e Ingeniero de Crecimiento Digital.

---

## 💡 Por Qué Existe Este Template

La mayoría de los gimnasios pierden clientes potenciales antes de que un prospecto siquiera entre por la puerta. Sitios web lentos, plantillas genéricas y una estrategia de SEO local inexistente significan que los posibles miembros encuentran a la competencia en Google en lugar de a ti.

**Gym Template Website** no es un theme — es **infraestructura de ingresos**. Está construido desde cero con la misma arquitectura utilizada en sitios comerciales premium orientados a la conversión: un núcleo en React ultrarrápido, automatización impulsada por IA integrada de fábrica, y una base de SEO local diseñada para que los gimnasios sean encontrados, generen confianza y consigan reservas.

Este repositorio es la base lista para producción que se utiliza para desplegar sitios web personalizados y de marca blanca para clientes — o para empaquetar y revender como template premium.

---

## 🚀 Beneficios Clave para el Negocio

| Para el Dueño del Gimnasio | Qué Significa Esto |
|---|---|
| **Posiciónate localmente en Google** | Estructurado para SEO local desde el primer día — marcado de schema, metadatos optimizados y una arquitectura de contenido diseñada para competir en búsquedas como "gimnasio cerca de mí". |
| **Convierte visitantes en clientes potenciales 24/7** | Los flujos de chat y formularios impulsados por IA califican y capturan leads incluso fuera del horario comercial. |
| **Reduce la carga administrativa** | La integración nativa de IA automatiza preguntas frecuentes, consultas sobre clases y dudas sobre membresías — sin necesidad de personal adicional. |
| **Carga al instante, en cualquier lugar** | La compilación impulsada por Vite ofrece tiempos de carga inferiores a un segundo, lo cual mejora directamente el posicionamiento SEO y reduce la tasa de rebote. |
| **Luce como una marca premium** | Un sistema de diseño audaz, con enfoque en modo oscuro, transmite la misma energía que Equinox, Barry's o F45 — sin el precio de una agencia. |

---

## ⚙️ Stack Tecnológico

Diseñado para rendimiento, escalabilidad y mantenibilidad — sin librerías de UI sobrecargadas, sin lastre heredado.

- **React 18** — arquitectura escalable basada en componentes
- **TypeScript** — código con tipado seguro para menos errores y entregas más sencillas
- **Vite** — compilaciones casi instantáneas y bundles de producción optimizados
- **Tailwind CSS** — estilizado utility-first, cero CSS sin usar enviado a producción
- **Gemini API** — integración nativa de IA para calificación de leads, asistencia por chat y automatización de contenido
- **Animaciones basadas en IntersectionObserver** — revelados activados por scroll y microinteracciones que se sienten premium sin sacrificar el rendimiento

> Sin jQuery. Sin plugins de WordPress. Sin kits de UI externos. Cada línea está construida para velocidad y control.

---

## ✨ Funcionalidades Principales

### 🔍 SEO Local, Integrado de Fábrica — No Añadido Después
- Estructura HTML semántica optimizada para rastreo (crawlability)
- Schema de Local Business (JSON-LD) listo para alinearse con Google Business Profile
- Títulos meta, descripciones y etiquetas Open Graph preconfigurados por sección
- Core Web Vitals optimizados (LCP, CLS, INP) listos desde el inicio

### 🤖 Integración Nativa de IA
- Conexiones con la Gemini API para un asistente inteligente en el sitio (recomendaciones de clases, preguntas frecuentes sobre membresías, captura de leads)
- Fácilmente extensible para automatizar seguimientos por WhatsApp/Email para nuevos leads

### 🎯 Diseño Orientado a la Conversión
- Ubicación estratégica de CTAs basada en investigación de conversión de la industria del fitness
- Secciones de membresía/precios diseñadas para reducir la fricción en la toma de decisiones
- Formularios de captura de leads listos para integrarse directamente con CRMs o Google Sheets

### 🎨 Identidad Visual Premium
- UI con enfoque en modo oscuro y un sistema de acentos audaz y de alto contraste
- Animaciones fluidas basadas en scroll y elementos interactivos magnéticos
- Totalmente responsivo en móvil, tablet y escritorio

---

## 📁 Estructura del Proyecto

```
gym-template-website/
├── src/
│   ├── components/      # Componentes de UI modulares (Hero, Pricing, Classes, AI Chat, etc.)
│   ├── sections/        # Secciones a nivel de página ensambladas a partir de componentes
│   ├── lib/              # Integración con la Gemini API, utilidades, helpers
│   ├── assets/           # Imágenes, íconos, fuentes
│   └── styles/            # Configuración de Tailwind y estilos globales
├── public/
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

---

## 🛠️ Inicio Rápido

```bash
# Clona el repositorio
git clone https://github.com/your-username/gym-template-website.git
cd gym-template-website

# Instala las dependencias
npm install

# Agrega tus variables de entorno
cp .env.example .env
# Agrega tu clave de la Gemini API en .env

# Ejecuta el servidor de desarrollo
npm run dev

# Compila para producción
npm run build
```

---

## 🔑 Variables de Entorno

```env
VITE_GEMINI_API_KEY=your_api_key_here
VITE_BUSINESS_NAME=your_gym_name
VITE_BUSINESS_LOCATION=your_city
```

---

## 🎯 Guía de Personalización

Este template está diseñado para ser rebrandeado rápidamente para la entrega a clientes:

1. **Colores de marca** → actualiza los tokens de acento en `tailwind.config.js`
2. **Textos y mensajes** → edita el contenido directamente en `src/sections/`
3. **Planes de precios/membresías** → actualiza el array de datos del componente `PricingPlans`
4. **Comportamiento del asistente de IA** → configura los prompts en `src/lib/gemini.ts`
5. **Metadatos de SEO local** → actualiza las etiquetas meta de `index.html` + el schema JSON-LD en `src/lib/seo.ts`

---

## 📈 Ideal Para

- Gimnasios independientes y estudios boutique de fitness
- Boxes de CrossFit y centros de entrenamiento funcional
- Entrenadores personales que están escalando hacia una marca
- Franquicias de fitness que necesitan un despliegue rápido y consistente en mercados locales

---

## 💼 Licenciamiento y Uso Comercial

Este template está disponible para:
- **Despliegue para un solo cliente** (construido a medida para la marca de un gimnasio)
- **Reventa de marca blanca** (para agencias/desarrolladores que lo empaqueten para sus propios clientes)

Para términos de licencia, desarrollo personalizado o acuerdos de templates por volumen, contáctame directamente.

---

## 📬 Contacto

**Aland Cueva** — Desarrollador Web y Especialista en Integración de IA, Loja, Ecuador
Construyendo plataformas web de alto rendimiento y nativas en IA para negocios locales listos para escalar.

📧 [juliancueva17@gmail.com]
🌐 [Próximamente...]

---

<p align="center">Construido para gimnasios que no solo quieren un sitio web — quieren un motor de crecimiento.</p>
