import React from "react";
import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const AppErrorBoundary = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary
    fallbackRender={({ error, resetErrorBoundary }) => {
      console.log({ error });
      if (error instanceof Error && error.name === "ChunkLoadError") {
        return <h1>ChunkLoadError</h1>;
      }

      debugger;
      return (
        <div>
          <h1>Something went wrong</h1>
          <pre>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      );
    }}
  >
    {children}
  </ErrorBoundary>
);
