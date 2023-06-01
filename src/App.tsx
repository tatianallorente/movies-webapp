import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Container } from "@mui/material";

import { NavBar, Footer } from "./components/ui";
import { RatingsProvider } from "./context";
import { AppRouter } from "./router/AppRouter";
import { customTheme } from "./theme/customTheme";
import "./App.css";

function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<RatingsProvider>
				<CssBaseline />
				<NavBar />

				<Container maxWidth="xl" sx={{ flexGrow: 1, pt: 6 }}>
					<AppRouter />
				</Container>

				<Footer />
			</RatingsProvider>
		</ThemeProvider>
	);
}

export default App;
