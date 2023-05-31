import { useEffect, useRef, useContext } from "react";

import { Alert, Box, Typography } from "@mui/material";

import { API_KEY } from "../helpers/constants";
import { RatingsContext } from "../context";
import { useFetch, useNearScreen } from "../hooks";
import { Loader } from "../components/ui";
import { GridCard } from "../components/GridCard";

export const MyList = () => {
	const { guestSessionId } = useContext(RatingsContext);

	const url = `https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies?api_key=${API_KEY}`;
	const { data, loading, loadingNextPage, error, setPage } = useFetch(url);
	const ratedMoviesByGuest = data?.results || [];

	const externalRef = useRef(null);
	const { isNearScreen } = useNearScreen({
		externalRef: loading ? null : externalRef,
		once: false,
	});

	const handleNextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};

	useEffect(() => {
		if (isNearScreen) {
			handleNextPage();
		}
	}, [isNearScreen]);

	return (
		<Box mt={3}>
			<Typography variant="h4" color="textPrimary" component="h1" gutterBottom>
				My list
			</Typography>

			{loading && <Loader />}

			{!loading && ratedMoviesByGuest?.length > 0 && (
				<>
					<GridCard movies={ratedMoviesByGuest} showRating={true} />
					<div id="visor" ref={externalRef}></div>
				</>
			)}

			{((!loading && error === null && ratedMoviesByGuest?.length < 1) ||
				!guestSessionId) && (
				<Alert severity="warning">This user has not rated any movies yet</Alert>
			)}

			{error !== null && <Alert severity="error">{error}</Alert>}

			{loadingNextPage && <Loader />}
		</Box>
	);
};
