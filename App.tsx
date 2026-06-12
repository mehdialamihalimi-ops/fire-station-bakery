@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  --font-serif: "Playfair Display", serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --font-handwritten: "Caveat", cursive;

  /* Sidesmith Warm Olive Palette overrides */
  --color-olive-50: #f7faf3;
  --color-olive-100: #eef5e4;
  --color-olive-200: #dbecd0;
  --color-olive-500: #92b04b;
  --color-olive-600: #809c3e;
  --color-olive-700: #62792e;
  --color-olive-800: #4a5c22;
  --color-olive-900: #1b220c;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.animate-fade-in {
  animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-bounce-subtle {
  animation: bounce-subtle 2.5s ease-in-out infinite;
}

.font-handwritten {
  font-family: "Caveat", cursive;
}
