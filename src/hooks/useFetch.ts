import { useState, useEffect, useRef } from "react";
import { Movies } from "../interfaces/movies";

interface State {
	data: null | Movies;
	loading: boolean;
	loadingNextPage: boolean;
	error: null | string;
}

interface StateReturn extends State {
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

const INITIAL_PAGE = 1;

export const useFetch = (url: string): StateReturn => {
	const totalPages = useRef(0);

	const [page, setPage] = useState(INITIAL_PAGE);

	const isMounted = useRef(false);
	const [state, setState] = useState<State>({
		data: null,
		loading: true,
		loadingNextPage: false,
		error: null,
	});

	useEffect(() => {
		isMounted.current = true;

		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		fetchData(false);
	}, [url]);

	useEffect(() => {
		if (page === INITIAL_PAGE || page > totalPages.current) return;
		fetchData(true);
	}, [page]);

	const fetchData = async (nextPage: boolean) => {
		if (nextPage) {
			setState({ ...state, loadingNextPage: true });
		} else {
			setState({
				data: null,
				loading: true,
				loadingNextPage: false,
				error: null,
			});
		}

		try {
			const urlFetch = nextPage
				? `${url}&page=${page}`
				: `${url}&page=${INITIAL_PAGE}`;
			const response = await fetch(urlFetch);
			if (response.status !== 200) {
				throw new Error("Error with the API call");
			}

			const data = await response.json();
			if (data.status_message !== undefined) {
				throw new Error(data.status_message);
			}

			if (nextPage) {
				setState((prevState) => {
					return {
						data: {
							...data,
							results: prevState?.data?.results?.concat(data?.results),
						},
						loading: false,
						loadingNextPage: false,
						error: null,
					};
				});
			} else {
				setState({
					data,
					loading: false,
					loadingNextPage: false,
					error: null,
				});
			}

			totalPages.current = parseInt(data.total_pages);
		} catch (err) {
			console.error(err);

			setState({
				data: null,
				loading: false,
				loadingNextPage: false,
				error: "An unexpected error has occurred",
			});
		}
	};

	return {
		...state,
		setPage,
	};
};
