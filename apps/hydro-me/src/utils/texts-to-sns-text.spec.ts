import { describe, it, expect, vi } from "vitest";
import { textsToSnsText } from "./texts-to-sns-text";

describe("textsToSnsText", () => {
	it("should join texts with new lines", () => {
		// Given
		const texts = [
			"🚀2025年にアメリカでブルー水素への投資が急増する予測だよ！",
			"//example.com",
			"🌍Wood Mackenzieによると、トランプ政権下でアメリカはブルー水素生産で世界をリードする見込みみたいなんだ。",
			"🌱ブルー水素は化石燃料を基にしつつCO2排出を抑制する技術で、持続可能なエネルギー源として注目されているよ。",
			"🌟アメリカがブルー水素生産で世界をリードすることは、エネルギーの多様化と持続可能性の向上に寄与するかも！",
		];

		// When
		const result = textsToSnsText(texts);

		// Then
		expect(result).toEqual(
			"🚀2025年にアメリカでブルー水素への投資が急増する予測だよ！\n\n" +
				"//example.com\n\n" +
				"🌍Wood Mackenzieによると、トランプ政権下でアメリカはブルー水素生産で世界をリードする見込みみたいなんだ。\n\n" +
				"🌱ブルー水素は化石燃料を基にしつつCO2排出を抑制する技術で、持続可能なエネルギー源として注目されているよ。\n\n" +
				"🌟アメリカがブルー水素生産で世界をリードすることは、エネルギーの多様化と持続可能性の向上に寄与するかも！",
		);
	});
});
