import type { AxisLabelsFormatterContextObject, Options } from "highcharts";
import { useMemo } from "react";
import { PopulationGraphData } from "../../types/population";
import { formatValue } from "../../utils/format";

export const useLineGraph = (populationGraphData: PopulationGraphData[]) => {
	// 絶対に変わらない設定値
	const OPTIONS: Options = {
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
				formatter(this: AxisLabelsFormatterContextObject) {
					return formatValue(this.value);
				},
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
	};
	// 選択した都道府県など選択内容によってメモ化しておく
	const options: Options = useMemo(() => {
		return {
			...OPTIONS,
			series: populationGraphData.map((populationData) => {
				return {
					id: `${populationData.id}`,
					type: "line",
					name: populationData.name,
					data: populationData.data,
				};
			}),
		};
	}, [populationGraphData]);
	return {
		options,
	};
};
