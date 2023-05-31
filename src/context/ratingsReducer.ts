import { ContextPropsRatings } from ".";

type Action = { type: "SET_GUEST_SESSION_ID"; payload: string };

export const ratingsReducer = (state: ContextPropsRatings, action: Action): ContextPropsRatings => {
	switch (action.type) {
		case "SET_GUEST_SESSION_ID":
			localStorage.setItem("guestSessionId", action.payload);
			return {
				...state,
				guestSessionId: action.payload,
			};

		default:
			return state;
	}
};
