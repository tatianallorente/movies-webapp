import { PropsWithChildren, FC, useReducer } from "react";

import { searchReducer, SearchContext, initialState } from ".";

export const SearchProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(searchReducer, initialState);

	const updateSearchQuery = (newSearchQuery: string) => {
		dispatch({ type: "UPDATE_SEARCH_QUERY", payload: newSearchQuery });
	};

	const resetSearchQuery = () => {
		dispatch({ type: "RESET_SEARCH_QUERY" });
	};

	return (
		<SearchContext.Provider
			value={{ ...state, updateSearchQuery, resetSearchQuery }}
		>
			{children}
		</SearchContext.Provider>
	);
};
