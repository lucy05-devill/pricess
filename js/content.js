/* ============ APNE MESSAGES YAHAN BADLO ============
   Website ka har shabd is file se aata hai. */
const VOW = "Ye apka dost hamesha apke sath khada hai chinta mat karna kabhi bhi 😊";
const VOW2 = "Kabhi apne is dost ka sath mat chhodna 🤍";

const T = {
  her: "Ashi",
  from: "Tumhara biggest fan 👑",

  gate: {
    h: "Princess Ashi",
    p: ["Meri priye Devi ji,", "Happy National Princess Day! ✨",
        "Tumhare liye ek shahi surprise taiyaar hai.",
        "Isme tumhari photos hain, kuch meethi baatein, aur kuch royal surprises. Araam se scroll karna, har button dabana, aur kuch bhi skip mat karna. 💗"],
    btn: "Shahi Surprise Kholo 👑"
  },

  ch: [
    ["Shahi Nimantran", "Yahan se shuru karo"],
    ["Princess Ki Pehchaan", "Wo cheezein jo tumhe princess banati hain"],
    ["Royal Photo Gallery", "Kisi bhi photo par tap karke bada dekho"],
    ["Shahi Chitthiyaan", "Har envelope par ek shahi muhar hai"],
    ["Royal Surprises", "Har button dabana, sabke peeche kuch hai"],
    ["Shahi Bhoj", "Devi ji ke liye special thali"],
    ["Taj Poshi", "Bas ek aakhri cheez"]
  ],

  guide: ["👆 Kisi bhi photo par tap karo, wo full-screen khulegi", "💌 Pink glow wale buttons dabakar notes kholo", "🌸 Upar ka royal garden dekhna: har note padhne par ek phool khilega", "👑 Saare notes padhoge, tabhi taj poshi hogi"],

  notes: {
    welcome: { btn: "Ye Shahi Note Padho 💌", t: "Meri priye Devi ji,", b: [
      "Aaj National Princess Day hai, aur is din par tumse zyada haq shayad hi kisi ka banta ho. 👑",
      "Isliye ek royal scrapbook banaya hai, sirf tumhare liye. Har photo, har note aur har surprise ek princess ke layak hai.",
      "Toh taj sambhalo, araam se baitho, aur sab kuch dhyaan se padho. ♡" ] },

    tiny1: { btn: "Ek Shahi Baat 👑", b: [
      "Asli princess wo nahi jiske paas taj ho. Asli princess wo hai jiski smile se saamne wale ka din ban jaaye. Aur tumhari smile bilkul waisi hi hai. 🌷" ] },
    tiny2: { btn: "Ek Aur Royal Baat ✨", b: [
      "Aur wo funny faces? Wo royal secret hain: sirf asli princess hi itni cute aur itni funny ek saath ho sakti hai. 😄" ] },

    surprise: { btn: "Ek Royal Surprise ✨", b: [
      "Shahi photographer (yaani main) ke liye sabse mushkil kaam tha photos chunna. Har ek \"best\" lagti thi.",
      "Isliye bas wahi chuni jo dil ko sabse zyada pasand aayi. 😄" ] },
    memory: { btn: "Agli Shahi Yaad 💗", b: [
      "Kuch photos masti wali hain, kuch shaant aur dreamy.",
      "Har photo mein tum bilkul ek princess lagti ho. 💫" ] },
    little: { btn: "Chhoti Princess Ke Baare Mein 🧸", b: [
      "Us chhoti si princess ko dekho. Taj nahi tha, par chamak bilkul waisi hi thi.",
      "Aur aaj bhi wahi sparkle tumhari aankhon mein hai. ♡" ] },

    l1: { btn: "Shahi Letter Kholo 💌", sub: "Jab din thoda heavy lage", t: "Jab din thoda heavy lage", b: [
      "Meri priye Devi ji,",
      "Kabhi din bhaari lage, to yaad rakhna: princess bhi thakti hai, aur wo bilkul theek hai.",
      "Sab kuch perfect karna zaroori nahi hai. Apni speed se chalo, apna taj seedha rakho, aur khud par thoda soft rehna.",
      "Tum jitna sochti ho, usse kahin zyada achha kar rahi ho. ♡" ] },
    l2: { btn: "Shahi Letter Kholo 💌", sub: "Tumhari smile ke baare mein", t: "Tumhari smile ke baare mein", b: [
      "Meri priye Devi ji,",
      "Tumhari smile pehle aankhon mein aati hai, phir poore chehre par phailti hai. Aur dekhne wale ka din apne aap achha ho jaata hai.",
      "Isliye ise kabhi chhupana mat. Ye tumhara sabse khoobsurat taj hai. 🌸" ] },
    l3: { btn: "Shahi Letter Kholo 💌", sub: "Bas itna jaan lo", t: "Bas itna jaan lo", b: [
      "Meri priye Devi ji,",
      "Aaj ka din tumhare naam hai.",
      "Jaisi ho, waisi hi sabse achhi lagti ho: thodi filmy, thodi masti wali, aur poori tarah apni. Taj ho ya na ho, tum kisi princess se kam nahi ho. ✨" ] },

    bhoj: { btn: "Shahi Bhoj Ka Nimantran 🍽️", b: [
      "Dekho Devi ji ke liye kya kya saja hai: rajma chawal, chole bhature, garma garam momos, rasmalai, burger-pizza aur ek thanda glass lassi.",
      "Sab kuch sirf tumhare liye. Bas ek shart hai: sabse pehle rasmalai Devi ji khayengi. 😄🍮" ] },

    c1: { btn: "Ruko, Abhi Mat Jao! 🥺", b: ["Royal order: is page ko poora padhe bina jaana mana hai. 😄👑"] },
    c2: { btn: "Ek Compliment Sirf Tumhare Liye ✨", b: ["Tumhari aankhein. Sach mein. Har photo mein aadhi baat to wahi kar deti hain."] },
    c3: { btn: "Muskurate Hue Kholo 😊", b: ["Smile aayi?", "Toh royal mission successful. 👑"] },
    c4: { btn: "Ek Shahi Raaz 🤫", b: ["Jisme tum jeebh nikaal rahi ho, wo meri favourite photos mein se ek hai. Royal maafi mil sakti hai? 😜"] },
    c5: { btn: "Ek Royal Wish 🌠", b: ["Tumhe bohot saare achhe din milein, achha khana, achhe gaane, aur wahi log jo tumhare saath ke sach mein kaabil hon. ♡"] },

    final: { btn: "Taj Poshi Shuru Karo 👑", t: "Shahi Farmaan", b: [
      "Meri priye Devi ji,",
      "Aaj, National Princess Day par, ye poora scrapbook bas ek hi baat kehne ke liye bana hai: tum important ho, tum special ho, aur tumhari smile kisi ke bhi din ko roshan kar sakti hai.",
      "Taj pehno ya na pehno, tum khud ek poori royal ho. Apni hansi rakhna, apni baat rakhna, aur khud ko kabhi kam mat samajhna.",
      "★" + VOW,
      "★" + VOW2,
      "Tumhare saare din khoobsurat hon: dher saari muskaan, achhe gaane, aur dil se hansne ke bahaane.",
      "Hamesha tumhare saath,"] }
  }
};
