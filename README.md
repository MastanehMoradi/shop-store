# Projecct output
In this project a sample of online shop has been developed, the home page looks like the following:
<br/>
<img width="881" alt="homePage" src="https://github.com/user-attachments/assets/b0197040-00bd-4b76-bca6-391aff5b8375">
<br/>
Each product has a detail page, when you click on each product you will see the details, a short video of the product and other features.


<img width="886" alt="pageDetails" src="https://github.com/user-attachments/assets/ebedeec2-246e-4b63-9f5f-bbf99e132c11">
<br/>
<br/>
You can filter the products by clicking on product categories, sort the products, or search for specific product:
<br/>
<img width="378" alt="filters" src="https://github.com/user-attachments/assets/fd127d02-c300-4807-99b6-598fd7b5efd9">
<br/>
<br/>
The other feature is adding the products to your basket and update the count of the products in your basket:
<br/>

<img width="885" alt="basket" src="https://github.com/user-attachments/assets/8d971fe8-5ac5-4555-a77b-0c3fa0f1eaf3">

<br/>
<br/>
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
#   s h o p - s t o r e 
 
 
