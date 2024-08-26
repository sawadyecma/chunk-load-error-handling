import React from "react";
import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const AppErrorBoundary = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary
    fallbackRender={({ error, resetErrorBoundary }) => (
      <div>
        <h1>Something went wrong</h1>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )}
  >
    {children}
  </ErrorBoundary>
);
