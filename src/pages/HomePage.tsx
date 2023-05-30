import Search from "../components/Search";
import { SearchProvider } from "../context";

export const HomePage = () => {
	return (
		<SearchProvider>
			<Search />
		</SearchProvider>
	);
};
