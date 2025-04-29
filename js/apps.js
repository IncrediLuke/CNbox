// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)

versions.v1 = {
  name: "Pecadoras",
  version: "Version01",
  date: "2025",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 8720,
  bpm: 110,
  totalframe: 418,
  nbpolo: 7,
  bonusloopA: true, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#000",
  col0: "#919191",
  col1: "#5f5f5f",
  col2: "#4b4b4b",
  col3: "#373737",
  col4: "#232323",
  animearray: [
    {
      name: "1_kick",
      color: "7D7D7D",
      uniqsnd: !0, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "2_klap",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "3_krrr",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "4_shoukou",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "5_tehte",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "6_bass",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "7_tik",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "8_dugudugu",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "9_perc",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "10_cha",
      color: "7D7D7D",
      uniqsnd: !1,
    },
    {
      name: "11_bitbox",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "12_harlie",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "13_guidar",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "14_houh",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "15_arp",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "16_sinner",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "17_runaway",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "18_waya",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "19_oooh",
      color: "7D7D7D",
      uniqsnd: !0,
    },
    {
      name: "20_ooo",
      color: "7D7D7D",
      uniqsnd: !0,
    },
  ],
  bonusarray: [
    {
      name: "Sin",
      src: "b1-v1-sin-hb",
      code: "1,4,8,14,17",
      sound: "bonus-sin",
      aspire: "aspire-sin",
      loop: 2, // ← Every bonus have its own loops in this version
    },
    {
      name: "Venom",
      src: "b2-v1-venom-hb",
      code: "1,2,6,15,19",
      sound: "bonus-venom",
      aspire: "aspire-venom",
      loop: 2, // ← Every bonus have its own loops in this version
    },
    {
      name: "Saint",
      src: "b3-v1-saint-hb",
      code: "1,4,6,13,18",
      sound: "bonus-saint",
      aspire: "aspire-saint",
      loop: 2, // ← Every bonus have its own loops in this version
    },
    
  ],   
  
}
versions.v2 = {
  name: "Chords",
  version: "Version02",
  date: "2025",
  folder: "asset-v2/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 6620,
  bpm: 145,
  totalframe: 316,
  nbpolo: 7,
  bonusloopA: true, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#2B2B5B",
  col0: "#5baad0",
  col1: "#546eca",
  col2: "#33479b",
  col3: "#33479b",
  col4: "#33479b",
  animearray: [
    {
      name: "1_kick",
      color: "546eca",
      uniqsnd: !0, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "2_snare",
      color: "546eca",
      uniqsnd: !0,
    },
    {
      name: "3_hatter",
      color: "546eca",
      uniqsnd: !0,
    },
    {
      name: "4_klikoka",
      color: "546eca",
      uniqsnd: !0,
    },
    {
      name: "5_tombreak",
      color: "546eca",
      uniqsnd: !1,
    },
    {
      name: "6_bass",
      color: "569c56",
      uniqsnd: !0,
    },
    {
      name: "7_souffle",
      color: "569c56",
      uniqsnd: !0,
    },
    {
      name: "8_doum",
      color: "569c56",
      uniqsnd: !0,
    },
    {
      name: "9_fff",
      color: "569c56",
      uniqsnd: !1,
    },
    {
      name: "10_tromp",
      color: "569c56",
      uniqsnd: !0,
    },
    {
      name: "11_wapa",
      color: "d33f3f",
      uniqsnd: !0,
    },
    {
      name: "12_arpegg",
      color: "d33f3f",
      uniqsnd: !0,
    },
    {
      name: "13_bobpa",
      color: "d33f3f",
      uniqsnd: !0,
    },
    {
      name: "14_math",
      color: "d33f3f",
      uniqsnd: !1,
    },
    {
      name: "15_chords",
      color: "d33f3f",
      uniqsnd: !0,
    },
    {
      name: "16_ooh",
      color: "ef8d53",
      uniqsnd: !1,
    },
    {
      name: "17_follow",
      color: "ef8d53",
      uniqsnd: !1,
    },
    {
      name: "18_chor",
      color: "ef8d53",
      uniqsnd: !0,
    },
    {
      name: "19_yeah",
      color: "ef8d53",
      uniqsnd: !0,
    },
    {
      name: "20_fly",
      color: "ef8d53",
      uniqsnd: !0,
    },
  ],
  bonusarray: [
  ],
};
// versions.v2 = {
//  name: "Chords",
// version: "2",
// date: "2025",
// ...