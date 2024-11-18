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
	http.get(
		`${import.meta.env.VITE_API_URL}/api/v1/population/composition/perYear`,
		({ request }) => {
			const url = new URL(request.url);
			const prefCode = url.searchParams.get("prefCode");
			if (!prefCode) {
				return new HttpResponse(null, { status: 404 });
			}
			if (prefCode === "1") {
				return HttpResponse.json({
					message: "string",
					result: {
						boundaryYear: 2000,
						data: {
							label: "総人口",
							data: [
								{ year: 1995, value: 1681479 },
								{ year: 1996, value: 1581479 },
								{ year: 1997, value: 1621479 },
								{ year: 1998, value: 1581479 },
								{ year: 1998, value: 1481479 },
								{ year: 2000, value: 1661479 },
								{ year: 2001, value: 1661479 },
								{ year: 2002, value: 1661479 },
								{ year: 2003, value: 1661479 },
								{ year: 2004, value: 1661479 },
								{ year: 2005, value: 1661479 },
							],
						},
					},
				});
			} else {
				return HttpResponse.json({
					message: "string",
					result: {
						boundaryYear: 2000,
						data: {
							label: "総人口",
							data: [
								{ year: 1995, value: 1281479 },
								{ year: 1996, value: 1481479 },
								{ year: 1997, value: 1221479 },
								{ year: 1998, value: 1181479 },
								{ year: 1998, value: 1381479 },
								{ year: 2000, value: 1561479 },
							],
						},
					},
				});
			}
		},
	),
];
