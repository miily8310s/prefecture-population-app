import { PrefectureCheckBoxField } from "../components/CheckBox";
import { PopulationLineGraph } from "../components/LineGraph/PopulationLineGraph";
import { usePrefectures } from "../hooks/usePrefectures";

export const Index = () => {
	const { prefectures, onCheckChange } = usePrefectures();
	return (
		<>
			<h1 className="heading">都道府県グラフアプリ</h1>
			<PrefectureCheckBoxField
				title="都道府県一覧"
				prefectures={prefectures}
				onChange={onCheckChange}
			/>
			<PopulationLineGraph />
		</>
	);
};
