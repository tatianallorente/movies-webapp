import { useContext, useState } from "react";

import { useTheme } from "@mui/material/styles";
import { Rating } from "@mui/material";

import { RatingsContext } from "../context";
import { getGuestSession, postRatingMovie } from "../services";
import Swal from "sweetalert2";

interface RatingMovieFormProps {
	idMovie: string | undefined;
}

const RatingMovieForm = ({ idMovie }: RatingMovieFormProps) => {
	const [rating, setRating] = useState(0);
	const { guestSessionId, updateGuestSessionId } = useContext(RatingsContext);

	const theme = useTheme();
	const primaryColor = theme.palette.primary.main;

	const handleRatingChange = async (value: number | null) => {
		if (value === null) return;

		const vote = value * 2;
		setRating(vote);

		let sessionId = guestSessionId;

		if (!guestSessionId) {
			const newGuestSessionId = await getGuestSession();
			sessionId = newGuestSessionId;
			updateGuestSessionId(newGuestSessionId);
		}

		const isRatingSaved = await postRatingMovie({ idMovie, guestSessionId: sessionId, vote });

		if (isRatingSaved) {
			Swal.fire({
				position: "top-end",
				icon: "success",
				title: "Your rating has been saved successfully",
				showConfirmButton: false,
				timer: 1500,
			});
		} else {
			Swal.fire({
				icon: "error",
				title: "Error",
				text: "An error occurred while rating the movie",
				confirmButtonColor: primaryColor,
			});
		}
	};

	const handleRatingBlur = () => {
		if (rating !== null) {
			setRating(rating);
		}
	};

	return (
		<Rating
			name="ratingMovie"
			value={rating / 2}
			precision={0.5}
			size="large"
			onChange={(_event, newValue) => {
				handleRatingChange(newValue);
			}}
			onBlur={handleRatingBlur}
		/>
	);
};

export default RatingMovieForm;
