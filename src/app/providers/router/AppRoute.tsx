import { memo, ReactElement, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import { CircularProgress } from "@chakra-ui/react";

import { routeConfig } from "./routeConfig";

export const AppRoute = memo((): ReactElement => {
  const renderWithWrapper = useCallback((route) => {
	const element = (
		<Suspense fallback={<CircularProgress isIndeterminate color="green.300" />}>{route.element}</Suspense>
	);

	return (
		<Route
			key={route.path}
			path={route.path}
			element={element}
		/>
	);
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
