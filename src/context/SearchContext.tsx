import { createContext } from "react";

export interface ContextProps {
	searchQuery: string;
	updateSearchQuery: (newSearchQuery: string) => void;
	resetSearchQuery: () => void;
}

export const initialState: ContextProps = {
	searchQuery: "",
	updateSearchQuery: () => null,
	resetSearchQuery: () => null,
};

export const SearchContext = createContext<ContextProps>(initialState);
