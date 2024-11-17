import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useLineGraph } from "./useLineGraph";

const TEST_DATA = [
	{
		prefCode: 1,
		prefName: "北海道",
		data: [
			{
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
		],
	},
	{
		prefCode: 2,
		prefName: "青森県",
		data: [
			{
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
		],
	},
];

const TEST_RESPONSE = [
	{
		id: "1",
		name: "北海道",
		type: "line",
		data: [
			[1995, 1681479],
			[1996, 1581479],
			[1997, 1621479],
			[1998, 1581479],
			[1998, 1481479],
			[2000, 1661479],
			[2001, 1661479],
			[2002, 1661479],
			[2003, 1661479],
			[2004, 1661479],
			[2005, 1661479],
		],
	},
	{
		id: "2",
		name: "青森県",
		type: "line",
		data: [
			[1995, 1281479],
			[1996, 1481479],
			[1997, 1221479],
			[1998, 1181479],
			[1998, 1381479],
			[2000, 1561479],
		],
	},
];

describe("useLineGraph", () => {
	test("init render", () => {
		const { result } = renderHook(() => useLineGraph(TEST_DATA));
		expect(result.current.options).toStrictEqual({
			title: {
				text: "都道府県グラフ",
				align: "left",
			},
			xAxis: {
				accessibility: {
					description: "集計年",
				},
			},
			yAxis: {
				title: {
					text: "人口（万単位）",
				},
				labels: {
					formatter: expect.any(Function),
				},
			},
			tooltip: {
				valueSuffix: "人",
			},
			responsive: {
				rules: [
					{
						condition: {
							maxWidth: 500,
						},
						chartOptions: {
							legend: {
								layout: "horizontal",
								align: "center",
								verticalAlign: "bottom",
							},
						},
					},
				],
			},
			accessibility: {
				description: "都道府県別人口構成グラフです",
			},
			series: TEST_RESPONSE,
		});
	});
});
