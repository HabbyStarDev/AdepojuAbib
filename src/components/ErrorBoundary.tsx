import { Component, type ErrorInfo, type ReactNode } from "react";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4'>
          <div className='max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center'>
            <div className='mb-4'>
              <FiAlertTriangle className='w-16 h-16 text-red-500 mx-auto mb-4' />
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                Oops! Something went wrong
              </h2>
              <p className='text-gray-600 dark:text-gray-400 mb-6'>
                We're sorry, but something unexpected happened. Please try
                refreshing the page.
              </p>
            </div>

            <div className='space-y-3'>
              <button
                onClick={this.handleReset}
                className='w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200'
              >
                <FiRefreshCw className='w-4 h-4 mr-2' />
                Try Again
              </button>

              <button
                onClick={() => window.location.reload()}
                className='w-full px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200'
              >
                Refresh Page
              </button>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <details className='mt-6 text-left'>
                <summary className='cursor-pointer text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Error Details (Development Only)
                </summary>
                <pre className='text-xs bg-gray-100 dark:bg-gray-700 p-3 rounded overflow-auto max-h-40'>
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
