<h1> Current Year </h1>

**Current Year** is a lightweight JavaScript library that simplifies displaying the current year in HTML elements. Perfect for automating copyright dates and ensuring your content stays accurate without manual updates. Easy to use, minimal setup, and high efficient!

---

## Table of Contents
  
  - [Features](#features)
  - [Quick Start](#quick-start)
    - [Installation](#installation)
    - [Basic Usage](#basic-usage)
  - [API Documentation](#api-documentation)
    - [`CurrentYear.get(addition = 0)`](#currentyeargetaddition--0)
    - [`CurrentYear.use(callback, addition = 0)`](#currentyearusecallback-addition--0)
    - [`CurrentYear.applyDirective()`](#currentyearapplydirective)
  - [Tips & Best Practices](#tips--best-practices)
  - [Advanced Concepts](#advanced-concepts)
  - [Code Examples](#code-examples)
  - [Credits](#credits)
  - [License](#license)

---

## Features

- **Retrieve Current Year**: Get the current year dynamically, with optional adjustments.
- **Dynamic DOM Updates**: Populate elements with the current year using a simple directive (`current-year`).

- **Custom Logic Execution**: Use the current year in callbacks for seamless integrations.

---

## Quick Start

### Installation
You can include Current Year in your project using a CDN.

Add the following script tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/amine-amazou/current-year@latest/dist/current-year.min.js"></script>
```

### Basic Usage

Display the current year:

```javascript
console.log(CurrentYear.get()); // Outputs: 2024
```

Populate an HTML element dynamically:

```html
<div current-year></div>
<script>
    CurrentYear.applyDirective();
</script>
```

Result: The `<div>` will display 2024 (or the current year).

---

## API Documentation

### CurrentYear.get(addition = 0)

**Purpose**: Returns the current year with optional adjustments.

**Parameters**: <br>

- _addition (Number)_:  Adjust the year by a specified value (e.g., +5 for five years ahead). Default is 0. <br>

**Returns**: <br>

- _(Number)_: The current or adjusted year. <br>

**Exemple**: <br>

```javascript
console.log(CurrentYear.get());    // Outputs: 2024
console.log(CurrentYear.get(-5));  // Outputs: 2019
console.log(CurrentYear.get(10));  // Outputs: 2034
```

### CurrentYear.use(callback, addition = 0)

**Purpose**: Executes a custom function, passing the current (or adjusted) year as an argument.

**Parameters**: <br>

- _callback (Function)_: A function that receives the year as a parameter. <br>

- _addition (Number)_:  Optional adjustment for the year. Default is 0. <br>

**Returns**: <br>
- _(Number)_: The current or adjusted year. <br>

**Exemple**: <br>

```javascript
CurrentYear.use((year) => {
    console.log(`The current year is ${year}`);
}); // Outputs: "The current year is 2024"

CurrentYear.use((year) => {
    console.log(`In 10 years, it will be ${year}`);
}, 10); // Outputs: "In 10 years, it will be 2034"
```
### CurrentYear.applyDirective()

**Purpose**: Automatically applies the current year to all HTML elements with the current-year directive.

**How It Works**: <br>

Non-input elements: Updates text content with the current year. <br>

Input/option elements: Sets their value to the current year. <br>

**Returns**: <br>
- _(Boolean)_: true if successful. <br>

**Exemple**: <br>

```html
<div current-year></div>
<input current-year />
<option current-year></option>

<script>
    CurrentYear.applyDirective();
</script>
```
**Result after execution**: <br>

```html
<div>2024</div>
<input value="2024" />
<option value="2024"></option>
```

---

## Tips & Best Practices

### 1. Simplify Dynamic Content

Use the current-year directive for quick updates without custom scripts. Ideal for footers, forms, and dropdowns.

```html
<footer current-year></footer>
<script>
    CurrentYear.applyDirective();
</script>
```

### 2. Handle Past and Future Years

Easily calculate past or future years using the addition parameter.

```javascript
const nextYear = CurrentYear.get(1); // Next year
const lastDecade = CurrentYear.get(-10); // 10 years ago
```

### 3. Integrate with Custom Logic

Use CurrentYear.use to pass the year into your functions seamlessly.

```javascript
CurrentYear.use((year) => {
    alert(`The current year is ${year}`);
});
```

---

## Advanced Concepts

### Directive Behavior

The library dynamically updates elements based on their tag type:

- Non-input tags: Updates innerText or innerHTML.

- Input/option tags: Updates value.

### Workflow of applyDirective

1. Selects all elements with the current-year attribute.

2. Updates their content or value with the current year.

3. Removes the current-year attribute after updating.

---

## Code Exemples

**Add Current Year to a Dropdown**

```html
<select>
    <option current-year></option>
</select>
<script>
    CurrentYear.applyDirective();
</script>
```

Result: The dropdown displays the current year.

**Display Year in a Footer**

```html
<footer>
    &copy; <span current-year></span>
</footer>
<script>
    CurrentYear.applyDirective();
</script>
```

Result:
```html
<footer>
    &copy; 2024
</footer>
```

---

## Credits

- Designed and Developed by [Amine Amazou](https://github.com/amine-amazou).
- Minified using [Toptal JavaScript Minifier](https://www.toptal.com/developers/javascript-minifier).
- Thanks [ChatGPT](chatgpt.com) for documentation.
- Thanks everyone for both direct and indirect support.
- Special thanks to all contributors and users for their feedback and support.

---

## License

This project is licensed under the MIT License.
Feel free to use it in personal or commercial projects!
