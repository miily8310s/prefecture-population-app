import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import { useLineGraph } from "../../hooks/useLineGraph";

// see: https://stackoverflow.com/a/75291799
HighchartsAccessibility(Highcharts);

export const PopulationLineGraph = () => {
	// MEMO:
	// 1. data値はx軸、y軸の順に配列の値をいれることが出来る
	// @see　https://www.highcharts.com/demo/highcharts/spline-inverted

	// FIXME: データ取得実装時に削除する
	const TEST_DATA = [
		{
			prefCode: 1,
			prefName: "北海道",
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
			prefCode: 2,
			prefName: "青森県",
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

	const { options } = useLineGraph(TEST_DATA);

	return <HighchartsReact highcharts={Highcharts} options={options} />;
};
