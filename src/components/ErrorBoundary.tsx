import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-text p-lg">
          <div className="max-w-md w-full bg-surface p-xl rounded-lg shadow-md border border-border">
            <h2 className="text-2xl font-bold text-danger mb-md">Something went wrong</h2>
            <p className="text-text-muted mb-lg">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <button
              className="w-full py-sm px-md bg-primary text-text-light rounded-md hover:bg-primary/90 transition-colors font-medium"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre className="mt-lg p-sm bg-background rounded text-xs overflow-auto text-text-muted border border-border-light">
                {this.state.error.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
