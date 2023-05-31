import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export const Loader = () => {
	return (
		<Box mt={3} mb={3} sx={{ width: "100%" }}>
			<LinearProgress />
		</Box>
	);
};
