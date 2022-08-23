import React, { Component, ErrorInfo, ReactNode } from "react";

import NotFoundPage from "../NoPageFound/NotFoundPage";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage?: string;
  errorInfo?: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught errored:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
     return <NotFoundPage/>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
