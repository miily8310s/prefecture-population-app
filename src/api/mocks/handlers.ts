import { http, HttpResponse } from "msw";

export const handlers = [
	http.get(`${import.meta.env.VITE_API_URL}/api/v1/prefectures`, () => {
		return HttpResponse.json({
			message: "string",
			result: [
				{
					prefCode: 1,
					prefName: "北海道",
				},
				{
					prefCode: 2,
					prefName: "青森県",
				},
				{
					prefCode: 3,
					prefName: "岩手県",
				},
			],
		});
	}),
];
