import { Star, ExternalLink, Gift, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { casinos } from "@/data/casinos";

export function RankingSection() {
  const top3 = casinos.slice(0, 3);
  const rest = casinos.slice(3, 10);

  return (
    <section id="ranking" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">🏆</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              <span className="text-gradient-gold">トップ10</span>
              <span className="text-foreground">カジノランキング</span>
            </h2>
            <span className="text-4xl">🏆</span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            厳選された信頼性の高いオンラインカジノをランキング形式でご紹介
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Second place */}
          <div className="order-2 md:order-1 md:mt-8">
            <PodiumCard casino={top3[1]} rank={2} color="silver" />
          </div>
          
          {/* First place */}
          <div className="order-1 md:order-2">
            <PodiumCard casino={top3[0]} rank={1} color="gold" featured />
          </div>
          
          {/* Third place */}
          <div className="order-3 md:mt-12">
            <PodiumCard casino={top3[2]} rank={3} color="bronze" />
          </div>
        </div>

        {/* Rest of rankings */}
        <div className="space-y-4">
          {rest.map((casino, index) => (
            <RankingCard key={casino.id} casino={casino} rank={index + 4} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PodiumCard({ 
  casino, 
  rank, 
  color, 
  featured = false 
}: { 
  casino: typeof casinos[0]; 
  rank: number; 
  color: "gold" | "silver" | "bronze";
  featured?: boolean;
}) {
  const colorClasses = {
    gold: "border-gold bg-gradient-to-b from-gold/20 to-transparent",
    silver: "border-gray-400 bg-gradient-to-b from-gray-300/20 to-transparent",
    bronze: "border-amber-700 bg-gradient-to-b from-amber-700/20 to-transparent",
  };

  const rankEmoji = {
    1: "🥇",
    2: "🥈",
    3: "🥉",
  };

  return (
    <div className={`relative rounded-2xl border-2 ${colorClasses[color]} p-6 ${featured ? "shadow-gold" : ""}`}>
      {/* Rank badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className={`flex items-center gap-1 ${color === "gold" ? "bg-gradient-gold" : color === "silver" ? "bg-gray-400" : "bg-amber-700"} text-white px-4 py-1 rounded-full font-bold`}>
          <span className="text-xl">{rankEmoji[rank as keyof typeof rankEmoji]}</span>
          <span>#{rank}</span>
        </div>
      </div>

      <div className="text-center pt-4">
        {/* Casino icon */}
        <div className={`w-20 h-20 mx-auto ${color === "gold" ? "bg-gradient-gold" : color === "silver" ? "bg-gray-400" : "bg-amber-700"} rounded-2xl flex items-center justify-center mb-4`}>
          <span className="text-4xl">🎰</span>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-1">{casino.nameJp}</h3>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < Math.floor(casino.rating / 2) ? "fill-gold text-gold" : "text-muted"}`} 
            />
          ))}
          <span className="ml-1 font-bold text-gold">{casino.rating}</span>
        </div>

        {/* Bonus */}
        <div className="bg-muted rounded-lg p-3 mb-4">
          <p className="text-xs text-muted-foreground">ボーナス</p>
          <p className="font-bold text-primary text-sm">{casino.bonus.welcome}</p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {casino.features.slice(0, 2).map((feature) => (
            <span key={feature} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </div>

        <Button 
          className={`w-full ${color === "gold" ? "bg-gradient-gold text-secondary-foreground" : "bg-gradient-red text-primary-foreground"} font-bold`}
        >
          詳細を見る
        </Button>
      </div>
    </div>
  );
}

function RankingCard({ casino, rank }: { casino: typeof casinos[0]; rank: number }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 md:p-6 bg-card border border-border rounded-xl hover:border-gold/50 transition-colors">
      {/* Rank */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gradient-red rounded-xl flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">#{rank}</span>
        </div>
      </div>

      {/* Casino info */}
      <div className="flex-shrink-0 text-center md:text-left">
        <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-2 md:mb-0">
          <span className="text-3xl">🎰</span>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left">
        <h3 className="font-bold text-foreground mb-1">{casino.nameJp}</h3>
        <div className="flex items-center justify-center md:justify-start gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-3 w-3 ${i < Math.floor(casino.rating / 2) ? "fill-gold text-gold" : "text-muted"}`} 
            />
          ))}
          <span className="ml-1 text-sm font-medium text-gold">{casino.rating}</span>
        </div>
      </div>

      {/* Bonus */}
      <div className="flex-1 text-center">
        <p className="text-xs text-muted-foreground mb-1">ボーナス</p>
        <p className="font-bold text-primary text-sm">{casino.bonus.welcome}</p>
        {casino.bonus.noDeposit && (
          <p className="text-xs text-gold flex items-center justify-center gap-1">
            <Gift className="h-3 w-3" />
            入金不要 {casino.bonus.noDeposit}
          </p>
        )}
      </div>

      {/* Features */}
      <div className="hidden lg:flex flex-1 flex-wrap gap-1 justify-center">
        {casino.pros.slice(0, 2).map((pro) => (
          <span key={pro} className="text-xs flex items-center gap-1 text-green-600">
            <Check className="h-3 w-3" />
            {pro}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="flex-shrink-0 flex gap-2">
        <Button variant="outline" size="sm" className="border-gold/50 text-gold hover:bg-gold/10">
          レビュー
        </Button>
        <Button size="sm" className="bg-gradient-red text-primary-foreground">
          <ExternalLink className="h-4 w-4 mr-1" />
          プレイ
        </Button>
      </div>
    </div>
  );
}
