import { Button } from "@/components/ui/button";
import { Star, Gift, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-dark py-12 md:py-20">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-wave-pattern opacity-30" />
      
      {/* Floating lucky elements */}
      <div className="absolute top-10 left-10 text-5xl md:text-7xl animate-float opacity-80">
        🐱
      </div>
      <div className="absolute top-20 right-20 text-4xl md:text-6xl animate-float-slow opacity-70" style={{ animationDelay: "0.5s" }}>
        🎏
      </div>
      <div className="absolute bottom-10 left-1/4 text-3xl md:text-5xl animate-swim opacity-60">
        🐟
      </div>
      <div className="absolute bottom-20 right-1/3 text-4xl md:text-6xl animate-float opacity-70" style={{ animationDelay: "1s" }}>
        🎰
      </div>
      <div className="absolute top-1/3 left-1/3 text-3xl md:text-4xl animate-float-slow opacity-50">
        💰
      </div>
      
      {/* Gold coins scattered */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl md:text-3xl animate-float opacity-40"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          🪙
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-gold">2024年最新版</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              <span className="text-primary-foreground">日本の</span>
              <span className="text-gradient-gold">トップ</span>
              <br />
              <span className="text-gradient-gold">オンラインカジノ</span>
              <br />
              <span className="text-primary-foreground">ガイド</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              厳選された信頼性の高いオンラインカジノを比較・レビュー。
              <span className="text-gold font-semibold">入金不要ボーナス</span>から
              <span className="text-gold font-semibold">VIP特典</span>まで、
              お得な情報をお届けします。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-gold text-secondary-foreground hover:opacity-90 shadow-gold text-lg font-bold px-8"
              >
                <Gift className="mr-2 h-5 w-5" />
                ボーナスを獲得
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gold/50 text-gold hover:bg-gold/10 text-lg font-semibold"
              >
                <Star className="mr-2 h-5 w-5" />
                ランキングを見る
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span className="text-sm text-primary-foreground/70">安全認証</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm text-primary-foreground/70">即時出金</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                <span className="text-sm text-primary-foreground/70">独占ボーナス</span>
              </div>
            </div>
          </div>

          {/* Right side - Featured Casino Card */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-gold rounded-3xl blur-xl opacity-30 animate-pulse-gold" />
              
              <div className="relative bg-card border-2 border-gold rounded-2xl p-6 shadow-gold">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-red text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    🏆 今月のNo.1
                  </span>
                </div>

                <div className="text-center pt-4">
                  <div className="w-24 h-24 mx-auto bg-gradient-gold rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-5xl">🐉</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    ラッキードラゴンカジノ
                  </h3>
                  
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                    <span className="ml-2 font-bold text-gold">9.8/10</span>
                  </div>

                  <div className="bg-muted rounded-xl p-4 mb-4">
                    <p className="text-sm text-muted-foreground mb-1">ウェルカムボーナス</p>
                    <p className="text-2xl font-bold text-gradient-gold">
                      最大¥200,000
                    </p>
                    <p className="text-sm text-gold">+ 200フリースピン</p>
                  </div>

                  <Button className="w-full bg-gradient-red hover:opacity-90 text-primary-foreground font-bold text-lg py-6">
                    今すぐプレイ
                  </Button>

                  <p className="text-xs text-muted-foreground mt-3">
                    🔒 安全・安心のライセンス取得済み
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
