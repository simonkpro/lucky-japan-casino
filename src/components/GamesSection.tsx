import { Sparkles, Video, Dices, Trophy, Target, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const games = [
  {
    id: "slots",
    name: "ビデオスロット",
    description: "3000種類以上の人気スロット",
    image: "🎰",
    count: 3000,
    popular: ["Starburst", "Book of Dead", "Gonzo's Quest"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "live-baccarat",
    name: "ライブバカラ",
    description: "日本人ディーラー対応テーブル",
    image: "🃏",
    count: 150,
    popular: ["スピードバカラ", "ノーコミッション", "スクイーズ"],
    color: "from-red-500 to-orange-500"
  },
  {
    id: "live-roulette",
    name: "ライブルーレット",
    description: "本場カジノの臨場感",
    image: "🎡",
    count: 100,
    popular: ["ライトニングルーレット", "日本語ルーレット", "VIPルーレット"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "blackjack",
    name: "ブラックジャック",
    description: "戦略性の高いカードゲーム",
    image: "🂡",
    count: 80,
    popular: ["インフィニットBJ", "パワーBJ", "フリーベットBJ"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "jackpot",
    name: "ジャックポット",
    description: "一攫千金のチャンス",
    image: "💎",
    count: 150,
    popular: ["Mega Moolah", "Divine Fortune", "Jackpot Giant"],
    color: "from-yellow-500 to-amber-500"
  },
  {
    id: "game-shows",
    name: "ゲームショー",
    description: "エンターテイメント系ライブゲーム",
    image: "🎪",
    count: 50,
    popular: ["Crazy Time", "Monopoly Live", "Dream Catcher"],
    color: "from-indigo-500 to-violet-500"
  },
];

export function GamesSection() {
  return (
    <section id="games" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">🎮</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              <span className="text-foreground">人気</span>
              <span className="text-gradient-gold">ゲーム</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            様々なジャンルの人気ゲームをお楽しみください
          </p>
        </div>

        {/* Games grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-gold text-secondary-foreground font-bold">
            全てのゲームを見る
          </Button>
        </div>
      </div>
    </section>
  );
}

function GameCard({ game }: { game: typeof games[0] }) {
  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/50 transition-all hover:shadow-gold/20 hover:shadow-lg">
      {/* Game header */}
      <div className={`bg-gradient-to-br ${game.color} p-6 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-6xl transform group-hover:scale-110 transition-transform">
            {game.image}
          </span>
          <div className="text-right">
            <p className="text-white/80 text-sm">ゲーム数</p>
            <p className="text-2xl font-bold text-white">{game.count}+</p>
          </div>
        </div>
      </div>

      {/* Game content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{game.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{game.description}</p>

        {/* Popular games */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2">人気タイトル:</p>
          <div className="flex flex-wrap gap-2">
            {game.popular.map((title) => (
              <span 
                key={title} 
                className="text-xs bg-muted px-2 py-1 rounded-md text-foreground"
              >
                {title}
              </span>
            ))}
          </div>
        </div>

        {/* Play button */}
        <Button 
          variant="outline" 
          className="w-full border-gold/50 text-gold hover:bg-gold/10 group-hover:bg-gradient-gold group-hover:text-secondary-foreground group-hover:border-transparent transition-all"
        >
          <Play className="h-4 w-4 mr-2" />
          プレイする
        </Button>
      </div>
    </div>
  );
}
