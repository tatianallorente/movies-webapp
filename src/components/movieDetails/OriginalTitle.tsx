import { Box, Typography, Chip } from "@mui/material";

interface Props {
	originalTitle: string;
	originalLanguage: string;
}
export const OriginalTitle = ({ originalTitle, originalLanguage }: Props) => {
	return (
		<Box mb={2}>
			<Typography variant="body1" component="span" gutterBottom sx={{ fontWeight: 500 }}>
				Original title:
			</Typography>
			<Chip
				label={originalLanguage}
				variant="outlined"
				color="secondary"
				size="small"
				sx={{
					textTransform: "uppercase",
					borderRadius: "4px",
					verticalAlign: "text-bottom",
					margin: (theme) => theme.spacing(0, 1),
					".MuiChip-label": {
						paddingLeft: "4px",
						paddingRight: "4px",
					},
				}}
			/>
			<Typography variant="body1" component="span" gutterBottom color="secondary.light">
				{originalTitle}
			</Typography>
		</Box>
	);
};
