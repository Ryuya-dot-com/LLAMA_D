const LLAMA_D_AUDIO = [
  "assets/84d8298144832b16abd3.mp3",
  "assets/3e0df028cc089d6c4b55.mp3",
  "assets/a63e83b0502e0a6305ea.mp3",
  "assets/2c0a91b68a28be113a3f.mp3",
  "assets/619c4ee399277c07436c.mp3",
  "assets/894d7111ed244453bb11.mp3",
  "assets/d216711fd8d226b1392a.mp3",
  "assets/1da62b1119760687745d.mp3",
  "assets/2181859d50bac61e1252.mp3",
  "assets/78be272a19dd2c717a64.mp3",
  "assets/619c4ee399277c07436c.mp3",
  "assets/17e20f6923f553f33470.mp3",
  "assets/84d8298144832b16abd3.mp3",
  "assets/e7beb4c9772fafeb47da.mp3",
  "assets/3e0df028cc089d6c4b55.mp3",
  "assets/a63e83b0502e0a6305ea.mp3",
  "assets/b9fcf302a4082af2752a.mp3",
  "assets/2c0a91b68a28be113a3f.mp3",
  "assets/aa0be65933daa44d3706.mp3",
  "assets/a64484a3e250c586067d.mp3",
  "assets/894d7111ed244453bb11.mp3",
  "assets/2bd9a371282415f44ce7.mp3",
  "assets/a6aff490dd24fe50aee2.mp3",
  "assets/d216711fd8d226b1392a.mp3",
  "assets/1da62b1119760687745d.mp3",
  "assets/34ffb830cd87b79ec787.mp3",
  "assets/2181859d50bac61e1252.mp3",
  "assets/dea5b99b53014f8dfe56.mp3",
  "assets/78be272a19dd2c717a64.mp3",
  "assets/bff9a97da7bdf8424cb6.mp3",
  "assets/6acb4d1743c1f7227c5e.mp3",
  "assets/84d8298144832b16abd3.mp3",
  "assets/eedb49d6937f9628dc08.mp3",
  "assets/a63e83b0502e0a6305ea.mp3",
  "assets/3e0df028cc089d6c4b55.mp3",
  "assets/2c0a91b68a28be113a3f.mp3",
  "assets/22823eeb74373936e342.mp3",
  "assets/db8e3d36450a808a268e.mp3",
  "assets/619c4ee399277c07436c.mp3",
  "assets/fa96cdae367f46ad0cb5.mp3",
  "assets/78be272a19dd2c717a64.mp3",
  "assets/cb143b5b8f1c6215f87d.mp3",
  "assets/1da62b1119760687745d.mp3",
  "assets/d216711fd8d226b1392a.mp3",
  "assets/9cc60e8f4912417ab315.mp3",
  "assets/b575683773db3355a517.mp3",
  "assets/894d7111ed244453bb11.mp3",
  "assets/b723b091a3f9dfcce233.mp3",
  "assets/2181859d50bac61e1252.mp3",
  "assets/b4e05593577186544d12.mp3"
];

const LLAMA_D_KEY = [
  "N", "N", "N", "N", "N", "N", "N", "N", "N", "N",
  "R", "N", "R", "N", "R", "R", "N", "R", "N", "N",
  "R", "N", "N", "R", "R", "N", "R", "N", "R", "N",
  "N", "R", "N", "R", "R", "R", "N", "N", "R", "N",
  "R", "N", "R", "R", "N", "N", "R", "N", "R", "N"
];

window.LLAMA_LOCAL_CONFIG = {
  testCode: "LLAMA_D",
  displayTitle: "LLAMA D",
  version: "4.0.6",
  officialUrl: "https://www.llamatests.org/tests/LLAMA_D.html",
  assetBase: "https://www.llamatests.org/",
  soundcheck: {
    src: "assets/4ded55c5eb881b445a42.mp3"
  },
  i18n: {
    ja: {
      intro: [
        "LLAMA D は、新しい言語の語をどれくらい認識できるかを調べるテストです。",
        "このテストでは音声を使います。スピーカーまたはヘッドホンの音量を確認してください。",
        "50 個の語が順に再生されます。それぞれについて、新しい語か、すでに聞いた語かを判断します。",
        "最初の 10 項目は練習で、得点には入りません。"
      ],
      result_description: "LLAMA_D は、新しい言語の語をどれくらい認識できるかを調べるテストです。最初の 10 項目は練習として記録し、40 点満点で採点します。",
      footer: "参照元: LLAMA D 4.0.6 2025-02-25, Swansea University。ローカル実験用の再実装です。"
    },
    en: {
      intro: [
        "LLAMA D tests how good you are at recognising words in a new language.",
        "This test uses sound, so make sure your speaker or headphones are turned up.",
        "The program plays a sequence of 50 words. For each word, decide whether it is new or one you have already heard.",
        "The first 10 items are practice and are not included in the score."
      ],
      result_description: "LLAMA_D tests how good you are at recognising words in a new language. The first 10 items are recorded as practice, and the score is out of 40.",
      footer: "Source model: LLAMA D 4.0.6 2025-02-25, Swansea University. Local implementation for offline-style data collection."
    }
  },
  test: {
    mode: "newRepeat",
    items: LLAMA_D_AUDIO.map((src, index) => ({
      id: `Q${String(index + 1).padStart(2, "0")}`,
      prompt: `Word ${String(index + 1).padStart(2, "0")}`,
      src,
      correct: LLAMA_D_KEY[index],
      correctText: LLAMA_D_KEY[index] === "N" ? "new" : "repeated",
      scored: index >= 10,
      maxScore: index >= 10 ? 1 : 0
    }))
  }
};
