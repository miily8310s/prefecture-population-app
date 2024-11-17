import { useSuspenseQueries } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchPopulation } from "../api/fetchData";
import { PopulationResponseDataByLabel } from "../types/population";
import { Prefecture } from "../types/prefecture";

export const usePopulations = (selectedPrefectures: Prefecture[]) => {
	// selectで型定義で失敗する現象が発生するため、asで型定義する
	// https://github.com/TanStack/query/issues/6843#issuecomment-1941577758
	const result = useSuspenseQueries({
		queries: selectedPrefectures.map((data) => ({
			queryKey: ["population", String(data.prefCode)],
			queryFn: () => fetchPopulation(String(data.prefCode)),
			select: (population: unknown) => ({
				...data,
				data: population as PopulationResponseDataByLabel[],
			}),
		})),
	});

	const isPending = useMemo(() => {
		return result.some((r) => r.isPending);
	}, [result]);

	const populations = useMemo(() => {
		return result.map((r) => r.data || []);
	}, [result]);

	return {
		isPending,
		populations,
	};
};
