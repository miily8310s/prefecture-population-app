import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FC } from "react";
import { useLineGraph } from "../../hooks/useLineGraph";
import { usePopulations } from "../../hooks/usePopulations";
import { Prefecture } from "../../types/prefecture";

type PopulationLineGraphProps = {
	selectedPrefectures: Prefecture[];
};

export const PopulationLineGraph: FC<PopulationLineGraphProps> = (props) => {
	// see: https://stackoverflow.com/a/75291799
	// accessibilityモジュールが420k近くと非常にサイズが重いためdynamic importしている
	import("highcharts/modules/accessibility").then((HighchartsAccessibility) => {
		HighchartsAccessibility.default(Highcharts);
	});

	// MEMO:
	// 1. data値はx軸、y軸の順に配列の値をいれることが出来る
	// @see　https://www.highcharts.com/demo/highcharts/spline-inverted

	const { populations } = usePopulations(props.selectedPrefectures);

	const { options } = useLineGraph(populations);

	return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PopulationLineGraph;
