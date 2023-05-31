import { useState, useEffect, useRef } from "react";
import { Movies } from "../interfaces/movies";

interface State {
	data: null | Movies;
	loading: boolean;
	error: null | string;
}

export const useFetch = (url: string): State => {
	const isMounted = useRef(false);
	const [state, setState] = useState<State>({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		isMounted.current = true;

		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		fetchData();
	}, [url]);

	const fetchData = async () => {
		setState({ data: null, loading: true, error: null });

		try {
			const response = await fetch(url);
			if (response.status !== 200) {
				throw new Error("Error with the API call");
			}

			const data = await response.json();
			if (data.status_message !== undefined) {
				throw new Error(data.status_message);
			}

			setState({
				data,
				loading: false,
				error: null,
			});
		} catch (err) {
			console.error(err);

			setState({
				data: null,
				loading: false,
				error: "An unexpected error has occurred",
			});
		}
	};

	return state;
};
