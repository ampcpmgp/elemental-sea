import { describe, it, expect, vi } from "vitest";
import { addUrlInTexts } from "./add-url-in-texts";

describe("addUrlInTexts", () => {
	it("should add URL in texts", () => {
		// Given
		const texts = [
			"🚀2025年にアメリカでブルー水素への投資が急増する予測だよ！",
			"🌍Wood Mackenzieによると、トランプ政権下でアメリカはブルー水素生産で世界をリードする見込みみたいなんだ。",
			"🌱ブルー水素は化石燃料を基にしつつCO2排出を抑制する技術で、持続可能なエネルギー源として注目されているよ。",
			"🌟アメリカがブルー水素生産で世界をリードすることは、エネルギーの多様化と持続可能性の向上に寄与するかも！",
		];

		// When
		const result = addUrlInTexts(texts, "https://example.com");

		// Then
		expect(result).toEqual([
			"🚀2025年にアメリカでブルー水素への投資が急増する予測だよ！",
			"https://example.com",
			"🌍Wood Mackenzieによると、トランプ政権下でアメリカはブルー水素生産で世界をリードする見込みみたいなんだ。",
			"🌱ブルー水素は化石燃料を基にしつつCO2排出を抑制する技術で、持続可能なエネルギー源として注目されているよ。",
			"🌟アメリカがブルー水素生産で世界をリードすることは、エネルギーの多様化と持続可能性の向上に寄与するかも！",
		]);
	});
});
