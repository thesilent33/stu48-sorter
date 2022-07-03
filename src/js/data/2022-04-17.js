dataSetVersion = "2021-04-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
// dataSetVersion = "2022-07-02"
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Generation",
    key: "generation",
    tooltip: "Check this to restrict to certain generation",
    checked: false,
    sub: [
		{ name: "1st Generation", tooltip: "1st Generation members", key: "1st-gen" },
		{ name: "3rd Draft", tooltip: "3rd Draft members", key: "3rd-draft" },
		{ name: "2nd Generation", tooltip: "2nd Generation members", key: "2nd-gen" },
		{ name: "New Wave Project", tooltip: "New Wave Project members", key: "new-wave-project" }
    ]
  },
  {
    name: "Filter by Sub Unit",
    key: "sub_unit",
    tooltip: "Check this to restrict to certain sub unit",
    checked: false,
    sub: [
		{ name: "Katte ni! Shikoku Kanko Taishi", tooltip: "Katte ni! Shikoku Kanko Taishi", key: "katte_ni_shikoku_kanko_taishi" },
		// { name: "Katte ni! Shikoku Kanko Guide", tooltip: "Katte ni! Shikoku Kanko Guide", key: "katte_ni_shikoku_kanko_guide" },
		{ name: "STUDIO", tooltip: "STUDIO", key: "STUDIO" },
		{ name: "mini STUDIO", tooltip: "mini STUDIO", key: "mini_STUDIO" },
		{ name: "MiKER!", tooltip: "MiKER!", key: "miker" },
		{ name: "pin MiKER!", tooltip: "pin MiKER!", key: "pin_miker" },
		{ name: "Aoi Himawari", tooltip: "Aoi Himawari", key: "aoi_himawari" },
		{ name: "Setouchi PR Unit (Season 1)", tooltip: "Setouchi PR Unit (Season 1)", key: "setouchi_pr_1" },
		{ name: "Setouchi PR Unit (Season 2)", tooltip: "Setouchi PR Unit (Season 2)", key: "setouchi_pr_1" },
		{ name: "Charming Trip", tooltip: "Charming Trip", key: "charming_trip" },
		{ name: "Little Charming Trip", tooltip: "Little Charming Trip", key: "little_charming_trip" },
		{ name: "Seto7", tooltip: "Seto7", key: "seto7" },
		{ name: "Setomaiku", tooltip: "Setomaiku", key: "setomaiku" },
		{ name: "Nona Diamonds", tooltip: "Nona Diamonds", key: "nona_diamonds" },
		{ name: "CGB41", tooltip: "CGB41", key: "cgb41" }
		
    ]
  },
  {
    name: "Filter Activity Status",
    key: "activity_status",
    tooltip: "Check this to restrict members by activity status.",
    checked: true,
    sub: [
		{ name: "Active Members", tooltip: "Members who currently active in STU48", key: "active", tooltip: "Only currently active members", checked: true },
		{ name: "Former Members", tooltip: "Former members of STU48", key: "former_member", tooltip: "Former members of STU48 member(s)", checked: false }
    ]
  }
  
  /*,
	{
		name: "Filter by Single",
		key: "single",
		tooltip: "Select this to restrict to sort Singles.",
		checked: false,
		sub:
		[
			{ name: "1st - 25th Single", key: "singles" }
		]
	},
	{
		name: "Filter by Single (embed BETA)",
		key: "sembed",
		tooltip: "Select this to restric to sort Singles with song samples.",
		checked: false,
		sub:
		[
			{ name: "1st - 25th Single", key: "sembeds" }
		]
	}
	*/
	/*,
  {
    name: "Filter by Year/Single",
    key: "single",
    tooltip: "Check this to restrict to certain singles.",
    checked: false,
    sub: 
		[
      { name: "1st generation", key: "1gen" },
      { name: "2nd generation", key: "2gen" },
      { name: "3rd generation", key: "3gen" },
      { name: "4th generation", key: "4gen" },
    ]
  },
  {
    name: "Filter by Member",
    key: "indivd",
    tooltip: "Check this to restrict to certain members.",
    checked: false,
    sub: [
      { name: "Suzuki Ayane", key: "ayamine" }
    ]
  }*/
];

