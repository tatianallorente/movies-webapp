import React, { useState, useContext } from "react";

import { Box, Button, TextField } from "@mui/material";

import { SearchContext } from "../context";

const Search = () => {
	const [searchForm, setSearchForm] = useState("");

	const { updateSearchQuery, resetSearchQuery } = useContext(SearchContext);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchForm(e.target.value);
	};

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		updateSearchQuery(searchForm);
	};

	const resetFormAndCleanSearch = () => {
		setSearchForm("");
		resetSearchQuery();
	};

	return (
		<Box
			component="form"
			autoComplete="off"
			onSubmit={handleSearch}
			mt={4}
			mb={4}
			display="flex"
			justifyContent="center"
			alignItems="stretch"
			gap={1}
		>
			<TextField
				id="searchForm"
				name="searchForm"
				placeholder="Avengers, Matrix..."
				variant="outlined"
				size="small"
				value={searchForm}
				onChange={handleInputChange}
			/>
			<Button
				variant="contained"
				type="submit"
				disableElevation
				color="secondary"
			>
				Search
			</Button>
			<Button
				variant="outlined"
				type="button"
				color="secondary"
				onClick={resetFormAndCleanSearch}
			>
				Reset
			</Button>
		</Box>
	);
};

export default Search;
