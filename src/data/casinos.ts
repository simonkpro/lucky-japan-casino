export interface Casino {
  id: number;
  name: string;
  nameJp: string;
  rating: number;
  bonus: {
    welcome: string;
    noDeposit?: string;
    freeSpins?: number;
  };
  paymentMethods: string[];
  pros: string[];
  cons: string[];
  games: {
    slots: number;
    liveGames: number;
    tableGames: number;
  };
  providers: string[];
  mobile: {
    ios: boolean;
    android: boolean;
    responsive: boolean;
  };
  security: {
    license: string;
    encryption: string;
    established: number;
  };
  features: string[];
}

export const casinos: Casino[] = [
  {
    id: 1,
    name: "Lucky Dragon Casino",
    nameJp: "ラッキードラゴンカジノ",
    rating: 9.8,
    bonus: {
      welcome: "最大¥200,000 + 200フリースピン",
      noDeposit: "¥5,000",
      freeSpins: 200,
    },
    paymentMethods: ["クレジットカード", "銀行振込", "ビットコイン", "イーサリアム", "PayPay"],
    pros: ["豊富なボーナス", "24時間日本語サポート", "高速出金", "VIPプログラム充実"],
    cons: ["一部ゲーム制限あり", "出金手数料"],
    games: { slots: 3500, liveGames: 200, tableGames: 150 },
    providers: ["NetEnt", "Microgaming", "Play'n GO", "Evolution Gaming"],
    mobile: { ios: true, android: true, responsive: true },
    security: { license: "マルタ MGA", encryption: "256-bit SSL", established: 2018 },
    features: ["ライブカジノ", "スポーツベット", "VIPプログラム"],
  },
  {
    id: 2,
    name: "Sakura Casino",
    nameJp: "サクラカジノ",
    rating: 9.6,
    bonus: {
      welcome: "最大¥150,000 + 100フリースピン",
      noDeposit: "¥3,000",
      freeSpins: 100,
    },
    paymentMethods: ["クレジットカード", "銀行振込", "仮想通貨", "電子マネー"],
    pros: ["日本向けボーナス", "即時出金対応", "豊富なスロット"],
    cons: ["ライブカジノ少なめ", "週末サポート遅延"],
    games: { slots: 2800, liveGames: 150, tableGames: 100 },
    providers: ["Pragmatic Play", "Red Tiger", "Yggdrasil"],
    mobile: { ios: true, android: true, responsive: true },
    security: { license: "キュラソー", encryption: "256-bit SSL", established: 2019 },
    features: ["パチスロ風ゲーム", "トーナメント"],
  },
  {
    id: 3,
    name: "Golden Koi Casino",
    nameJp: "ゴールデン鯉カジノ",
    rating: 9.5,
    bonus: {
      welcome: "最大¥300,000",
      freeSpins: 150,
    },
    paymentMethods: ["クレジットカード", "ビットコイン", "銀行振込", "STICPAY"],
    pros: ["高額ボーナス", "仮想通貨対応", "豪華VIP特典"],
    cons: ["出金条件やや厳しめ", "一部国制限"],
    games: { slots: 4000, liveGames: 250, tableGames: 180 },
    providers: ["Evolution Gaming", "NetEnt", "Playtech"],
    mobile: { ios: true, android: true, responsive: true },
    security: { license: "マルタ MGA", encryption: "256-bit SSL", established: 2017 },
    features: ["ハイローラー向け", "専属VIPマネージャー"],
  },
  {
    id: 4,
    name: "Maneki Casino",
    nameJp: "招き猫カジノ",
    rating: 9.3,
    bonus: {
      welcome: "最大¥100,000 + 50フリースピン",
      noDeposit: "¥2,000",
      freeSpins: 50,
    },
    paymentMethods: ["クレジットカード", "銀行振込", "エコペイズ"],
    pros: ["入金不要ボーナス", "初心者向け", "丁寧なサポート"],
    cons: ["ゲーム数やや少なめ", "出金制限"],
    games: { slots: 2000, liveGames: 100, tableGames: 80 },
    providers: ["Microgaming", "Betsoft", "iSoftBet"],
    mobile: { ios: true, android: false, responsive: true },
    security: { license: "キュラソー", encryption: "128-bit SSL", established: 2020 },
    features: ["初心者ガイド", "デイリーボーナス"],
  },
  {
    id: 5,
    name: "Rising Sun Casino",
    nameJp: "ライジングサンカジノ",
    rating: 9.2,
    bonus: {
      welcome: "最大¥250,000 + 300フリースピン",
      freeSpins: 300,
    },
    paymentMethods: ["クレジットカード", "仮想通貨", "銀行振込", "MuchBetter"],
    pros: ["フリースピン多数", "豊富な決済方法", "毎日プロモ"],
    cons: ["賭け条件40倍", "一部ボーナス除外ゲーム"],
    games: { slots: 3200, liveGames: 180, tableGames: 120 },
    providers: ["Play'n GO", "Quickspin", "Thunderkick"],
    mobile: { ios: true, android: true, responsive: true },
    security: { license: "マルタ MGA", encryption: "256-bit SSL", established: 2016 },
    features: ["トーナメント", "キャッシュバック"],
  },
  {
    id: 6,
    name: "Shogun Casino",
    nameJp: "将軍カジノ",
    rating: 9.0,
    bonus: {
      welcome: "最大¥180,000",
      noDeposit: "¥4,000",
      freeSpins: 80,
    },
    paymentMethods: ["クレジットカード", "銀行振込", "ビットコイン", "ライトコイン"],
    pros: ["和風デザイン", "日本人ディーラー", "高速登録"],
    cons: ["プロモ少なめ", "週末混雑"],
    games: { slots: 2500, liveGames: 220, tableGames: 100 },
    providers: ["Evolution Gaming", "Pragmatic Play Live"],
    mobile: { ios: true, android: true, responsive: true },
    security: { license: "ジブラルタル", encryption: "256-bit SSL", established: 2018 },
    features: ["日本人ライブディーラー", "バカラ特化"],
  },
  {
    id: 7,
    name: "Fortune Temple",
    nameJp: "フォーチュン寺院",
    rating: 8.9,
    bonus: {
      welcome: "最大¥120,000 + 100フリースピン",
      freeSpins: 100,
    },
    paymentMethods: ["クレジットカード", "銀行振込", "仮想通貨"],
    pros: ["ユニークなテーマ", "毎週キャッシュバック", "ロイヤリティポイント"],
    cons: ["出金時間やや長め", "サポート返信遅延"],
    games: { slots: 2200, liveGames: 130, tableGames: 90 },
    providers: ["NetEnt", "Microgaming", "ELK Studios"],
    mobile: { ios: true, android: true, responsive: true },
    security: { license: "キュラソー", encryption: "256-bit SSL", established: 2019 },
    features: ["ロイヤリティプログラム", "スロット特化"],
  },
  {
    id: 8,
    name: "Ninja Casino",
    nameJp: "忍者カジノ",
    rating: 8.7,
    bonus: {
      welcome: "最大¥80,000 + 50フリースピン",
      noDeposit: "¥1,500",
      freeSpins: 50,
    },
    paymentMethods: ["クレジットカード", "銀行振込", "PayPay"],
    pros: ["即時登録", "シンプルUI", "低額から遊べる"],
    cons: ["ボーナス額控えめ", "VIP特典少なめ"],
    games: { slots: 1800, liveGames: 80, tableGames: 60 },
    providers: ["Yggdrasil", "Push Gaming", "Relax Gaming"],
    mobile: { ios: true, android: true, responsive: true },
    security: { license: "キュラソー", encryption: "128-bit SSL", established: 2021 },
    features: ["初心者向け", "少額入金対応"],
  },
  {
    id: 9,
    name: "Emperor Palace",
    nameJp: "エンペラーパレス",
    rating: 8.5,
    bonus: {
      welcome: "最大¥500,000",
      freeSpins: 200,
    },
    paymentMethods: ["クレジットカード", "銀行振込", "仮想通貨", "電子マネー"],
    pros: ["超高額ボーナス", "VIP専用テーブル", "プライベートサポート"],
    cons: ["高額入金必須", "一般プレイヤー特典少なめ"],
    games: { slots: 5000, liveGames: 300, tableGames: 200 },
    providers: ["Evolution Gaming", "Playtech", "Pragmatic Play"],
    mobile: { ios: true, android: true, responsive: true },
    security: { license: "マルタ MGA", encryption: "256-bit SSL", established: 2015 },
    features: ["ハイローラー専用", "専属マネージャー", "招待制イベント"],
  },
  {
    id: 10,
    name: "Zen Garden Casino",
    nameJp: "禅ガーデンカジノ",
    rating: 8.3,
    bonus: {
      welcome: "最大¥60,000 + 30フリースピン",
      noDeposit: "¥1,000",
      freeSpins: 30,
    },
    paymentMethods: ["クレジットカード", "銀行振込"],
    pros: ["落ち着いたデザイン", "シンプルな操作", "安心のライセンス"],
    cons: ["ゲーム数少なめ", "プロモーション限定的"],
    games: { slots: 1500, liveGames: 60, tableGames: 50 },
    providers: ["NetEnt", "Microgaming"],
    mobile: { ios: true, android: true, responsive: true },
    security: { license: "マルタ MGA", encryption: "256-bit SSL", established: 2020 },
    features: ["リラックス志向", "ストレスフリー設計"],
  },
];

