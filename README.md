# Project title
 PROJECT_TITLE — React + PrimeReact DataTable with Click Row Selection and Custom Selection.​

# Overview
This application demonstrates a PrimeReact DataTable configured for intuitive row selection by clicking rows, supports single or multiple selection modes, and includes custom selection actions that programmatically select subsets of data based on business rules. Client‑side navigation is implemented with React Router to provide two pages, Home and Table, without full page reloads.​

# Features
Row selection by click using selectionMode, selection, and onSelectionChange, with metaKeySelection optionally disabled so users do not need Ctrl/Cmd to select items.​

Custom selection actions such as “Select All In Stock” and “Clear Selection” driven by component state that updates the DataTable’s selection programmatically.​

Two routes (Home and Table) implemented with BrowserRouter, Routes, Route, and Link for straightforward single‑page app navigation.​

# Tech stack
React for component‑based UI and state management across pages and shared components.​

PrimeReact and PrimeIcons for DataTable, Column, plus optional PrimeFlex utilities for layout.​

React Router for declarative routing between Home and Table pages in a SPA.​


# Folder structure
Use a simple structure that separates pages, shared components, and sample data for clarity and reuse during development and testing.​

src/

main.jsx

App.jsx

componenets/

Home.jsx

Table.jsx
