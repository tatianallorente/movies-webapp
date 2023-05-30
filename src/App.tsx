import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { NavBar, Footer } from "./components/ui";
import { AppRouter } from "./router/AppRouter";

import "./App.css";

function App() {
	const theme = createTheme();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NavBar />

			<Container maxWidth="xl" sx={{ flexGrow: 1 }}>
				<AppRouter />
			</Container>

			<Footer />
		</ThemeProvider>
	);
}

export default App;
