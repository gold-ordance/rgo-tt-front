import { Component, ErrorInfo, Suspense } from "react";

import { IErrorBoundaryProps, IErrorBoundaryState } from "./interfaces";

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
	super(props);
	this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
	return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
	console.log(error, errorInfo);
  }

  render() {
	const { hasError } = this.state;
	const { children } = this.props;

	if (hasError) {
	  return (
		<Suspense fallback="">
			{/* need page */}
			error
		</Suspense>
	  );
	}

	return children;
  }
}
