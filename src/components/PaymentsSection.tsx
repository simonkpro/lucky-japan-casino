import { CreditCard, Building, Bitcoin, Coins, Smartphone, Wallet, Clock, Check, Shield } from "lucide-react";

const paymentMethods = [
  { 
    id: "credit", 
    name: "クレジットカード", 
    nameEn: "Credit Card",
    icon: CreditCard, 
    time: "即時",
    brands: ["VISA", "Mastercard", "JCB"],
    color: "bg-blue-500"
  },
  { 
    id: "bank", 
    name: "銀行振込", 
    nameEn: "Bank Transfer",
    icon: Building, 
    time: "1-3営業日",
    brands: ["国内銀行対応"],
    color: "bg-green-500"
  },
  { 
    id: "bitcoin", 
    name: "ビットコイン", 
    nameEn: "Bitcoin",
    icon: Bitcoin, 
    time: "10-30分",
    brands: ["BTC"],
    color: "bg-orange-500"
  },
  { 
    id: "ethereum", 
    name: "イーサリアム", 
    nameEn: "Ethereum",
    icon: Coins, 
    time: "5-15分",
    brands: ["ETH"],
    color: "bg-purple-500"
  },
  { 
    id: "paypay", 
    name: "PayPay", 
    nameEn: "PayPay",
    icon: Smartphone, 
    time: "即時",
    brands: ["PayPay"],
    color: "bg-red-500"
  },
  { 
    id: "ewallet", 
    name: "電子マネー", 
    nameEn: "E-Wallet",
    icon: Wallet, 
    time: "即時",
    brands: ["ecoPayz", "STICPAY"],
    color: "bg-cyan-500"
  },
];

export function PaymentsSection() {
  return (
    <section id="payments" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">💳</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              <span className="text-foreground">入出金</span>
              <span className="text-gradient-gold">方法</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            多様な決済方法でスムーズな入出金を実現
          </p>
        </div>

        {/* Payment methods grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paymentMethods.map((method) => (
            <PaymentCard key={method.id} method={method} />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="bg-card border border-gold/30 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">安全な取引</h4>
                <p className="text-sm text-muted-foreground">256-bit SSL暗号化</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-red rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">迅速な処理</h4>
                <p className="text-sm text-muted-foreground">24時間以内に出金</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-royal rounded-xl flex items-center justify-center flex-shrink-0">
                <Check className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">手数料無料</h4>
                <p className="text-sm text-muted-foreground">多くのカジノで無料</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaymentCard({ method }: { method: typeof paymentMethods[0] }) {
  const Icon = method.icon;
  
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:border-gold/50 transition-all hover:shadow-gold/20 hover:shadow-lg">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <Icon className="h-7 w-7 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-bold text-foreground mb-1">{method.name}</h3>
          <p className="text-xs text-muted-foreground mb-3">{method.nameEn}</p>
          
          {/* Processing time */}
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-gold">{method.time}</span>
          </div>

          {/* Brands */}
          <div className="flex flex-wrap gap-2">
            {method.brands.map((brand) => (
              <span 
                key={brand} 
                className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
