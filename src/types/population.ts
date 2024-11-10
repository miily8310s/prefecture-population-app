import { Prefecture } from "./prefecture";

export type PopulationGraphData = Prefecture & {
	type: string;
	data: number[][];
};
