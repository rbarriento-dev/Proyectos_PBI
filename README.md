# Power BI Dashboard Accesso de Datos Landing Page

Una landing page profesional y minimalista para acceder a tableros de Power BI, construida con **Next.js 16**, **Tailwind CSS v4**, **shadcn/ui** y con soporte completo para **Dark Mode**.

## Características

-  Diseño limpio y minimalista con paleta de colores pastel
-  Color de acento amarillo/mostaza cálido (estilo Power BI)
-  Soporte completo para modo claro y oscuro
-  Diseño responsive (1 columna móvil, 2 tablet, 3 desktop)
-  Basado en Next.js 16 con performance optimizado
-  Tipografía moderna con Inter
-  Redireccionamiento automático a tableros. En construccón (`/dashboard/{id}`) 


## Estructura del Proyecto

\`\`\`
powerbi-dashboard/
├── app/
│   ├── page.tsx                 # Landing page principal
│   ├── layout.tsx               # Root layout
│   ├── dashboard/
│   │   └── [id]/
│   │       └── page.tsx         # Aquí construye tus tableros
│   └── globals.css              # Estilos globales y design tokens
├── components/
│   └── ui/                       # shadcn components
├── next.config.mjs
├── tailwind.config.ts
└── package.json
\`\`\`

## Tecnologías Utilizadas

- **Next.js 16** - Framework React con SSR
- **React 19** - Librería UI
- **Tailwind CSS v4** - Utility-first CSS
- **shadcn/ui** - Componentes UI de alta calidad
- **TypeScript** - Type safety
- **Inter Font** - Tipografía moderna y limpia

## Variables de Entorno

\`\`\`bash
# .env.local (opcional)
# No se requieren variables de entorno por defecto
# Agrega las tuyas según necesites para integrar Power BI
NEXT_PUBLIC_POWERBI_EMBED_URL=tu-url-aqui
\`\`\`



