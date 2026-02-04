import { useState } from "react";
import { Calculator, Info, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export function CalculatorSection() {
  const [depositAmount, setDepositAmount] = useState(10000);
  const [bonusPercent, setBonusPercent] = useState(100);
  const [wageringRequirement, setWageringRequirement] = useState(30);

  const bonusAmount = (depositAmount * bonusPercent) / 100;
  const totalPlayable = depositAmount + bonusAmount;
  const totalWagering = bonusAmount * wageringRequirement;

  return (
    <section id="calculator" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-4xl">🧮</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              <span className="text-foreground">ボーナス</span>
              <span className="text-gradient-gold">計算機</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            入金額とボーナス条件を入力して、実際のプレイ資金を計算しましょう
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator inputs */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-foreground mb-6 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-gold" />
                計算条件を入力
              </h3>

              {/* Deposit amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  入金額
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">¥</span>
                  <Input
                    type="number"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="pl-8 text-lg font-bold"
                    min={1000}
                    max={1000000}
                  />
                </div>
                <Slider
                  value={[depositAmount]}
                  onValueChange={(value) => setDepositAmount(value[0])}
                  min={1000}
                  max={100000}
                  step={1000}
                  className="mt-3"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>¥1,000</span>
                  <span>¥100,000</span>
                </div>
              </div>

              {/* Bonus percent */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  ボーナス率
                </label>
                <div className="flex items-center gap-3">
                  <Input
                    type="number"
                    value={bonusPercent}
                    onChange={(e) => setBonusPercent(Number(e.target.value))}
                    className="text-lg font-bold"
                    min={0}
                    max={500}
                  />
                  <span className="text-lg font-bold text-foreground">%</span>
                </div>
                <Slider
                  value={[bonusPercent]}
                  onValueChange={(value) => setBonusPercent(value[0])}
                  min={0}
                  max={300}
                  step={10}
                  className="mt-3"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0%</span>
                  <span>300%</span>
                </div>
              </div>

              {/* Wagering requirement */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                  賭け条件
                  <Info className="h-4 w-4 text-muted-foreground" />
                </label>
                <div className="flex items-center gap-3">
                  <Input
                    type="number"
                    value={wageringRequirement}
                    onChange={(e) => setWageringRequirement(Number(e.target.value))}
                    className="text-lg font-bold"
                    min={1}
                    max={100}
                  />
                  <span className="text-lg font-bold text-foreground">倍</span>
                </div>
                <Slider
                  value={[wageringRequirement]}
                  onValueChange={(value) => setWageringRequirement(value[0])}
                  min={1}
                  max={60}
                  step={1}
                  className="mt-3"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1倍</span>
                  <span>60倍</span>
                </div>
              </div>

              {/* Quick presets */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">よくある条件:</span>
                {[
                  { label: "100% / 30x", bonus: 100, wager: 30 },
                  { label: "200% / 40x", bonus: 200, wager: 40 },
                  { label: "150% / 35x", bonus: 150, wager: 35 },
                ].map((preset) => (
                  <Button
                    key={preset.label}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => {
                      setBonusPercent(preset.bonus);
                      setWageringRequirement(preset.wager);
                    }}
                  >
                    {preset.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-dark border border-gold/30 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-10 rounded-full blur-2xl" />
              <Sparkles className="absolute top-4 right-4 h-6 w-6 text-gold/30 animate-pulse" />

              <h3 className="font-bold text-primary-foreground mb-6 flex items-center gap-2">
                <span className="text-2xl">💰</span>
                計算結果
              </h3>

              {/* Results display */}
              <div className="space-y-4 relative z-10">
                {/* Deposit */}
                <div className="flex justify-between items-center py-3 border-b border-gold/20">
                  <span className="text-primary-foreground/70">入金額</span>
                  <span className="text-xl font-bold text-primary-foreground">
                    ¥{depositAmount.toLocaleString()}
                  </span>
                </div>

                {/* Bonus */}
                <div className="flex justify-between items-center py-3 border-b border-gold/20">
                  <span className="text-primary-foreground/70">ボーナス額</span>
                  <span className="text-xl font-bold text-gold">
                    +¥{bonusAmount.toLocaleString()}
                  </span>
                </div>

                {/* Total playable */}
                <div className="flex justify-between items-center py-4 bg-gold/10 rounded-xl px-4 -mx-4">
                  <span className="text-primary-foreground font-medium">合計プレイ資金</span>
                  <span className="text-2xl font-bold text-gradient-gold">
                    ¥{totalPlayable.toLocaleString()}
                  </span>
                </div>

                {/* Wagering requirement */}
                <div className="bg-card/20 rounded-xl p-4 mt-4">
                  <p className="text-sm text-primary-foreground/70 mb-2">出金に必要な賭け金額:</p>
                  <p className="text-xl font-bold text-primary-foreground">
                    ¥{totalWagering.toLocaleString()}
                  </p>
                  <p className="text-xs text-primary-foreground/50 mt-2">
                    ボーナス額 ¥{bonusAmount.toLocaleString()} × {wageringRequirement}倍
                  </p>
                </div>
              </div>

              <Button className="w-full mt-6 bg-gradient-gold text-secondary-foreground font-bold">
                おすすめカジノを見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
