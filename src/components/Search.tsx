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
			mb={6}
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
				color="success"
				value={searchForm}
				onChange={handleInputChange}
			/>
			<Button variant="contained" type="submit" disableElevation color="success">
				Search
			</Button>
			<Button
				variant="outlined"
				type="button"
				sx={(theme) => ({
					color: theme.palette.success.dark,
					borderColor: theme.palette.success.dark,
					"&:hover": {
						color: theme.palette.success.dark,
						borderColor: theme.palette.success.dark,
					},
				})}
				onClick={resetFormAndCleanSearch}
			>
				Reset
			</Button>
		</Box>
	);
};

export default Search;
