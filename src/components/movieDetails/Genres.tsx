import { Chip, Grid } from "@mui/material";

import { genres } from "../../helpers/genres.json";

interface Props {
	genreIds: number[];
}

export const Genres = ({ genreIds }: Props) => {
	const genresMovie = genres?.filter((a) => genreIds?.includes(a.id));

	return (
		<Grid container spacing={1} mb={3}>
			{genresMovie?.map(({ id, name }) => {
				return (
					<Grid item key={id}>
						<Chip
							label={name}
							color="success"
							sx={{
								color: (theme) => theme.palette.primary.main,
								fontWeight: 500,
							}}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
};
