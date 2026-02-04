import { Star, ThumbsUp, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { casinos } from "@/data/casinos";

export function ReviewsSection() {
  const featuredCasinos = casinos.slice(0, 4);

  return (
    <section id="reviews" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">📝</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              <span className="text-foreground">最新</span>
              <span className="text-gradient-gold">カジノレビュー</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            実際にプレイして検証した詳細なレビューをお届けします
          </p>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCasinos.map((casino) => (
            <ReviewCard key={casino.id} casino={casino} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-gold/50 text-gold hover:bg-gold/10">
            すべてのレビューを見る
          </Button>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ casino }: { casino: typeof casinos[0] }) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/50 transition-all hover:shadow-gold/20 hover:shadow-lg">
      {/* Header with gradient */}
      <div className="bg-gradient-dark p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-10 rounded-full blur-2xl" />
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-3xl">🎰</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary-foreground">{casino.nameJp}</h3>
            <p className="text-sm text-primary-foreground/70">{casino.name}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating breakdown */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${i < Math.floor(casino.rating / 2) ? "fill-gold text-gold" : "text-muted"}`} 
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gold">{casino.rating}</span>
            <span className="text-muted-foreground">/10</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>1,234件</span>
          </div>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">ゲーム数</p>
            <p className="font-bold text-foreground">
              {casino.games.slots + casino.games.liveGames + casino.games.tableGames}+
            </p>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">設立</p>
            <p className="font-bold text-foreground">{casino.security.established}</p>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">ライセンス</p>
            <p className="font-bold text-foreground text-xs">{casino.security.license}</p>
          </div>
        </div>

        {/* Bonus highlight */}
        <div className="bg-gradient-to-r from-gold/10 to-primary/10 border border-gold/30 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🎁</span>
            <span className="font-semibold text-foreground">ウェルカムボーナス</span>
          </div>
          <p className="text-lg font-bold text-primary">{casino.bonus.welcome}</p>
          {casino.bonus.noDeposit && (
            <p className="text-sm text-gold mt-1">💰 入金不要ボーナス: {casino.bonus.noDeposit}</p>
          )}
        </div>

        {/* Quick pros */}
        <div className="space-y-2 mb-6">
          {casino.pros.slice(0, 3).map((pro) => (
            <div key={pro} className="flex items-center gap-2 text-sm">
              <ThumbsUp className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-foreground">{pro}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 border-gold/50 text-gold hover:bg-gold/10">
            詳細レビュー
          </Button>
          <Button className="flex-1 bg-gradient-red text-primary-foreground">
            今すぐプレイ
          </Button>
        </div>
      </div>
    </div>
  );
}
