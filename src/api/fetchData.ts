import { PrefecturesResponse } from "../types/prefecture";

export const fetchPrefectures = async (): Promise<PrefecturesResponse> => {
	const response = await fetch(
		`${import.meta.env.VITE_API_URL}/api/v1/prefectures`,
		{
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"X-API-KEY": import.meta.env.VITE_X_API_KEY,
			},
		},
	);
	if (!response.ok) {
		throw new Error(`Fetch error: ${response.status}`);
	} else {
		return response.json();
	}
};
