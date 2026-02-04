import { providers } from "@/data/casinos";

const providerDetails = [
  { name: "NetEnt", games: 500, specialty: "スロット", color: "bg-green-500" },
  { name: "Microgaming", games: 800, specialty: "ジャックポット", color: "bg-blue-500" },
  { name: "Play'n GO", games: 300, specialty: "スロット", color: "bg-purple-500" },
  { name: "Evolution Gaming", games: 200, specialty: "ライブカジノ", color: "bg-red-500" },
  { name: "Pragmatic Play", games: 400, specialty: "スロット/ライブ", color: "bg-orange-500" },
  { name: "Yggdrasil", games: 150, specialty: "スロット", color: "bg-cyan-500" },
  { name: "Red Tiger", games: 200, specialty: "デイリージャックポット", color: "bg-amber-500" },
  { name: "Playtech", games: 600, specialty: "総合", color: "bg-indigo-500" },
  { name: "Quickspin", games: 100, specialty: "スロット", color: "bg-pink-500" },
  { name: "Thunderkick", games: 80, specialty: "スロット", color: "bg-teal-500" },
  { name: "Betsoft", games: 200, specialty: "3Dスロット", color: "bg-yellow-500" },
  { name: "iSoftBet", games: 150, specialty: "スロット", color: "bg-violet-500" },
];

export function ProvidersSection() {
  return (
    <section id="providers" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">🏢</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              <span className="text-foreground">ゲーム</span>
              <span className="text-gradient-gold">プロバイダー</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            世界トップクラスのソフトウェアプロバイダー
          </p>
        </div>

        {/* Provider grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {providerDetails.map((provider) => (
            <ProviderCard key={provider.name} provider={provider} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProviderCard({ provider }: { provider: typeof providerDetails[0] }) {
  return (
    <div className="group bg-card border border-border rounded-xl p-4 text-center hover:border-gold/50 transition-all hover:shadow-gold/20 hover:shadow-lg cursor-pointer">
      {/* Provider logo placeholder */}
      <div className={`w-16 h-16 mx-auto ${provider.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
        <span className="text-white font-bold text-lg">
          {provider.name.charAt(0)}
        </span>
      </div>

      <h3 className="font-bold text-foreground text-sm mb-1 group-hover:text-gold transition-colors">
        {provider.name}
      </h3>
      
      <p className="text-xs text-muted-foreground mb-2">{provider.games}+ ゲーム</p>
      
      <span className="inline-block text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
        {provider.specialty}
      </span>
    </div>
  );
}