export const paymentMethods = [
  { id: "credit", name: "クレジットカード", icon: "CreditCard", time: "即時" },
  { id: "bank", name: "銀行振込", icon: "Building", time: "1-3営業日" },
  { id: "bitcoin", name: "ビットコイン", icon: "Bitcoin", time: "10-30分" },
  { id: "ethereum", name: "イーサリアム", icon: "Coins", time: "5-15分" },
  { id: "paypay", name: "PayPay", icon: "Smartphone", time: "即時" },
  { id: "ecopays", name: "エコペイズ", icon: "Wallet", time: "即時" },
];

export const gameCategories = [
  { id: "slots", name: "スロット", icon: "Sparkles", count: 5000 },
  { id: "live", name: "ライブカジノ", icon: "Video", count: 500 },
  { id: "table", name: "テーブルゲーム", icon: "Dices", count: 300 },
  { id: "jackpot", name: "ジャックポット", icon: "Trophy", count: 150 },
  { id: "poker", name: "ポーカー", icon: "Spade", count: 100 },
  { id: "sports", name: "スポーツベット", icon: "Goal", count: 1000 },
];

export const providers = [
  "NetEnt", "Microgaming", "Play'n GO", "Evolution Gaming",
  "Pragmatic Play", "Yggdrasil", "Red Tiger", "Playtech",
  "Quickspin", "Thunderkick", "Betsoft", "iSoftBet"
];

