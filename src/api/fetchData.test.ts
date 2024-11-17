import { describe, expect, test } from "vitest";
import { fetchPrefectures } from "./fetchData";

describe("fetchData", () => {
	describe("fetchPrefectures", () => {
		test("200 status", async () => {
			const res = await fetchPrefectures();
			expect(res).toEqual({
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
		});
	});
});
