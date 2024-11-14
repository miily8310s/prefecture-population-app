export interface PrefecturesResponse {
	message: string;
	result: Prefecture[];
}

export interface Prefecture {
	prefCode: number;
	prefName: string;
}
