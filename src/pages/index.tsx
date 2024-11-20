import { Suspense, lazy } from "react";
import { CircleSpinner } from "../components/Spinner";
import { usePrefectures } from "../hooks/usePrefectures";

const PrefectureCheckBoxField = lazy(
	() => import("../components/CheckBox/PrefectureCheckBoxField"),
);

const PopulationLineGraph = lazy(
	() => import("../components/LineGraph/PopulationLineGraph"),
);

export const Index = () => {
	const {
		prefectures,
		selectedPrefectures,
		isCheckedPrefecture,
		onCheckChange,
		onAllCheck,
		onAllReset,
	} = usePrefectures();
	return (
		<>
			<h1 className="heading">都道府県グラフアプリ</h1>
			<PrefectureCheckBoxField
				title="都道府県一覧"
				prefectures={prefectures}
				isCheckedPrefecture={isCheckedPrefecture}
				onAllCheck={onAllCheck}
				onAllReset={onAllReset}
				onChange={onCheckChange}
			/>
			<Suspense
				fallback={<CircleSpinner description="グラフデータ読み込み中" />}
			>
				<PopulationLineGraph selectedPrefectures={selectedPrefectures} />
			</Suspense>
		</>
	);
};
