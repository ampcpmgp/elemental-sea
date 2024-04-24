import { describe, expect, it } from "vitest";
import { Formatter } from "./formatter";

describe("formatter", () => {
	it("should split text into lines", async () => {
		// Arrange
		const text =
			"🌍🔋EUは2030年までに年間1,000万トンの再生可能水素生産能力を目指しているけど、PricewaterhouseCoopers (PwC) の報告書によると、目標達成には遅れが見られ、輸入依存が高まりそうだよ。🌞🌬️EU内で発表された205ギガワット (GW) のプロジェクトの中で、2023年末までに最終投資決定または建設が始まったのはたったの3GWだって。💸🛠️再生可能水素の高い生産コストと購入者の支払意欲の乖離、電解槽の建設コストの高さ、風力や太陽光発電の導入ペースの遅れが開発遅延の一因になりそう。🏗️🌐さらに、政府支援の不足や水素インフラの不足、米国からのブルー水素の輸入が予想されるなど、再生可能水素開発には課題が山積しているかも！";

		const formatter = new Formatter(text);

		// Act
		formatter.splitTextByEmoji();

		// Assert
		expect(formatter.lines).toStrictEqual([
			"🌍🔋EUは2030年までに年間1,000万トンの再生可能水素生産能力を目指しているけど、PricewaterhouseCoopers (PwC) の報告書によると、目標達成には遅れが見られ、輸入依存が高まりそうだよ。",
			"🌞🌬️EU内で発表された205ギガワット (GW) のプロジェクトの中で、2023年末までに最終投資決定または建設が始まったのはたったの3GWだって。",
			"💸🛠️再生可能水素の高い生産コストと購入者の支払意欲の乖離、電解槽の建設コストの高さ、風力や太陽光発電の導入ペースの遅れが開発遅延の一因になりそう。",
			"🏗️🌐さらに、政府支援の不足や水素インフラの不足、米国からのブルー水素の輸入が予想されるなど、再生可能水素開発には課題が山積しているかも！",
		]);
	});

	it("should append url to the second line", async () => {
		// Arrange
		const formatter = new Formatter("");
		formatter.lines = ["line1", "line2", "line3"];
		formatter.url = "https://example.com";

		// Act
		const result = formatter.appendUrl();

		// Assert
		expect(formatter.lines).toStrictEqual([
			"line1",
			"https://example.com",
			"line2",
			"line3",
		]);
	});

	it("should append url to the last line", async () => {
		// Arrange
		const formatter = new Formatter("");
		formatter.lines = ["line1", "line2", "line3"];
		formatter.url = "https://example.com";

		// Act
		const result = formatter.appendUrlToLastLine();

		// Assert
		expect(formatter.lines).toStrictEqual([
			"line1",
			"line2",
			"line3",
			"https://example.com",
		]);
	});

	it("should generate message", async () => {
		// Arrange
		const formatter = new Formatter("");
		formatter.lines = ["line1", "line2", "line3"];

		// Act
		const result = formatter.generateMessage();

		// Assert
		expect(result).toBe("line1\n\nline2\n\nline3");
	});

	it("should return formatted message when calling x", async () => {
		// Arrange
		const formatter = new Formatter(
			"🌍🔋EUは2030年までに年間1,000万トンの再生可能水素生産能力を目指しているけど、PricewaterhouseCoopers (PwC) の報告書によると、目標達成には遅れが見られ、輸入依存が高まりそうだよ。🌞🌬️EU内で発表された205ギガワット (GW) のプロジェクトの中で、2023年末までに最終投資決定または建設が始まったのはたったの3GWだって。💸🛠️再生可能水素の高い生産コストと購入者の支払意欲の乖離、電解槽の建設コストの高さ、風力や太陽光発電の導入ペースの遅れが開発遅延の一因になりそう。🏗️🌐さらに、政府支援の不足や水素インフラの不足、米国からのブルー水素の輸入が予想されるなど、再生可能水素開発には課題が山積しているかも！",
		);
		formatter.url = "https://example.com";

		// Act
		const result = formatter.x();

		// Assert
		expect(result).toBe(
			`
🌍🔋EUは2030年までに年間1,000万トンの再生可能水素生産能力を目指しているけど、PricewaterhouseCoopers (PwC) の報告書によると、目標達成には遅れが見られ、輸入依存が高まりそうだよ。

https://example.com

🌞🌬️EU内で発表された205ギガワット (GW) のプロジェクトの中で、2023年末までに最終投資決定または建設が始まったのはたったの3GWだって。

💸🛠️再生可能水素の高い生産コストと購入者の支払意欲の乖離、電解槽の建設コストの高さ、風力や太陽光発電の導入ペースの遅れが開発遅延の一因になりそう。

🏗️🌐さらに、政府支援の不足や水素インフラの不足、米国からのブルー水素の輸入が予想されるなど、再生可能水素開発には課題が山積しているかも！
`.trim(),
		);
	});

	it("should return formatted message when calling bsky", async () => {
		// Arrange
		const formatter = new Formatter(
			"🌍🔋EUは2030年までに年間1,000万トンの再生可能水素生産能力を目指しているけど、PricewaterhouseCoopers (PwC) の報告書によると、目標達成には遅れが見られ、輸入依存が高まりそうだよ。🌞🌬️EU内で発表された205ギガワット (GW) のプロジェクトの中で、2023年末までに最終投資決定または建設が始まったのはたったの3GWだって。💸🛠️再生可能水素の高い生産コストと購入者の支払意欲の乖離、電解槽の建設コストの高さ、風力や太陽光発電の導入ペースの遅れが開発遅延の一因になりそう。🏗️🌐さらに、政府支援の不足や水素インフラの不足、米国からのブルー水素の輸入が予想されるなど、再生可能水素開発には課題が山積しているかも！",
		);

		formatter.url = "https://example.com";

		// Act
		const result = formatter.bsky();

		// Assert
		expect(result).toBe(
			`
🌍🔋EUは2030年までに年間1,000万トンの再生可能水素生産能力を目指しているけど、PricewaterhouseCoopers (PwC) の報告書によると、目標達成には遅れが見られ、輸入依存が高まりそうだよ。

🌞🌬️EU内で発表された205ギガワット (GW) のプロジェクトの中で、2023年末までに最終投資決定または建設が始まったのはたったの3GWだって。

💸🛠️再生可能水素の高い生産コストと購入者の支払意欲の乖離、電解槽の建設コストの高さ、風力や太陽光発電の導入ペースの遅れが開発遅延の一因になりそう。

🏗️🌐さらに、政府支援の不足や水素インフラの不足、米国からのブルー水素の輸入が予想されるなど、再生可能水素開発には課題が山積しているかも！

https://example.com
`.trim(),
		);
	});
});
