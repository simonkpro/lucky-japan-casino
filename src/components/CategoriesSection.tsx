import { Sparkles, Video, Dices, Trophy, Spade, Target } from "lucide-react";

const categories = [
  { 
    id: "slots", 
    name: "スロット", 
    nameEn: "Slots",
    icon: Sparkles, 
    count: 5000,
    color: "from-purple-500 to-pink-500",
    emoji: "🎰"
  },
  { 
    id: "live", 
    name: "ライブカジノ", 
    nameEn: "Live Casino",
    icon: Video, 
    count: 500,
    color: "from-red-500 to-orange-500",
    emoji: "🎥"
  },
  { 
    id: "table", 
    name: "テーブルゲーム", 
    nameEn: "Table Games",
    icon: Dices, 
    count: 300,
    color: "from-green-500 to-emerald-500",
    emoji: "🎲"
  },
  { 
    id: "jackpot", 
    name: "ジャックポット", 
    nameEn: "Jackpots",
    icon: Trophy, 
    count: 150,
    color: "from-yellow-500 to-amber-500",
    emoji: "💰"
  },
  { 
    id: "poker", 
    name: "ポーカー", 
    nameEn: "Poker",
    icon: Spade, 
    count: 100,
    color: "from-blue-500 to-cyan-500",
    emoji: "♠️"
  },
  { 
    id: "sports", 
    name: "スポーツベット", 
    nameEn: "Sports Betting",
    icon: Target, 
    count: 1000,
    color: "from-indigo-500 to-violet-500",
    emoji: "⚽"
  },
];

export function CategoriesSection() {
  return (
    <section id="categories" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">🎮</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              <span className="text-foreground">ゲーム</span>
              <span className="text-gradient-gold">カテゴリ</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            お好みのゲームタイプからカジノを探しましょう
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: typeof categories[0] }) {
  const Icon = category.icon;
  
  return (
    <a 
      href={`#${category.id}`}
      className="group relative bg-card border border-border rounded-2xl p-6 text-center hover:border-gold/50 transition-all hover:shadow-gold/20 hover:shadow-lg cursor-pointer overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
      
      {/* Icon container */}
      <div className={`relative w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
        <span className="text-3xl">{category.emoji}</span>
      </div>

      {/* Category name */}
      <h3 className="font-bold text-foreground mb-1 group-hover:text-gold transition-colors">
        {category.name}
      </h3>
      <p className="text-xs text-muted-foreground mb-2">{category.nameEn}</p>

      {/* Count */}
      <div className="inline-flex items-center gap-1 bg-muted px-3 py-1 rounded-full">
        <span className="text-sm font-semibold text-gold">{category.count.toLocaleString()}</span>
        <span className="text-xs text-muted-foreground">ゲーム</span>
      </div>
    </a>
  );
}
