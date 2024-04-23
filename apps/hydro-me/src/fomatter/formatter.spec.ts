import { describe, expect, it } from "vitest";
import { Formatter } from "./formatter";

describe("formatter", () => {
	it("should split text into lines", async () => {
		// Arrange
		const text =
			"🌍🔋EUは2030年までに年間1,000万トンの再生可能水素生産能力を目指しているけど、PricewaterhouseCoopers (PwC) の報告書によると、目標達成には遅れが見られ、輸入依存が高まりそうだよ。🌞🌬️EU内で発表された205ギガワット (GW) のプロジェクトの中で、2023年末までに最終投資決定または建設が始まったのはたったの3GWだって。💸🛠️再生可能水素の高い生産コストと購入者の支払意欲の乖離、電解槽の建設コストの高さ、風力や太陽光発電の導入ペースの遅れが開発遅延の一因になりそう。🏗️🌐さらに、政府支援の不足や水素インフラの不足、米国からのブルー水素の輸入が予想されるなど、再生可能水素開発には課題が山積しているかも！";

		const formatter = new Formatter(text);

		// Act
		const result = formatter.splitTextByEmoji();

		// Assert
		expect(formatter.lines).toStrictEqual([
			"🌍🔋EUは2030年までに年間1,000万トンの再生可能水素生産能力を目指しているけど、PricewaterhouseCoopers (PwC) の報告書によると、目標達成には遅れが見られ、輸入依存が高まりそうだよ。",
			"🌞🌬️EU内で発表された205ギガワット (GW) のプロジェクトの中で、2023年末までに最終投資決定または建設が始まったのはたったの3GWだって。",
			"💸🛠️再生可能水素の高い生産コストと購入者の支払意欲の乖離、電解槽の建設コストの高さ、風力や太陽光発電の導入ペースの遅れが開発遅延の一因になりそう。",
			"🏗️🌐さらに、政府支援の不足や水素インフラの不足、米国からのブルー水素の輸入が予想されるなど、再生可能水素開発には課題が山積しているかも！",
		]);
	});
});
