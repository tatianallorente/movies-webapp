import { createTheme, darken } from "@mui/material/styles";

export const customTheme = () => {
	const customTheme = createTheme({
		palette: {
			background: { default: "#e0e0e0" },
			primary: { main: "#0d253f" },
			secondary: { main: darken("#01b4e4", 0.2) },
			success: {
				main: "#90cea1",
				dark: darken("#90cea1", 0.2),
			},
		},
		components: {
			MuiAppBar: {
				defaultProps: {
					elevation: 0,
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundColor: "#efefef",
					},
				},
			},
			MuiTypography: {
				styleOverrides: {
					gutterBottom: {
						marginBottom: "1rem",
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						backgroundColor: "#efefef",
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					outlined: {
						backgroundColor: "#efefef",
					},
				},
			},
		},
	});

	return customTheme;
};
