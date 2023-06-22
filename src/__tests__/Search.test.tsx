import { fireEvent, render } from "@testing-library/react";
import Search from "../components/Search";

describe("Tests in component <Search />", () => {
	const searchQuery = "Avengers";

	test("Search component is rendered", () => {
		const { container } = render(<Search />);

		expect(container).toMatchSnapshot();
	});

	test("Search input field updates state correctly", () => {
		const { getByPlaceholderText } = render(<Search />);
		const input = getByPlaceholderText("Avengers, Matrix...") as HTMLInputElement;
		fireEvent.change(input, { target: { value: "Avengers" } });
		expect(input.value).toBe("Avengers");
	});

	test("Reset button calls resetSearchQuery function and clears input field", () => {
		const { getByPlaceholderText, getByRole } = render(<Search />);
		const input = getByPlaceholderText("Avengers, Matrix...") as HTMLInputElement;
		const resetButton = getByRole("button", { name: "Reset" });

		fireEvent.change(input, { target: { value: searchQuery } });
		expect(input.value).toBe("Avengers");

		fireEvent.click(resetButton);
		expect(input.value).toBe("");
	});
});
