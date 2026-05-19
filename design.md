# AI Learning Hub - Design Reference

## Overview
The AI Learning Hub utilizes a **Neo-Brutalist** design system. This style is characterized by bold typography, high-contrast colors, harsh shadows, and thick outlines, providing a playful yet structured aesthetic that appeals to young learners while maintaining a modern edge.

## Typography
*   **Heading Font:** `Space Grotesk`, sans-serif (Used for all headers `h1` through `h6`, and button text)
*   **Body Font:** `Inter`, sans-serif (Used for general paragraph text and UI elements)
*   **Monospace:** `'Courier New', monospace` (Used for prompt text and code snippets)

## Color Palette

### Brand Colors
*   **Yellow:** `#FFD93D` (Primary highlight, energetic)
*   **Yellow Light:** `#FFF3C4` (Hover states, subtle backgrounds)
*   **Blue:** `#4D96FF` (Primary actions, links)
*   **Blue Light:** `#B8D4FF`
*   **Blue Dark:** `#2563EB`
*   **Green:** `#6BCB77` (Success states, correct answers)
*   **Red:** `#FF6B6B` (Error states, wrong answers)
*   **Pink:** `#FF78C4` (Accents)
*   **Purple:** `#A855F7` (Accents)
*   **Orange:** `#FF9F43` (Accents)

### Dark Mode Colors
*   **Dark Background:** `#1a1a2e` (Main app background in dark mode)
*   **Dark Card:** `#16213e` (Card backgrounds in dark mode)
*   **Dark Surface:** `#0f3460` (Interactive surfaces, hover states in dark mode)

## Core Design Elements (Neo-Brutalism)

### Shadows
*   **Default Shadow:** `4px 4px 0px 0px #000`
*   **Medium Shadow:** `6px 6px 0px 0px #000`
*   **Large Shadow:** `8px 8px 0px 0px #000`
*   **Hover Shadow:** `2px 2px 0px 0px #000` (Used when elements are pressed/hovered to simulate depth compression)

### Borders
*   **Standard Border:** `3px solid #000`
*   **Border Radius:** `12px` (Used on cards, buttons, and interactive elements)

### Dark Mode Equivalents
*   **Dark Mode Borders:** `3px solid rgba(255,255,255,0.3)`
*   **Dark Mode Default Shadow:** `4px 4px 0px 0px rgba(255,255,255,0.3)`

## Component Classes (from index.css)

*   `.neo-card`: Standard container. White background, thick black border, brutalist shadow. On hover, the shadow compresses (`translate(2px, 2px)`). In dark mode, uses `--color-dark-card` and lighter borders/shadows.
*   `.neo-btn`: Primary interactive element. Thick border, brutalist shadow, bold Space Grotesk font. Active state compresses further (`translate(4px, 4px)`) and removes shadow to simulate a physical button press.
*   `.bg-grid` & `.bg-dots`: Decorative background patterns used for section containers.
*   `.quiz-option`: Styling for interactive quiz answers. Includes specific `.correct` (green) and `.wrong` (red) states.
*   `.prompt-text`: Used for the Prompt Library code blocks. Features a monospace font, soft gray background (`#f8f9fa`), and standard brutalist borders.

## Frameworks & Tools
*   **CSS Framework:** Tailwind CSS v4 (`@tailwindcss/vite`)
*   **Animations:** Framer Motion (`framer-motion`)
*   **Icons:** Lucide React (`lucide-react`)
