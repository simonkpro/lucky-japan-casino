import { Check, X, AlertCircle } from "lucide-react";

const prosConsList = {
  pros: [
    "24時間いつでもどこでもプレイ可能",
    "豊富なウェルカムボーナスと特典",
    "多様な決済方法（仮想通貨含む）",
    "豊富なゲーム選択肢（数千種類）",
    "VIPプログラムで継続的な特典",
    "日本語サポート対応のカジノ多数",
    "モバイルでの快適なプレイ体験",
    "フリースピンなど無料特典あり",
  ],
  cons: [
    "ギャンブル依存症のリスク",
    "一部のカジノで出金遅延の可能性",
    "ボーナスには賭け条件あり",
    "インターネット接続が必要",
    "日本での法的グレーゾーン",
    "本人確認が必要な場合あり",
  ],
};

export function ProsConsSection() {
  return (
    <section id="pros-cons" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">⚖️</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              <span className="text-foreground">メリット・</span>
              <span className="text-gradient-gold">デメリット</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            オンラインカジノの長所と短所を正しく理解しましょう
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pros */}
            <div className="bg-green-500/5 border-2 border-green-500/30 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-600">メリット</h3>
              </div>

              <ul className="space-y-4">
                {prosConsList.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-foreground">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-500/5 border-2 border-red-500/30 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <X className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-600">デメリット</h3>
              </div>

              <ul className="space-y-4">
                {prosConsList.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-foreground">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Warning notice */}
          <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-foreground mb-2">責任あるギャンブルについて</h4>
              <p className="text-muted-foreground text-sm">
                オンラインカジノは娯楽目的でお楽しみください。予算を設定し、
                負けても問題ない金額でプレイすることをお勧めします。
                ギャンブル依存症が心配な方は、専門機関にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
