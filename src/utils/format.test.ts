import { describe, expect, test } from "vitest";
import { formatValue } from "./format";

describe("formaValue", () => {
	test.each([
		[9999, "万", "0.9999万"],
		[10000, "", "1"],
		[20000, "万", "2万"],
		[1000000, "", "100"],
	])("", (a, b, expected) => {
		expect(formatValue(a, b)).toBe(expected);
	});
});
