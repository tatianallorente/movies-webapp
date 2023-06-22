import { render, screen } from "@testing-library/react";

import { SearchContext } from "../context";
import SearchResults from "../components/SearchResults";

describe("Tests in component <SearchResults />", () => {
	const contextValue = {
		searchQuery: "Star Wars",
		updateSearchQuery: jest.fn(),
		resetSearchQuery: jest.fn(),
	};

	test("SearchResults component renders correctly", () => {
		render(
			<SearchContext.Provider
				value={{
					...contextValue,
					searchQuery: "",
				}}
			>
				<SearchResults />
			</SearchContext.Provider>
		);

		expect(screen.getByRole("heading")).toHaveTextContent("Popular movies");
	});

	test("SearchResults show loading state", () => {
		render(
			<SearchContext.Provider value={contextValue}>
				<SearchResults />
			</SearchContext.Provider>
		);

		expect(screen.getByRole("heading")).toHaveTextContent(
			`Results for: ${contextValue.searchQuery}`
		);

		const linearProgressElement = screen.getByRole("progressbar");
		expect(linearProgressElement).toBeInTheDocument();
	});
});
