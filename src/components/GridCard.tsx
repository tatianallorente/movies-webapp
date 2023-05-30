import { FC } from "react";
import { Link } from "react-router-dom";

import {
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	Typography,
	Grid,
	Tooltip,
	Rating,
	Divider,
} from "@mui/material";

import { Movie } from "../interfaces/movies";
import { URL_IMG_POSTER } from "../helpers/constants";
import { dateFormatted } from "../helpers/utils";
import no_img from "../assets/img/no_img.png";

interface Props {
	movies: Movie[];
	showRating?: boolean;
}

export const GridCard: FC<Props> = ({ movies, showRating = false }) => {
	if (movies?.length < 1) return null;

	return (
		<Grid container spacing={3}>
			{movies?.map((movie) => {
				const {
					id,
					original_title,
					poster_path,
					release_date,
					rating = 0,
				} = movie;
				const posterImg = `${URL_IMG_POSTER}${poster_path}`;

				return (
					<Grid item xs={4} sm={3} xl={2} key={id}>
						<Card>
							<CardActionArea
								component={Link}
								to={`/movie/${id}`}
								state={{ movie }}
							>
								<CardMedia
									component="img"
									image={poster_path ? posterImg : no_img}
									alt={original_title}
								/>
								<CardContent sx={{ textAlign: "center" }}>
									<Tooltip title={original_title} placement="top">
										<Typography
											variant="h6"
											color="textPrimary"
											component="h3"
											sx={{
												textOverflow: "ellipsis",
												overflow: "hidden",
												whiteSpace: "nowrap",
											}}
										>
											{original_title}
										</Typography>
									</Tooltip>
									<Typography variant="body1" color="text.secondary">
										{dateFormatted(release_date)}
									</Typography>
									{showRating && (
										<>
											<Divider sx={{ my: 1.5 }} />
											<Typography variant="body2">
												My rating: ({rating})
											</Typography>
											<Rating
												name="read-only"
												value={rating / 2}
												precision={0.5}
												readOnly
											/>
										</>
									)}
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				);
			})}
		</Grid>
	);
};
