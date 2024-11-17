import { Prefecture } from "./prefecture";

export type PopulationGraphData = Prefecture & {
	data: PopulationResponseDataByLabel[];
};

interface PopulationResponseData {
	year: number;
	value: number;
	rate?: number;
}

export interface PopulationResponseDataByLabel {
	label: string;
	data: PopulationResponseData[];
}

export interface PopulationResponse {
	message: string;
	result: {
		boundaryYear: number;
		data: PopulationResponseDataByLabel[];
	};
}
