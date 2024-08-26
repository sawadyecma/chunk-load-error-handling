import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ErrorBoundary } from "react-error-boundary";
import { AppErrorBoundary } from "./basis/ErrorBoundary";

const App = () => {
  return (
    <div>
      <h1>Shopping App</h1>
      <AppErrorBoundary>
        <RouterProvider router={router} />
      </AppErrorBoundary>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
