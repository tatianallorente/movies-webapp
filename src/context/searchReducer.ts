import { ContextProps } from "./SearchContext";

type Action = { type: "UPDATE_SEARCH_QUERY"; payload: string } | { type: "RESET_SEARCH_QUERY" };

export const searchReducer = (state: ContextProps, action: Action): ContextProps => {
	switch (action.type) {
		case "UPDATE_SEARCH_QUERY":
			return {
				...state,
				searchQuery: action.payload,
			};
		case "RESET_SEARCH_QUERY":
			return {
				...state,
				searchQuery: "",
			};
		default:
			return state;
	}
};
