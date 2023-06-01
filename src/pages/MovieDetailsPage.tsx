import { useState, Suspense, lazy } from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";

import {
	useTheme,
	Box,
	Typography,
	Paper,
	Rating,
	Button,
	Divider,
	CircularProgress,
} from "@mui/material";

import no_img from "../assets/img/no_img.png";
import { URL_IMG_POSTER } from "../helpers/constants";
import { dateFormatted } from "../helpers/utils";
import { Genres, OriginalTitle } from "../components/movieDetails";

export const MovieDetailsPage = () => {
	const RatingMovieForm = lazy(() => import("../components/RatingMovieForm"));

	const [showRatingForm, setShowRatingForm] = useState(false);

	const theme = useTheme();

	const { movieID: idMovie } = useParams();

	const location = useLocation();

	if (!location.state) {
		return <Navigate to="/" replace />;
	}

	const { state } = location;
	const { movie: movieDetails } = state;

	const {
		genre_ids,
		original_language,
		original_title,
		overview,
		poster_path,
		release_date,
		title,
		vote_average,
		vote_count,
	} = movieDetails || {};

	const img_url = `${URL_IMG_POSTER}${poster_path}`;

	const styles = {
		poster: {
			width: "500px",
			maxWidth: "40%",
			objectFit: "cover",
			borderTopLeftRadius: "6px",
			borderBottomLeftRadius: "6px",
			[theme.breakpoints.down("md")]: {
				display: "none",
			},
		},
		boldTitles: {
			fontWeight: 500,
			marginBottom: "0.5rem",
		},
	};

	const toggleRatingForm = () => {
		setShowRatingForm(!showRatingForm);
	};

	return (
		<Paper elevation={0}>
			{Object.keys(movieDetails)?.length > 0 && (
				<Box display="flex">
					<Box
						component="img"
						src={poster_path ? img_url : no_img}
						alt={title}
						sx={styles.poster}
					/>
					<Box
						sx={{
							padding: theme.spacing(4, 8),
							width: "100%",
						}}
					>
						<Typography variant="h4" color="secondary" component="h2" gutterBottom>
							{title}
						</Typography>
						{original_title && (
							<OriginalTitle originalTitle={original_title} originalLanguage={original_language} />
						)}
						<Typography variant="body1" component="p" gutterBottom>
							{overview}
						</Typography>

						<Typography variant="body1" component="p" gutterBottom sx={styles.boldTitles}>
							Release date:
						</Typography>
						<Typography variant="body1" component="p" gutterBottom>
							{dateFormatted(release_date, "long")}
						</Typography>

						<Typography variant="body1" component="p" sx={styles.boldTitles}>
							Genres:
						</Typography>
						<Genres genreIds={genre_ids} />

						<Typography variant="body1" component="p" sx={styles.boldTitles}>
							Rating:
						</Typography>
						<Box display="inline-flex" alignItems="center" gap={1}>
							<Rating name="TMDB" value={parseFloat(vote_average) / 2} precision={0.5} readOnly />
							<Typography variant="body2" component="span">
								{vote_count
									? `${parseFloat(vote_average).toFixed(1)} de ${vote_count} votos`
									: vote_average}
							</Typography>
						</Box>

						<Divider sx={{ my: 6 }} />

						<Box display="flex" flexDirection="column" alignItems="center" gap={3}>
							<Typography variant="h5" component="h5">
								Do you want to rate this film?
							</Typography>
							{!showRatingForm && (
								<Button variant="contained" onClick={toggleRatingForm}>
									Rate movie
								</Button>
							)}
							<Suspense fallback={<CircularProgress color="secondary" />}>
								{showRatingForm && <RatingMovieForm idMovie={idMovie} />}
							</Suspense>
						</Box>
					</Box>
				</Box>
			)}
		</Paper>
	);
};
