export const formatValue = (value: number | string, prefix = "") => {
	const stringValue = typeof value === "string" ? Number(value) : value;
	return `${stringValue / 10000}${prefix}`;
};
