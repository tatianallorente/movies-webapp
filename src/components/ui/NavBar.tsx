import { useNavigate, Link } from "react-router-dom";

import { AppBar, Box, Toolbar, Button } from "@mui/material";

import tmdb_logo from "../../assets/img/blue_square_logo.svg";

export const NavBar = () => {
	const navigate = useNavigate();

	const goHome = () => {
		navigate("/");
	};

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" elevation={0}>
					<Toolbar
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
							sx={{ maxHeight: "3rem", width: "auto" }}
							onClick={goHome}
						/>

						<Button color="inherit" component={Link} to={"/myList"}>
							My list
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};
