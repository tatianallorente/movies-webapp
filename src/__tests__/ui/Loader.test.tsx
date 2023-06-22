import { render } from "@testing-library/react";

import { Loader } from "../../components/ui";

describe("Tests in component <Loader />", () => {
	test("Loader component renders correctly", () => {
		const { getByRole } = render(<Loader />);
		const linearProgressElement = getByRole("progressbar");
		expect(linearProgressElement).toBeInTheDocument();
	});
});
