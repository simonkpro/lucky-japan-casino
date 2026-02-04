import { Gift, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { casinos } from "@/data/casinos";

const bonusTypes = [
  {
    id: "welcome",
    name: "ウェルカムボーナス",
    nameEn: "Welcome Bonus",
    description: "初回入金時に獲得できる豪華ボーナス",
    icon: Gift,
    color: "from-gold to-gold-dark",
    emoji: "🎁"
  },
  {
    id: "nodeposit",
    name: "入金不要ボーナス",
    nameEn: "No Deposit Bonus",
    description: "入金なしで獲得できる特別ボーナス",
    icon: Sparkles,
    color: "from-green-500 to-emerald-600",
    emoji: "💰"
  },
  {
    id: "freespins",
    name: "フリースピン",
    nameEn: "Free Spins",
    description: "人気スロットで使える無料回転",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    emoji: "🎰"
  },
  {
    id: "vip",
    name: "VIPボーナス",
    nameEn: "VIP Bonus",
    description: "ハイローラー向け特別特典",
    icon: Crown,
    color: "from-amber-500 to-orange-500",
    emoji: "👑"
  },
];

export function BonusesSection() {
  const topBonusCasinos = casinos.slice(0, 3);

  return (
    <section id="bonuses" className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-wave-pattern opacity-20" />
      <div className="absolute top-10 right-10 text-6xl animate-float opacity-30">🎁</div>
      <div className="absolute bottom-10 left-10 text-5xl animate-float-slow opacity-30">💎</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">🎁</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              <span className="text-primary-foreground">カジノ</span>
              <span className="text-gradient-gold">ボーナス</span>
            </h2>
            <span className="text-4xl">💎</span>
          </div>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            お得なボーナスを活用してゲームを始めましょう
          </p>
        </div>

        {/* Bonus types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bonusTypes.map((bonus) => (
            <BonusTypeCard key={bonus.id} bonus={bonus} />
          ))}
        </div>

        {/* Top bonus offers */}
        <div className="bg-card/10 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-primary-foreground mb-6 flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            今月のおすすめボーナス
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topBonusCasinos.map((casino, index) => (
              <BonusOfferCard key={casino.id} casino={casino} rank={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BonusTypeCard({ bonus }: { bonus: typeof bonusTypes[0] }) {
  const Icon = bonus.icon;
  
  return (
    <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-gold/50 transition-all hover:shadow-gold/20 hover:shadow-lg group cursor-pointer">
      <div className={`w-14 h-14 bg-gradient-to-br ${bonus.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <span className="text-2xl">{bonus.emoji}</span>
      </div>
      
      <h3 className="font-bold text-foreground mb-1">{bonus.name}</h3>
      <p className="text-xs text-muted-foreground mb-3">{bonus.nameEn}</p>
      <p className="text-sm text-muted-foreground">{bonus.description}</p>
      
      <div className="mt-4 flex items-center text-gold text-sm font-medium group-hover:gap-2 transition-all">
        詳細を見る
        <ArrowRight className="h-4 w-4 ml-1" />
      </div>
    </div>
  );
}

function BonusOfferCard({ casino, rank }: { casino: typeof casinos[0]; rank: number }) {
  return (
    <div className="bg-card border border-gold/30 rounded-xl p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center">
          <span className="text-2xl">🎰</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
              #{rank}
            </span>
          </div>
          <h4 className="font-bold text-foreground">{casino.nameJp}</h4>
        </div>
      </div>
      
      <div className="bg-muted rounded-lg p-3 mb-4">
        <p className="text-xs text-muted-foreground mb-1">ウェルカムボーナス</p>
        <p className="font-bold text-primary">{casino.bonus.welcome}</p>
        {casino.bonus.noDeposit && (
          <p className="text-xs text-gold mt-1">+ 入金不要 {casino.bonus.noDeposit}</p>
        )}
      </div>

      <Button className="w-full bg-gradient-red text-primary-foreground text-sm">
        ボーナスを獲得
      </Button>
    </div>
  );
}
