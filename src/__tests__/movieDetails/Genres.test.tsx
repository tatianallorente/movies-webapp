import { render, screen } from "@testing-library/react";

import { Genres } from "../../components/movieDetails";

describe("Tests in component <Genres />", () => {
	const genre_ids = [28, 12, 16];

	test("Genres component renders correctly", () => {
		render(<Genres genreIds={genre_ids} />);

		const elements = screen.getAllByText(/Action|Adventure|Animation/i);

		expect(elements).toHaveLength(3);

		elements.forEach((element) => {
			expect(element).toBeInTheDocument();
			expect(element).toHaveClass("MuiChip-label");
		});
	});
});