dataSet[dataSetVersion].characterData = [
  // 1st-gen members

  {
    name: "Ishida Chiho",
    img: "5BMk4S4/ishida-chiho.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["charming_trip","setouchi_pr_1","setouchi_pr_2","cgb41"], activity_status: ["active"]
    }
  },
  {
    name: "Ishida Minami",
    img: "TtcHFjH/ishida-minami.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["charming_trip"], activity_status: ["active"]
    }
  },
  {
    name: "Imamura Mitsuki",
    img: "gFtZYk4/imamura-mitsuki.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["STUDIO","cgb41"], activity_status: ["active"]
    }
  },
  {
    name: "Iwata Hina",
    img: "DGR00f8/iwata-hina.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["charming_trip","setouchi_pr_1","cgb41"], activity_status: ["active"]
    }
  },
  {
    name: "Kai Kokoa",
    img: "B2DKh1b/kai-kokoa.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["miker","seto7","setomaiku"], activity_status: ["active"]
    }
  },
  {
    name: "Takino Yumiko",
    img: "x3FgSw1/takino-yumiko.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["miker","seto7","setouchi_pr_1","cgb41"], activity_status: ["active"]
    }
  },
  {
    name: "Taniguchi Mahina",
    img: "Sc2JR6D/taniguchi-mahina.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi"], activity_status: ["active"]
    }
  },
  {
    name: "Hyodo Aoi",
    img: "2Pr93C8/hyodo-aoi.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi"], activity_status: ["active"]
    }
  },
  {
    name: "Fukuda Akari",
    img: "JHTvrzq/fukuda-akari.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi","setouchi_pr_1","setouchi_pr_2"], activity_status: ["active"]
    }
  },
  {
    name: "Mineyoshi Arisa",
    img: "P9yWMGV/mineyoshi-arisa.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["charming_trip","STUDIO"], activity_status: ["active"]
    }
  },
  {
    name: "Morishita Maiha",
    img: "mTbtTVm/morishita-maiha.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["STUDIO","seto7"], activity_status: ["active"]
    }
  },
  {
    name: "Yano Honoka",
    img: "m50cMQt/yano-honoka.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["miker","nona_diamonds","setomaiku"], activity_status: ["active"]
    }
  },
  
  // 3rd-draft
  {
    name: "Oki Yuuka",
    img: "DpRrB71/oki-yuka.jpg",
    opts: {
      generation: [ "3rd-draft" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi","miker","setomaiku","setouchi_pr_1","setouchi_pr_2"], activity_status: ["active"]
    }
  },
  {
    name: "Shinano Soraha",
    img: "RYdHXj2/shinano-soraha.jpg",
    opts: {
      generation: [ "3rd-draft" ],
      sub_unit: ["miker","seto7","setomaiku"], activity_status: ["active"]
    }
  },
  {
    name: "Nakamura Mai",
    img: "k30kTqf/nakamura-mai.jpg",
    opts: {
      generation: [ "3rd-draft" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi","setomaiku","setouchi_pr_2"], activity_status: ["active"]
    }
  },
  
  // 2nd-gen
  {
    name: "Ikeda Yura",
    img: "kGsC5r0/ikeda-yura.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["mini_STUDIO","nona_diamonds"], activity_status: ["active"]
    }
  },
  {
    name: "Rine Utsumi",
    img: "Xy8PN09/utsumi-rine.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["charming_trip"], activity_status: ["active"]
    }
  },
  {
    name: "Osaki Serika",
    img: "1LLSn1x/osaki-serika.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["pin_miker","setouchi_pr_2"], activity_status: ["active"]
    }
  },
  {
    name: "Kawamata Anna",
    img: "jrXjf8Q/kawamata-anna.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi"], activity_status: ["active"]
    }
  },
  {
    name: "Kawamata Yuuna",
    img: "D5J21mh/kawamata-yuuna.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["pin_miker"], activity_status: ["active"]
    }
  },
  {
    name: "Kudou Riko",
    img: "nkMXwGh/kudou-riko.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["pin_miker"], activity_status: ["active"]
    }
  },
  {
    name: "Kojima Aiko",
    img: "84CZvgy/kojima-aiko.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["mini_STUDIO"], activity_status: ["active"]
    }
  },
  {
    name: "Sako Himeka",
    img: "znXk9x8/sako-himeka.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["mini_STUDIO"], activity_status: ["active"]
    }
  },
  {
    name: "Shimizu Sara",
    img: "GQ2yPWy/shimizu-sara.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["mini_STUDIO"], activity_status: ["active"]
    }
  },
  {
    name: "Suzuki Ayaka",
    img: "hXd2yr2/suzuki-ayaka.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["mini_STUDIO"], activity_status: ["active"]
    }
  },
  {
    name: "Takao Sayaka",
    img: "G0dVGwK/takao-sayaka.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["charming_trip","setouchi_pr_2"], activity_status: ["active"]
    }
  },
  {
    name: "Taguchi Reika",
    img: "M99XLyY/Taguchi-Reika-May-2021.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["charming_trip"], activity_status: ["former_member"]
    }
  },
  {
    name: "Tanaka Miho",
    img: "Wc2rcvy/tanaka-miho.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi","pin_miker"], activity_status: ["active"]
    }
  },
  {
    name: "Harada Sayaka",
    img: "r76tbbQ/harada-sayaka.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["charming_trip"], activity_status: ["active"]
    }
  },
  {
    name: "Muneyuki Rika",
    img: "KXMVNKS/muneyuki-rika.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi"], activity_status: ["active"]
    }
  },
  {
    name: "Yoshizaki Rinko",
    img: "dkjdbpH/yoshizaki-rinko.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi","setouchi_pr_2"], activity_status: ["active"]
    }
  },
  {
    name: "Yoshida Sara",
    img: "JFyzwXh/yoshida-sara.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["charming_trip"], activity_status: ["active"]
    }
  },
  {
    name: "Rissen Momoka",
    img: "G5kvs3V/rissen-momoka.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi"], activity_status: ["active"]
    }
  },
  {
    name: "Watanabe Natsuki",
    img: "BwFF2N0/watanabe-natsuki.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["charming_trip"], activity_status: ["active"]
    }
  },
  
  
  // new-wave-project
  {
    name: "Okada Azumi",
    img: "Qr50G0B/okada-azumi.jpg",
    opts: {
      generation: [ "new-wave-project" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Okamura Rio",
    img: "3pjQRrz/okamura-rio.jpg",
    opts: {
      generation: [ "new-wave-project" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Kurushima Yuka",
    img: "JFpsZMs/kurushima-yuka.jpg",
    opts: {
      generation: [ "new-wave-project" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  {
    name: "Morokuzu Noa",
    img: "tXdZqTv/morokuzu-noa.jpg",
    opts: {
      generation: [ "new-wave-project" ],
      sub_unit: [""], activity_status: ["active"]
    }
  },
  
  
  // Former Members
  {
    name: "Kuroiwa Yui",
    img: "5MHMD39/2017-STU48-Kuroiwa-Yui.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: [""], activity_status: ["former_member"]
    }
  },
  {
    name: "Rino Sashihara",
    img: "YpzpLzq/2017-STU48-Sashihara-Rino.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: [""], activity_status: ["former_member"]
    }
  },
  {
    name: "Mami Ozaki",
    img: "Qk83szS/2017-STU48-Ozaki-Mami.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: [""], activity_status: ["former_member"]
    }
  },
  {
    name: "Orie Cho",
    img: "XsyT7fx/2018-STU48-Cho-Orie.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: [""], activity_status: ["former_member"]
    }
  },
  {
    name: "Aiko Mizoguchi",
    img: "FX2gVy6/2018-STU48-Mizoguchi-Aiko.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: [""], activity_status: ["former_member"]
    }
  },
  {
    name: "Akari Yura",
    img: "995mzn5/2019-STU48-Yura-Akari.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["STUDIO"], activity_status: ["former_member"]
    }
  },
  {
    name: "Ayumi Ichioka",
    img: "nMZDCRv/2019-STU48-Ichioka-Ayumi.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["setomaiku","cgb41"], activity_status: ["former_member"]
    }
  },
  {
    name: "Himea Maemura",
    img: "jbXF6qp/2019-Audition-STU48-Maemura-Himea.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: [""], activity_status: ["former_member"]
    }
  },
  {
    name: "Isogai Kanon",
    img: "sW0GHTF/2019-STU48-Isogai-Kanon.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["STUDIO","cgb41"], activity_status: ["former_member"]
    }
  },
  {
    name: "Kadota Momona",
    img: "smKCjPF/2019-STU48-Kadota-Momona.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi","charming_trip"], activity_status: ["former_member"]
    }
  },
  {
    name: "Sugahara Saki",
    img: "GJjNtD1/2019-STU48-Sugahara-Saki.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["STUDIO"], activity_status: ["former_member"]
    }
  },
  {
    name: "Sano Haruka",
    img: "F6yrJ1g/2018-STU48-Sano-Haruka.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["setomaiku"], activity_status: ["former_member"]
    }
  },
  {
    name: "Shioi Hinako",
    img: "hszLDCF/2018-STU48-Shioi-Hinako.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: [""], activity_status: ["former_member"]
    }
  },
  {
    name: "Torobu Yuri",
    img: "JzqQFMh/2019-STU48-Torobu-Yuri.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["charming_trip","cgb41"], activity_status: ["former_member"]
    }
  },
  {
    name: "Fujiwara Azusa",
    img: "9rGcCZn/2019-STU48-Fujiwara-Azusa.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["seto7"], activity_status: ["former_member"]
    }
  },
  {
    name: "Mishima Haruka",
    img: "s1gcytp/2019-STU48-Mishima-Haruka.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi","seto7"], activity_status: ["former_member"]
    }
  },
  {
    name: "Mori Kaho",
    img: "QC47dX5/2019-STU48-Mori-Kaho.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi"], activity_status: ["former_member"]
    }
  },
  {
    name: "Kondou Arisu",
    img: "6PhN84P/2019-STU48-Kondo-Arisu.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: [""], activity_status: ["former_member"]
    }
  },
  {
    name: "Shintani Nonoka",
    img: "GCKhq4h/Shintani-Nonoka-STU48-2020-2.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["charming_trip","setomaiku"], activity_status: ["former_member"]
    }
  },
  {
    name: "Tanaka Kouko",
    img: "FWP7HX8/Tanaka-Kouko-STU48-2020-2.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["charming_trip"], activity_status: ["former_member"]
    }
  },
  {
    name: "Otani Marina",
    img: "V9dJsLz/Otani-Marina-May-2021.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["STUDIO"], activity_status: ["former_member"]
    }
  },
  {
    name: "Tamura Natsuki",
    img: "T1XfY5L/Tamura-Natsuki-May-2021.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["mini_STUDIO"], activity_status: ["former_member"]
    }
  },
  {
    name: "Yabushita Fuu",
    img: "jwjxXWc/Yabushita-Fu-May-2021.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["miker","setomaiku","setouchi_pr_1","cgb41"], activity_status: ["former_member"]
    }
  },
  {
    name: "Imaizumi Miria",
    img: "wwCVttF/Imaizumi-Miria-May-2021.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["pin_miker"], activity_status: ["former_member"]
    }
  },
  {
    name: "Nakahiro Yayoi",
    img: "VJxg8fq/Nakahiro-Yayoi-May-2021.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi"], activity_status: ["former_member"]
    }
  },
  {
    name: "Minami Yurina",
    img: "K7hV7Z7/Minami-Yurina-May-2021.jpg",
    opts: {
      generation: [ "2nd-gen" ],
      sub_unit: ["pin_miker"], activity_status: ["former_member"]
    }
  },
  {
    name: "Kadowaki Miyuna",
    img: "LZ0BRHY/Kadowaki-Miyuna-May-2021.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["STUDIO","setouchi_pr_1","cgb41"], activity_status: ["former_member"]
    }
  },
  {
    name: "Sakaki Miyu",
    img: "pKKsTxT/Sakaki-Miyu-May-2021.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["katte_ni_shikoku_kanko_taishi","STUDIO"], activity_status: ["former_member"]
    }
  },
  {
    name: "Okada Nana",
    img: "0B7Y8pX/Okada-Nana-STU-2021.jpg",
    opts: {
      generation: [ "1st-gen" ],
      sub_unit: ["nona_diamonds"], activity_status: ["former_member"]
    }
  }
  
  

];
