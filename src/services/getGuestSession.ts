import { URL_GET_GUEST_SESSION } from "../helpers/constants";

export const getGuestSession = async (): Promise<string> => {
	try {
		const response = await fetch(URL_GET_GUEST_SESSION);

		if (response.status !== 200) {
			throw new Error("Error with the API call");
		}

		const guestSession = await response.json();

		if (guestSession.success) {
			return guestSession.guest_session_id;
		} else {
			throw new Error("Error getting the guest session");
		}
	} catch (error) {
		console.error(error);
		return "";
	}
};
