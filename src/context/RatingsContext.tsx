import { createContext } from "react";

export interface ContextPropsRatings {
	guestSessionId: string;
	updateGuestSessionId: (id: string) => void;
}

export const initialStateRatings: ContextPropsRatings = {
	guestSessionId: localStorage.getItem("guestSessionId") || "",
	updateGuestSessionId: () => null,
};

export const RatingsContext =
	createContext<ContextPropsRatings>(initialStateRatings);
