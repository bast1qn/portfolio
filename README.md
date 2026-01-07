# Developer Portfolio

Ein modernes, interaktives Developer-Portfolio gebaut mit React, Vite und Tailwind CSS.

## Features

- **Moderne UI/UX**: Dark Mode Design mit Neon-Akzenten und Glassmorphismus-Effekten
- **Animationen**: Umfangreiche Animationen mit Framer Motion
- **Responsive**: Vollständig responsive für alle Geräte
- **Interaktiv**: Hover-Effekte, Scroll-Animationen und interaktive Elemente
- **Performance**: Optimiert mit Vite für schnelle Ladezeiten

## Sektionen

1. **Hero** - Beeindruckende Landing Page mit Typing-Animation
2. **About** - Über mich und meine Skills mit animierten Skill-Bars
3. **Projects** - Projekt-Showcase mit Filter-Funktionalität
4. **Blog** - Blog-Artikel-Übersicht
5. **Contact** - Kontaktformular mit Validierung
6. **Footer** - Footer mit Social Links und Quick Navigation

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Typing Effect**: React Type Animation

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Der Development Server läuft auf `http://localhost:5173/`

### Build für Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Anpassung

### Persönliche Informationen

Ändere folgende Dateien, um deine persönlichen Informationen hinzuzufügen:

- **Hero.jsx**: Name, Titel, Beschreibung und Social Links
- **About.jsx**: Über mich Text, Skills und Statistiken
- **Projects.jsx**: Deine Projekte mit Links zu GitHub/Demo
- **Blog.jsx**: Deine Blog-Artikel
- **Contact.jsx**: Kontaktinformationen

### Farben

Die Farbpalette kann in `tailwind.config.js` angepasst werden:

```javascript
colors: {
  primary: '#00ff88',    // Hauptfarbe (Grün)
  secondary: '#0088ff',  // Sekundärfarbe (Blau)
  dark: '#0a0a0f',       // Dunkler Hintergrund
  darker: '#050508',     // Noch dunklerer Hintergrund
  accent: '#ff0088',     // Akzentfarbe (Pink)
}
```

## Deployment

Das Portfolio kann auf verschiedenen Plattformen deployed werden:

- **Vercel**: Einfach GitHub-Repo verbinden
- **Netlify**: Drag & Drop des `dist` Ordners
- **GitHub Pages**: Mit GitHub Actions
- **AWS/Azure**: Für mehr Kontrolle

## Features im Detail

### Animationen

- Scroll-basierte Animationen mit Framer Motion
- Hover-Effekte auf allen interaktiven Elementen
- Typing-Animation im Hero-Bereich
- Floating Animations für Hintergrund-Elemente
- Smooth Scrolling zu Sektionen

### Responsive Design

- Mobile-First Ansatz
- Breakpoints für Tablet und Desktop
- Responsive Navigation mit Hamburger-Menü
- Optimierte Layouts für alle Bildschirmgrößen

### Performance

- Code-Splitting mit Vite
- Optimierte Bilder und Assets
- Lazy Loading für Komponenten
- Minimales Bundle-Size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Lizenz

MIT License - Frei verwendbar für persönliche und kommerzielle Projekte

## Credits

Entwickelt mit ❤️ und viel Kaffee
