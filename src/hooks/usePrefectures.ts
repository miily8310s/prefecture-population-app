import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchPrefectures } from "../api/fetchData";
import { Prefecture } from "../types/prefecture";

export const usePrefectures = () => {
	const {
		data: prefectures,
		isPending,
		error,
	} = useSuspenseQuery({
		queryKey: ["prefectures"],
		queryFn: fetchPrefectures,
		select: (data) => data.result,
	});

	const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>(
		[],
	);
	const onCheckChange = (
		value: boolean,
		data: { id: number; name: string },
	) => {
		if (value) {
			const prefecture = {
				prefCode: data.id,
				prefName: data.name,
			};
			setSelectedPrefectures((prev) => [...prev, prefecture]);
		} else {
			setSelectedPrefectures((prev) =>
				prev.filter((p) => p.prefCode !== data.id),
			);
		}
	};

	return {
		prefectures: prefectures ?? [],
		isPending,
		error,
		selectedPrefectures,
		onCheckChange,
	};
};
