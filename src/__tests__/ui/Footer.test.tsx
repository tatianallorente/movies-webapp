import { render, screen } from "@testing-library/react";

import { Footer } from "../../components/ui";

describe("Tests in component <Footer />", () => {
	test("Footer component renders correctly", () => {
		render(<Footer />);

		expect(screen.getByRole("contentinfo")).toHaveTextContent("© Designed and developed by");

		expect(screen.getByRole("link", { name: "Tatiana Llorente" })).toHaveAttribute(
			"href",
			"https://github.com/tatianallorente/movies-webapp"
		);
	});
});
