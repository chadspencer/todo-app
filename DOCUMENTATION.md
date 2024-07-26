# Todo App Documentation

## Table of Contents

1. [Components](#components)
   - [App](#app)
   - [TodoList](#todolist)
   - [TodoItem](#todoitem)
   - [AddTodo](#addtodo)
   - [FilterTodos](#filtertodos)
   - [ThemeToggle](#themetoggle)
2. [Context](#context)
   - [TodoContext](#todocontext)
   - [ThemeContext](#themecontext)
3. [Hooks](#hooks)
   - [useTodoContext](#usetodocontext)
   - [useTheme](#usetheme)
5. [Styling](#styling)

## Components

### App
The main component of the Todo application. It wraps the entire app with necessary providers and renders the main structure of the application.

### TodoList
Renders the list of todos. It filters todos based on the current filter state.

### TodoItem
Renders an individual todo item. It allows for toggling completion status and deletion of the todo.

### AddTodo
Provides a form for adding new todos to the list.

### FilterTodos
Provides buttons to filter the todo list based on their completion status.

### ThemeToggle
Renders a button that allows the user to toggle between light and dark themes.

## Context

### TodoContext
Provides the Todo context to its children. It manages the state of todos and provides functions to manipulate this state.

### ThemeContext
Provides theming functionality to the application. It manages the current theme state and provides a function to toggle between light and dark themes.

## Hooks

### useTodoContext
A custom hook that provides access to the Todo context.

### useTheme
A custom hook that provides access to the current theme state and toggle function.

## Styling

This project uses a combination of Material-UI components and custom SCSS for styling. The main global styles are defined in src/styles/app.scss, and component-specific styles located with their respective components. The app supports both light and dark modes, which are toggled using the ThemeToggle component and managed by the ThemeContext. The theme configuration is defined in src/styles/theme.ts.