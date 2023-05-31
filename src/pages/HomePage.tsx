import { SearchProvider } from "../context/";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";

export const HomePage = () => {
	return (
		<SearchProvider>
			<Search />
			<SearchResults />
		</SearchProvider>
	);
};
