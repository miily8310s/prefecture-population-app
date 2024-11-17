import {
	PopulationResponse,
	PopulationResponseDataByLabel,
} from "../types/population";
import { PrefecturesResponse } from "../types/prefecture";

const headers = {
	"Content-Type": "application/json; charset=utf-8",
	"X-API-KEY": import.meta.env.VITE_X_API_KEY,
};

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

export const fetchPopulation = async (
	prefCode: string,
): Promise<PopulationResponseDataByLabel[]> => {
	const response = await fetch(
		`${import.meta.env.VITE_API_URL}/api/v1/population/composition/perYear?prefCode=${prefCode}`,
		{
			headers,
		},
	);
	if (!response.ok) {
		throw new Error(`Fetch error: ${response.status}`);
	} else {
		const res: PopulationResponse = await response.json();
		return res.result.data;
	}
};
