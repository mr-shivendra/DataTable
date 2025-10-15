# Project title
React + PrimeReact DataTable with Click Row Selection and Custom Selection.​

# Overview
This project demonstrates a PrimeReact DataTable that allows selecting rows by clicking anywhere on a row, supports single or multiple selection modes, and includes custom selection actions controlled via component state and callbacks. The app has two routes, Home and Table, implemented with React Router for simple client‑side navigation without full page reloads.​

# Features
Row selection by click using selectionMode with selection and onSelectionChange bindings, with metaKeySelection optionally disabled for direct clicks without Ctrl/Cmd.​

Custom selection actions (for example, “Select All In Stock” and “Clear Selection”) by computing subsets of items and assigning them to the DataTable’s selection state.​

Two pages (Home and Table) set up using BrowserRouter, Routes, Route, and Link for SPA navigation.​

# Tech stack
React for component‑based UI and state management throughout the application.​

PrimeReact DataTable and Column for robust tabular features, selection APIs, and event hooks like onSelectionChange.​

React Router for declarative routing and navigation between pages within a single‑page app.​

# Prerequisites
Node.js and a package manager (npm, pnpm, or yarn) to install dependencies and run scripts locally.​

PrimeReact, PrimeIcons, and PrimeFlex for the table component, icon set, and utility classes used in layout and buttons.​

# Installation
Install dependencies in your project:

npm i react-router-dom primereact primeicons primeflex to add routing and PrimeReact libraries to your React app.​

Ensure the PrimeReact CSS and icons are imported so table styling and icons render correctly in the UI.
