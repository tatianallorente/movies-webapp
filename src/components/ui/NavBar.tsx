import { useNavigate, Link } from "react-router-dom";

import { AppBar, Box, Toolbar, Button, Container } from "@mui/material";

import tmdb_logo from "../../assets/img/blue_square_logo.svg";

export const NavBar = () => {
	const navigate = useNavigate();

	const goHome = () => {
		navigate("/");
	};

	return (
		<AppBar position="static" elevation={0}>
			<Container maxWidth="xl">
				<Toolbar
					disableGutters={true}
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignitems: "center",
					}}
				>
					<Box
						component="img"
						src={tmdb_logo}
						alt={tmdb_logo}
						mr={2}
						sx={{ maxHeight: "3rem", width: "auto", cursor: "pointer" }}
						onClick={goHome}
					/>

					<Button color="inherit" component={Link} to={"/myList"}>
						My list
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
