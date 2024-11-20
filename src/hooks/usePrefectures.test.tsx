import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, renderHook, waitFor } from "@testing-library/react";
import { FC } from "react";
import { describe, expect, test } from "vitest";
import { usePrefectures } from "./usePrefectures";

const queryClient = new QueryClient();

type WrapperProps = {
	children?: React.ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("usePrefectures", () => {
	test("init render", async () => {
		const { result } = renderHook(() => usePrefectures(), {
			wrapper: Wrapper,
		});
		await waitFor(() => expect(result.current.isPending).toBe(false));
		expect(result.current.prefectures).toStrictEqual([
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
		]);
		expect(result.current.selectedPrefectures).toStrictEqual([]);
	});
	test("isCheckedPrefecture", async () => {
		const { result } = renderHook(() => usePrefectures(), {
			wrapper: Wrapper,
		});
		await waitFor(() => expect(result.current.isPending).toBe(false));
		act(() => result.current.onCheckChange(true, { id: 3, name: "岩手県" }));
		expect(result.current.isCheckedPrefecture(3)).toBe(true);
	});
	test("act onAllCheck", async () => {
		const { result } = renderHook(() => usePrefectures(), {
			wrapper: Wrapper,
		});
		await waitFor(() => expect(result.current.isPending).toBe(false));
		act(() => result.current.onAllCheck());
		expect(result.current.selectedPrefectures).toStrictEqual(
			result.current.prefectures,
		);
	});
	test("act onAllReset", async () => {
		const { result } = renderHook(() => usePrefectures(), {
			wrapper: Wrapper,
		});
		await waitFor(() => expect(result.current.isPending).toBe(false));
		act(() => result.current.onCheckChange(true, { id: 22, name: "テスト県" }));
		expect(result.current.selectedPrefectures).toStrictEqual([
			{ prefCode: 22, prefName: "テスト県" },
		]);
		act(() => result.current.onAllReset());
		expect(result.current.selectedPrefectures).toStrictEqual([]);
	});
	test("act onCheckChange", async () => {
		const { result } = renderHook(() => usePrefectures(), {
			wrapper: Wrapper,
		});
		await waitFor(() => expect(result.current.isPending).toBe(false));
		expect(result.current.selectedPrefectures).toStrictEqual([]);
		act(() => result.current.onCheckChange(true, { id: 22, name: "テスト県" }));
		expect(result.current.selectedPrefectures).toStrictEqual([
			{ prefCode: 22, prefName: "テスト県" },
		]);
		act(() =>
			result.current.onCheckChange(false, { id: 22, name: "テスト県" }),
		);
		expect(result.current.selectedPrefectures).toStrictEqual([]);
	});
});
