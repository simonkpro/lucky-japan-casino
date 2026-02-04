import { Shield, Lock, Award, Eye, Server, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "SSL暗号化",
    description: "256-bit SSL証明書で全ての通信を暗号化",
    color: "bg-blue-500"
  },
  {
    icon: Shield,
    title: "ライセンス認証",
    description: "MGA、ジブラルタル等の公的ライセンス",
    color: "bg-green-500"
  },
  {
    icon: Eye,
    title: "公正なゲーム",
    description: "RNG（乱数生成器）で公平性を保証",
    color: "bg-purple-500"
  },
  {
    icon: Server,
    title: "データ保護",
    description: "最新のファイアウォールで個人情報を保護",
    color: "bg-orange-500"
  },
  {
    icon: Award,
    title: "第三者監査",
    description: "eCOGRA等の独立機関による定期監査",
    color: "bg-cyan-500"
  },
  {
    icon: FileCheck,
    title: "KYC認証",
    description: "本人確認で不正利用を防止",
    color: "bg-pink-500"
  },
];

const licenses = [
  { name: "マルタ MGA", country: "🇲🇹", trusted: true },
  { name: "ジブラルタル", country: "🇬🇮", trusted: true },
  { name: "キュラソー", country: "🇨🇼", trusted: true },
  { name: "イギリス UKGC", country: "🇬🇧", trusted: true },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-wave-pattern opacity-10" />
      <div className="absolute top-10 left-10 text-8xl opacity-10">🔒</div>
      <div className="absolute bottom-10 right-10 text-8xl opacity-10">🛡️</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">🔒</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              <span className="text-primary-foreground">安全性・</span>
              <span className="text-gradient-gold">セキュリティ</span>
            </h2>
          </div>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            信頼できるカジノで安心してプレイ
          </p>
        </div>

        {/* Security features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 hover:border-gold/50 transition-all"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Licenses */}
        <div className="bg-card/10 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-primary-foreground mb-6 text-center">
            信頼できるライセンス発行機関
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {licenses.map((license) => (
              <div
                key={license.name}
                className="bg-card/20 rounded-xl p-4 text-center"
              >
                <span className="text-4xl mb-2 block">{license.country}</span>
                <h4 className="font-bold text-primary-foreground text-sm">{license.name}</h4>
                <span className="inline-flex items-center gap-1 text-xs text-green-400 mt-2">
                  <Shield className="h-3 w-3" />
                  信頼性高
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-primary-foreground/60 text-sm mt-6">
            当サイトでは、上記のライセンスを取得したカジノのみをご紹介しています。
          </p>
        </div>
      </div>
    </section>
  );
}
