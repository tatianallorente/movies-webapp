import { FC, PropsWithChildren, useReducer } from "react";

import { RatingsContext, initialStateRatings, ratingsReducer } from ".";

export const RatingsProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(ratingsReducer, initialStateRatings);

	const updateGuestSessionId = (id: string) => {
		dispatch({ type: "SET_GUEST_SESSION_ID", payload: id });
	};

	return (
		<RatingsContext.Provider value={{ ...state, updateGuestSessionId }}>
			{children}
		</RatingsContext.Provider>
	);
};
