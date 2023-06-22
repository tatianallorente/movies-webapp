import { render, screen } from "@testing-library/react";

import { OriginalTitle } from "../../components/movieDetails";

describe("Tests in component <OriginalTitle />", () => {
	const originalTitle = "Avengers";
	const originalLanguage = "En";

	test("should render the original title and language chip", () => {
		render(<OriginalTitle originalTitle={originalTitle} originalLanguage={originalLanguage} />);

		expect(screen.getByText("Original title:")).toBeInTheDocument();
		expect(screen.getByText(originalTitle)).toBeInTheDocument();

		const languageChip = screen.getByText(originalLanguage);
		expect(languageChip).toBeInTheDocument();
		expect(languageChip).toHaveClass("MuiChip-label");
	});
});
