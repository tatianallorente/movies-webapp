import { renderHook, waitFor } from "@testing-library/react";

import { useFetch } from "../../hooks";
import { URL_POPULAR_MOVIES } from "../../helpers/constants";

describe("Tests in hook useFetch", () => {
	const url = URL_POPULAR_MOVIES;
	const badUrl = "";
	let consoleErrorSpy: jest.SpyInstance;

	beforeEach(() => {
		// eslint-disable-next-line
		consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
	});

	afterEach(() => {
		consoleErrorSpy.mockRestore();
	});

	test("useFetch return default state", () => {
		const { result } = renderHook(() => useFetch(url));
		const { data, loading, loadingNextPage, error, setPage } = result.current;

		expect(data).toBe(null);
		expect(loading).toBeTruthy();
		expect(loadingNextPage).toBe(false);
		expect(error).toBe(null);
		expect(setPage).toBeInstanceOf(Function);
	});

	test("useFetch return array of movies", async () => {
		const { result } = renderHook(() => useFetch(url));

		await waitFor(() => {
			const { data, loading, error } = result.current;
			const movies = data?.results;

			expect(loading).toBeFalsy();
			expect(error).toBe(null);
			expect(Array.isArray(movies)).toBe(true);
		});
	});

	test("useFetch return an error when the data is not fetched successfully", async () => {
		const { result } = renderHook(() => useFetch(badUrl));

		await waitFor(() => {
			const { data, error, loading } = result.current;

			expect(consoleErrorSpy).toHaveBeenCalled();
			expect(loading).toBe(false);
			expect(data).toBe(null);
			expect(error).toEqual("An unexpected error has occurred");
		});
	});
});
