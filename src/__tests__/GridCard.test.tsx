import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { GridCard } from "../components/GridCard";
import { mockedData } from "./__mocks__/mockedData.ts";
import { URL_IMG_POSTER } from "../helpers/constants.ts";
import no_img from "../assets/img/no_img.png";

describe("Tests in component <GridCard />", () => {
	test("renders movie cards with correct titles and release dates", () => {
		render(
			<BrowserRouter>
				<GridCard movies={mockedData.results} />
			</BrowserRouter>
		);

		const movie1Title = screen.getByText("Movie 1");
		const movie2Title = screen.getByText("Movie 2");
		const movie1ReleaseDate = screen.getByText("22-06-2023");
		const movie2ReleaseDate = screen.getByText("23-06-2023");

		expect(movie1Title).toBeInTheDocument();
		expect(movie2Title).toBeInTheDocument();
		expect(movie1ReleaseDate).toBeInTheDocument();
		expect(movie2ReleaseDate).toBeInTheDocument();
	});

	test("renders movie cards with correct image sources", () => {
		render(
			<BrowserRouter>
				<GridCard movies={mockedData.results} />
			</BrowserRouter>
		);

		const movie1Image = screen.getByAltText("Movie 1");
		const movie2Image = screen.getByAltText("Movie 2");

		expect(movie1Image).toHaveAttribute("src", `${URL_IMG_POSTER}/imagemovie.jpg`);
		expect(movie2Image).toHaveAttribute("src", no_img);
	});

	test("renders movie cards with rating when showRating prop is true", () => {
		render(
			<BrowserRouter>
				<GridCard movies={mockedData.results} showRating={true} />
			</BrowserRouter>
		);

		const movie1Rating = screen.getByText(/My rating: \(0\)/i);
		const movie2Rating = screen.getByText(/My rating: \(8\)/i);

		expect(movie1Rating).toBeInTheDocument();
		expect(movie2Rating).toBeInTheDocument();
	});

	test("does not render any movie cards when movies prop is empty", () => {
		render(
			<BrowserRouter>
				<GridCard movies={[]} />
			</BrowserRouter>
		);

		const movieCards = screen.queryAllByRole("gridcell");

		expect(movieCards.length).toBe(0);
	});
});
