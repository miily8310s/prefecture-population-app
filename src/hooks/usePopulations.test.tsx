import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { FC } from "react";
import { describe, expect, test } from "vitest";
import { usePopulations } from "./usePopulations";

const queryClient = new QueryClient();

type WrapperProps = {
	children?: React.ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("usePopulations", () => {
	test("init render", async () => {
		const testPopulations = [
			{
				prefCode: 1,
				prefName: "北海道",
			},
			{
				prefCode: 2,
				prefName: "青森県",
			},
		];
		const { result } = renderHook(() => usePopulations(testPopulations), {
			wrapper: Wrapper,
		});
		await waitFor(() => expect(result.current.isPending).toBe(false));
		expect(result.current.populations).toStrictEqual([
			{
				prefCode: 1,
				prefName: "北海道",
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
			{
				prefCode: 2,
				prefName: "青森県",
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
		]);
	});
});
