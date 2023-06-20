import { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AppBar, Box, Toolbar, Button, Container } from "@mui/material";

import tmdb_logo from "../../assets/img/blue_square_logo.svg";
import { RatingsContext } from "../../context";
import { getGuestSession } from "../../services";

export const NavBar = () => {
	const navigate = useNavigate();
	const { guestSessionId, updateGuestSessionId } = useContext(RatingsContext);

	const goHome = () => {
		navigate("/");
	};

	const getNewSessionId = async () => {
		const newGuestSessionId = await getGuestSession();
		updateGuestSessionId(newGuestSessionId);
	};

	useEffect(() => {
		if (!guestSessionId) {
			getNewSessionId();
		}
	}, []);

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