export const faqItems = [
  {
    question: "オンラインカジノは日本で合法ですか？",
    answer: "日本国内での運営は規制されていますが、海外で合法的にライセンスを取得したオンラインカジノにアクセスすることは、現在のところグレーゾーンとされています。必ず信頼できるライセンスを持つカジノを選びましょう。"
  },
  {
    question: "入金・出金にはどのような方法がありますか？",
    answer: "クレジットカード、銀行振込、仮想通貨（ビットコイン、イーサリアム）、電子マネー（PayPay、エコペイズ）など、多様な決済方法に対応しています。カジノによって対応方法が異なりますので、事前にご確認ください。"
  },
  {
    question: "ボーナスの賭け条件とは何ですか？",
    answer: "ボーナスを出金するために必要な賭け金額の倍率です。例えば、¥10,000のボーナスに30倍の賭け条件がある場合、¥300,000分のベットが必要となります。条件はカジノやボーナスによって異なります。"
  },
  {
    question: "どのカジノが最も安全ですか？",
    answer: "マルタMGA、ジブラルタル、キュラソーなどの信頼できるライセンスを持ち、SSL暗号化を採用しているカジノを選ぶことをお勧めします。当サイトでは全て審査済みのカジノのみをご紹介しています。"
  },
  {
    question: "モバイルでプレイできますか？",
    answer: "はい、ほとんどのオンラインカジノはスマートフォンやタブレットに対応しています。専用アプリを提供するカジノもあれば、ブラウザから直接プレイできるレスポンシブ対応のカジノもあります。"
  },
  {
    question: "初心者におすすめのゲームは？",
    answer: "スロットは操作が簡単で初心者に最適です。ライブカジノではバカラやルーレットが人気で、ルールもシンプルです。まずは少額から始めて、ゲームの流れを掴むことをお勧めします。"
  },
];
