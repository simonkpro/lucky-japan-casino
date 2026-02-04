import { Smartphone, Tablet, Monitor, Check, Download, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const mobileFeatures = [
  { icon: Smartphone, title: "スマートフォン対応", description: "iPhone/Android完全対応" },
  { icon: Tablet, title: "タブレット最適化", description: "iPadでも快適プレイ" },
  { icon: Monitor, title: "デスクトップ連携", description: "同一アカウントで同期" },
  { icon: Wifi, title: "低速回線対応", description: "4G/5Gどちらも快適" },
];

const appCasinos = [
  { name: "ラッキードラゴン", ios: true, android: true },
  { name: "サクラカジノ", ios: true, android: true },
  { name: "ゴールデン鯉", ios: true, android: false },
  { name: "招き猫カジノ", ios: false, android: true },
];

export function MobileSection() {
  return (
    <section id="mobile" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 text-8xl opacity-10">📱</div>
      <div className="absolute bottom-10 left-10 text-8xl opacity-10">💻</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">📱</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              <span className="text-foreground">モバイル</span>
              <span className="text-gradient-gold">カジノ</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            いつでもどこでもスマートフォンからプレイ可能
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone mockup */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto">
              {/* Phone frame */}
              <div className="bg-gradient-dark rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800">
                <div className="bg-gradient-to-br from-primary/20 via-gold/10 to-accent/20 rounded-[2.5rem] p-6 aspect-[9/16] flex flex-col justify-center items-center">
                  {/* Screen content */}
                  <span className="text-6xl mb-4 animate-float">🎰</span>
                  <h3 className="text-xl font-bold text-foreground mb-2">カジノアプリ</h3>
                  <p className="text-muted-foreground text-sm text-center mb-6">
                    最高のモバイル体験
                  </p>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-black text-white hover:bg-gray-800">
                      <Download className="h-4 w-4 mr-1" />
                      iOS
                    </Button>
                    <Button size="sm" className="bg-green-600 text-white hover:bg-green-700">
                      <Download className="h-4 w-4 mr-1" />
                      Android
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-gold text-secondary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-float">
                📲 アプリ対応
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-red text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-float-slow">
                ⚡ 高速ロード
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              どのデバイスでも最高の体験を
            </h3>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {mobileFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                  >
                    <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* App availability */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Download className="h-5 w-5 text-gold" />
                アプリ対応カジノ
              </h4>
              <div className="space-y-3">
                {appCasinos.map((casino) => (
                  <div 
                    key={casino.name}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <span className="font-medium text-foreground">{casino.name}</span>
                    <div className="flex items-center gap-3">
                      <span className={`flex items-center gap-1 text-sm ${casino.ios ? "text-green-500" : "text-muted-foreground"}`}>
                        {casino.ios ? <Check className="h-4 w-4" /> : "—"}
                        iOS
                      </span>
                      <span className={`flex items-center gap-1 text-sm ${casino.android ? "text-green-500" : "text-muted-foreground"}`}>
                        {casino.android ? <Check className="h-4 w-4" /> : "—"}
                        Android
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
