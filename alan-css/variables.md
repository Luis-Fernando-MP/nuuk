```css
:root {
	--primary-color: #3498db;
	--secondary-color: #2ecc71;
	--font-size: 16px;
	--padding: 10px;
}

/* Uso */
body {
	background-color: var(--primary-color);
}

/* Por defecto */
.button {
	color: var(--button-text-color, #ffffff);
}
```

## Herencia de variables

```css
.container {
	--container-color: #f4f4f4;
}

.container .child {
	background-color: var(--container-color);
}
```

## Ámbito Local

```css
.card {
	--card-padding: 20px;
	padding: var(--card-padding);
	background-color: var(--primary-color);
}

.special-card {
	--card-padding: 30px;
	padding: var(--card-padding);
}
```

## Funciones css

```css
.header {
	background-color: rgba(var(--primary-color), 0.8);
}

p {
	font-size: calc(var(--base-font-size) * var(--scale-factor));
}

.background {
	background: linear-gradient(45deg, var(--start-color), var(--end-color));
}
```

## Cambio de temas

```css
:root {
	--background-color: red;
}

body {
	background: var(--background-color);
}

@media (prefers-color-scheme: light) {
	body {
		--background-color: yellow;
	}
}
```

# Manipulación con JavaScript

```js
/* Cambio de variables*/
document.documentElement.style.setProperty('--primary-color', '#ff6347')
```
