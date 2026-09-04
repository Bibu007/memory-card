# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Lessons learnt:

1. Never assign a component to a state variable. This will lead error that'll be difficult to trace.
2. Observe setClickedList() in App.jsx. Here prevState is passed by js by default. Use this when you want previous state when modifying state.
3. Always think in terms of components and data flowing between components. React is made of components not functions.
4. Follow the best practices. Remember the points from 'You might not need Effect' and 'Choosinf the state structure lesson'. Refer notes for summary. Eg: Notifying parent about state change -> solution is to lift the state up.
