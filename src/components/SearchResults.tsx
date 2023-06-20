import { useContext, useRef, useEffect } from "react";

import { Alert, Typography } from "@mui/material";

import { SearchContext } from "../context";
import { URL_POPULAR_MOVIES, URL_SEARCH_MOVIE } from "../helpers/constants";
import { Loader } from "./ui";
import { useFetch, useNearScreen } from "../hooks";
import { GridCard } from "./GridCard";

const SearchResults = () => {
	const { searchQuery } = useContext(SearchContext);

	let url = URL_POPULAR_MOVIES;
	let pageTitle = "Popular movies";
	let pagination = false;

	if (searchQuery.trim() !== "") {
		url = `${URL_SEARCH_MOVIE}&query=${searchQuery}`;
		pageTitle = "Results for:";
		pagination = true;
	}

	const { data, loading, loadingNextPage, error, setPage } = useFetch(url);
	let movies = data?.results || [];

	if (searchQuery.trim() === "") {
		movies = movies?.slice(0, 12);
	}

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
		<>
			<Typography variant="h4" color="textPrimary" component="h1" gutterBottom>
				{pageTitle}
				{searchQuery.trim() !== "" && (
					<Typography
						variant="h4"
						color="primary"
						component="span"
						gutterBottom
					>
						&nbsp;{searchQuery}
					</Typography>
				)}
			</Typography>

			{loading && <Loader />}

			{!loading && movies?.length > 0 && (
				<>
					<GridCard movies={movies} />
					{pagination && <div id="visor" ref={externalRef}></div>}
				</>
			)}

			{!loading && error === null && movies?.length < 1 && (
				<Alert severity="warning">No movies found</Alert>
			)}

			{error !== null && <Alert severity="error">{error}</Alert>}

			{loadingNextPage && <Loader />}
		</>
	);
};

export default SearchResults;
