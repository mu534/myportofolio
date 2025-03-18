import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  // Handles error in the child components
  static getDerivedStateFromError(error: Error): State {
    // Return state to display fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error details to an external service (e.g., Sentry)
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Display a more user-friendly error message
      return (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            borderRadius: "5px",
            border: "1px solid #f5c6cb",
            textAlign: "center",
          }}
        >
          <h2>Oops! Something went wrong.</h2>
          <p>
            We're sorry, but something went wrong while displaying this page.
            Please try again later.
          </p>
          {/* Optionally show error details in dev mode */}
          {process.env.NODE_ENV === "development" && (
            <details style={{ marginTop: "10px", backgroundColor: "#fff3f3" }}>
              <summary>Error Details</summary>
              <pre>{this.state.error?.toString()}</pre>
              <pre>{this.state.errorInfo?.componentStack}</pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
