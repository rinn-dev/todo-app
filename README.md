# Todo App

![Preview image](https://github.com/rinn-dev/todo-app/blob/main/preview.png)

[Demo Here](https://rinn-todo-app.vercel.app/)

This Todo App is a modern, responsive task management application built with React, utilizing React Hooks and custom hooks for reusable UI logic, RTK Query for efficient data fetching and mutations, and TypeScript for type safety and developer experience. It's designed to help you manage your daily tasks with ease, offering functionalities to add, edit, delete, and mark tasks as done. The application is also designed to be responsive, ensuring a seamless user experience across all devices.

## Installation

To install the project, follow these steps:

1. Clone the repository: `git clone {repository URL}`
2. Navigate to the project directory: `cd {project directory}`
3. Install the dependencies: `pnpm install`

To start the development api server, run the following command:

```
pnpm start:api
```

Adding the api url in .env file:

```
VITE_API_BASE_URL=https://localhost:3000/
```

Then run the React application in dev mode:

```
pnpm dev
```

This will start the server on `http://localhost:5173/`.

To run the production server locally, you can use the following command:

```
pnpm build
pnpm preview

```

This will start the server on `http://localhost:4173/`.

## Key Features

1. React Hooks and Custom Hooks: Leverages React Hooks for state and lifecycle management, along with custom hooks for encapsulating and reusing UI logic.
2. RTK Query: Utilizes RTK Query for efficient server-side data fetching, caching, and mutations, simplifying state management for the app.
3. Responsive Design: Ensures a smooth and consistent user experience across various screen sizes and devices.
4. TypeScript: Uses TypeScript to enhance code quality and readability, providing a robust foundation for development.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b {branch name}`
3. Make your changes and commit them: `git commit -m '{commit message}'`
4. Push to the branch: `git push origin {branch name}`
5. Create a pull request.
