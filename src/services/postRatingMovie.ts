import { API_KEY } from "../helpers/constants";

interface Props {
	idMovie: string | undefined;
	guestSessionId: string;
	vote: number;
}

export const postRatingMovie = async ({
	idMovie,
	guestSessionId,
	vote,
}: Props): Promise<boolean> => {
	const setRatingUrl = `https://api.themoviedb.org/3/movie/${idMovie}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}`;

	const params = {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify({ value: vote }),
	};

	try {
		const response = await fetch(setRatingUrl, params);
		if (!response.ok) {
			throw new Error("Error with the API call");
		}

		const data = await response.json();
		if (data.success) {
			return true;
		} else {
			throw new Error("Error getting the guest session");
		}
	} catch (error) {
		console.error(error);
		return false;
	}
};
