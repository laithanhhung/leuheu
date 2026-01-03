---
title: "Building Components in Astro"
description: "Learn how to create reusable components in Astro"
pubDate: "2024-01-04"
author: "Astro Developer"
---

# Building Components in Astro

Components are the building blocks of any modern web framework. Astro makes it easy to create and reuse components across your site.

## Component Basics

In Astro, components are created using the `.astro` file extension. Here's a simple component:

```astro
---
// Component logic goes here
const greeting = "Hello";
---

<div class="greeting">
  <h1>{greeting} World!</h1>
</div>

<style>
  .greeting {
    color: blue;
    font-size: 2rem;
  }
</style>
```

## Component Features

### Frontmatter

The code between the `---` dashes is called frontmatter. This is where you:

- Import other components
- Define variables and functions
- Write JavaScript/TypeScript logic

### Template

The HTML template can include:

- **Expressions**: `{variable}` or `{function()}`
- **HTML**: Standard HTML elements
- **Components**: `<MyComponent />`
- **Directives**: Special Astro attributes

### Styles

Styles in Astro are automatically scoped to the component. You can use:

- Regular CSS
- CSS modules
- CSS preprocessors (Sass, Less, etc.)

## Advanced Patterns

### Props

Pass data to components using props:

```astro
---
// Child.astro
export interface Props {
  title: string;
}

const { title } = Astro.props;
---

<h1>{title}</h1>
```

### Slots

Create flexible layouts with slots:

```astro
---
// Layout.astro
---

<div class="layout">
  <header>Site Header</header>
  <main><slot /></main>
  <footer>Site Footer</footer>
</div>
```

## Best Practices

1. **Keep components small and focused**
2. **Use TypeScript for better DX**
3. **Leverage Astro's built-in optimizations**
4. **Import only what you need**

Components in Astro give you the power to build complex UIs while maintaining excellent performance!
