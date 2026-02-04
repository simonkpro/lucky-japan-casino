import { AlertTriangle, ExternalLink } from "lucide-react";

const footerLinks = {
  casinos: [
    { label: "トップ10ランキング", href: "#ranking" },
    { label: "新着カジノ", href: "#" },
    { label: "ボーナス一覧", href: "#bonuses" },
    { label: "カジノレビュー", href: "#reviews" },
  ],
  games: [
    { label: "スロット", href: "#slots" },
    { label: "ライブカジノ", href: "#live" },
    { label: "テーブルゲーム", href: "#table" },
    { label: "ジャックポット", href: "#jackpot" },
  ],
  info: [
    { label: "入出金方法", href: "#payments" },
    { label: "セキュリティ", href: "#security" },
    { label: "よくある質問", href: "#faq" },
    { label: "ボーナス計算機", href: "#calculator" },
  ],
  legal: [
    { label: "利用規約", href: "#" },
    { label: "プライバシーポリシー", href: "#" },
    { label: "責任あるギャンブル", href: "#" },
    { label: "お問い合わせ", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-dark border-t border-gold/20">
      {/* Responsible gambling notice */}
      <div className="border-b border-gold/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-start gap-4 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 md:p-6">
            <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-primary-foreground mb-2">
                18歳未満の方のご利用はお断りしています
              </h4>
              <p className="text-sm text-primary-foreground/70">
                ギャンブルには依存性があります。責任を持ってプレイしてください。
                問題がある場合は、専門家にご相談ください。
                当サイトはアフィリエイトリンクを含んでおり、リンク経由で登録された場合、報酬を受け取る場合があります。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🎰</span>
              <div>
                <span className="text-lg font-bold text-gradient-gold font-display block">
                  カジノガイド
                </span>
                <span className="text-xs text-primary-foreground/50">
                  CASINO GUIDE JAPAN
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 mb-4">
              日本語で利用できる信頼性の高いオンラインカジノを厳選してご紹介しています。
            </p>
            {/* Lucky elements */}
            <div className="flex gap-2">
              <span className="text-2xl" title="招き猫">🐱</span>
              <span className="text-2xl" title="だるま">🎯</span>
              <span className="text-2xl" title="鯉">🐟</span>
              <span className="text-2xl" title="小判">🪙</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4">カジノ</h4>
            <ul className="space-y-2">
              {footerLinks.casinos.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary-foreground mb-4">ゲーム</h4>
            <ul className="space-y-2">
              {footerLinks.games.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary-foreground mb-4">情報</h4>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary-foreground mb-4">法的情報</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/50">
              © 2024 カジノガイドジャパン. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/50">安全認証:</span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/70">
                🔒 SSL暗号化
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/70">
                ✅ 18+
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
