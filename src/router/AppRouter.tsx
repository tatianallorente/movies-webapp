import { Route, Routes, Navigate } from "react-router-dom";

import { HomePage, MovieDetailsPage, MyList } from "../pages";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/movie/:movieID" element={<MovieDetailsPage />} />
			<Route path="/myList/" element={<MyList />} />

			<Route path="/" element={<HomePage />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};
