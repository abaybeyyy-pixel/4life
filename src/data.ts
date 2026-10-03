import { Product, ClinicalStudy, RecoveryQuadrant, Testimonial } from "./types";

export const products: Product[] = [
  {
    id: "tf-tri-factor",
    name: "TF Tri-Factor®",
    fullName: "4Life Transfer Factor® Tri-Factor® Formula",
    tagline: "Fondasi Utama Pendukung Sistem Imun & Kesehatan Harian Keluarga",
    imageAlt: "4Life Transfer Factor Tri-Factor Formula Bottle",
    priceMember: 801000,
    priceRetail: 961200,
    points: 35, // LP estimate
    coreIngredients: [
      "UltraFactor™ (konsentrat protein ultra-filter kolostrum sapi)",
      "OvoFactor® (konsentrat protein kuning telur ayam paten)",
      "NanoFactor® (kolostrum sapi dengan ukuran nano-filter)"
    ],
    clinicalAction: "Meningkatkan kecerdasan sistem imun dan melatih aktivitas sel Natural Killer (NK) secara efisien agar pertahanan tubuh bekerja optimal.",
    securityProfile: "Ekstrak nano-filtrasi eksklusif. Sangat aman, halal, dan terdaftar resmi di BPOM sebagai suplemen kesehatan harian.",
    practicalDosage: "1 kapsul dengan 240 ml air, diminum 2x sehari setelah makan.",
    recommendedFor: [
      "Pemeliharaan kesehatan harian seluruh anggota keluarga",
      "Individu aktif dengan produktivitas tinggi",
      "Perlindungan alami dari perubahan cuaca dan kelelahan fisik"
    ],
    benefits: [
      "Mendidik sel kekebalan tubuh mengenali ancaman lebih cepat",
      "Membantu pemulihan stamina dan energi seluler dasar",
      "Mendukung keseimbangan respons sistem imun tubuh",
      "Aman dikonsumsi jangka panjang tanpa efek samping ketergantungan"
    ]
  },
  {
    id: "tf-plus",
    name: "TF Plus Tri-Factor®",
    fullName: "4Life Transfer Factor Plus® Tri-Factor® Formula",
    tagline: "Proteksi Maksimal & Pemulihan Stamina Ekstra Intensif",
    imageAlt: "4Life Transfer Factor Plus Bottle",
    priceMember: 960000,
    priceRetail: 1152000,
    points: 50, // LP estimate
    coreIngredients: [
      "100 mg Transfer Factor murni (UltraFactor, OvoFactor, NanoFactor)",
      "Campuran Cordyvant™ (Maitake, Shiitake, Cordyceps, Agaricus, Daun Zaitun, Aloe Vera)",
      "Zink (3.3 mg) untuk mempercepat perbaikan sel darah putih"
    ],
    clinicalAction: "Memaksimalkan pertahanan imun bawaan, merangsang efektivitas sel NK, dan mempercepat pemulihan tubuh dari kelelahan ekstrem.",
    securityProfile: "Paten klinis komprehensif, diperkuat dengan mineral zink esensial dan jamur herbal berharga. Sangat direkomendasikan untuk proteksi tingkat tinggi.",
    practicalDosage: "1 kapsul dengan 240 ml air, diminum 2x sehari setelah makan.",
    recommendedFor: [
      "Pemulihan intensif pasca sakit atau kelelahan berat",
      "Pekerja dengan jam kerja padat dan sering kurang tidur",
      "Dukungan daya tahan tubuh ekstra saat kondisi fisik menurun",
      "Perlindungan maksimal dari radikal bebas dan stres lingkungan"
    ],
    benefits: [
      "Memicu aktivitas sel pembunuh alami (NK Cells) hingga tingkat optimal",
      "Mempercepat pemulihan energi setelah aktivitas fisik berat",
      "Diperkaya dengan seng (Zinc) dan fitonutrisi antioksidan tinggi",
      "Membantu menjaga pertahanan tubuh di bawah tekanan aktivitas tinggi"
    ]
  }
];

export const clinicalStudies: ClinicalStudy[] = [
  {
    title: "In-Vitro Cytotoxicity Study",
    authorJournal: "Vieira-Brock, Andersen, et al. (Immunology, 2019)",
    focus: "Membuktikan dan mengukur pengembangan metode analisis PBMC-mediated killing dari sel target kanker/virus K562 oleh kolostrum sapi berukuran filter khusus."
  },
  {
    title: "Immune Response Evaluation",
    authorJournal: "Vetvicka V. & Fernandez-Botran R. (Int Clin Pathol J, 2020) & Vetvicka V. (J Nutr Health Sci, 2019)",
    focus: "Evaluasi klinis yang menunjukkan respons imunologis spesifik, aktivasi antibodi, dan peningkatan kesiapan pertahanan sel T terhadap inflamasi."
  },
  {
    title: "Rapid Modulation Assessment",
    authorJournal: "G. Jensen, NIS Labs Report (058-006)",
    focus: "Studi klinis terkontrol pada manusia membuktikan efek modulasi imun super cepat dari pemberian 600 mg formulasi 4Life Transfer Factor Blend dibandingkan dengan kelompok plasebo."
  }
];

export const recoveryQuadrants: RecoveryQuadrant[] = [
  {
    title: "Fondasi",
    focus: "Melatih Sel Imun",
    description: "Meningkatkan kecerdasan sistem kekebalan tubuh agar mampu mengenali, merespons, dan mengingat ancaman kesehatan.",
    iconName: "Activity"
  },
  {
    title: "Pertahanan",
    focus: "Perlindungan Seluler",
    description: "Mencegah serangan patogen dan virus oportunistik saat kondisi fisik berada di bawah tekanan atau stres harian.",
    iconName: "ShieldAlert"
  },
  {
    title: "Energi",
    focus: "Stamina & Metabolisme",
    description: "Membantu menyeimbangkan hormon kortisol akibat stres agar energi tubuh tetap stabil sepanjang hari.",
    iconName: "BatteryCharging"
  },
  {
    title: "Kesehatan",
    focus: "Keseimbangan Menyeluruh",
    description: "Mengoptimalkan seluruh sistem pertahanan tubuh agar organ-organ penting bekerja dengan harmoni terbaik.",
    iconName: "Heart"
  }
];

export const awardsList = [
  {
    year: "2026",
    title: "Perusahaan Nutrasetika Sistem Kekebalan Tubuh Berbasis Tanaman Terbaik",
    category: "Global 100 Awards",
    description: "Penghargaan prestisius atas dedikasi tiada henti pada formulasi nabati mutakhir (PhytoFactor™) dan riset imunologi global."
  },
  {
    year: "2025",
    title: "Most Innovative Company of the Year",
    category: "Globee Business Awards",
    description: "Atas penemuan revolusioner Plant-Based Transfer Factor pertama di dunia, memperlebar akses kesehatan imun bagi kalangan vegan."
  },
  {
    year: "2024",
    title: "Pemenang Grand Globee - Perusahaan Terbaik",
    category: "Annual Globee Awards (Ke-8)",
    description: "Diberikan murni berdasarkan penilaian independen panel editor atas konsistensi riset, kepatuhan kualitas manufaktur, dan integritas bisnis."
  },
  {
    year: "2023",
    title: "TITAN Business Awards - Platinum Award & Product of the Year",
    category: "Kategori Immune Boost",
    description: "Mengukuhkan 4Life Transfer Factor sebagai standar emas produk penguat sistem imun paling efektif di pasar global."
  }
];

export const immuneCells = [
  {
    name: "Sel Natural Killer (NK)",
    role: "Garis Depan Pertahanan",
    desc: "Sel imun khusus yang mendeteksi dan menetralkan sel-sel asing atau terinfeksi virus sebelum mereka berkembang biak dalam tubuh."
  },
  {
    name: "Makrofag",
    role: "Pasukan Pembersih Jaringan",
    desc: "Membantu menyingkirkan puing-puing sel mati dan patogen untuk mempercepat perbaikan jaringan tubuh yang rusak."
  },
  {
    name: "Sel T Regulatori",
    role: "Pengendali Inflamasi",
    desc: "Meredakan peradangan berlebih (inflamasi kronis) agar tubuh tidak merusak sel-sel sehatnya sendiri."
  },
  {
    name: "Sel B",
    role: "Pabrik Antibodi Terarah",
    desc: "Memproduksi jutaan protein imunoglobulin spesifik yang disebarkan ke seluruh tubuh untuk membentuk perisai imun aktif."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Hendra, M.Si",
    role: "Praktisi Kesehatan",
    location: "Surabaya",
    avatar: "👨‍⚕️",
    tag: "Kualitas Formula",
    rating: 5,
    text: "Sebagai praktisi, saya sangat selektif merekomendasikan suplemen. 4Life Transfer Factor ini luar biasa karena murni mendidik sel imun tanpa membebani organ tubuh. Hasilnya sangat baik untuk pemulihan fisik pasien."
  },
  {
    id: "t2",
    name: "Fitri Rahmawati",
    role: "Wirausaha",
    location: "Bandung",
    avatar: "👩",
    tag: "Aktivitas Padat",
    rating: 5,
    text: "Pekerjaan harian dan mengelola usaha sangat menguras tenaga, sering kurang tidur. Setelah rutin konsumsi TF Plus, daya tahan tubuh terasa jauh lebih stabil dan badan tidak gampang lelah meskipun mobilitas tinggi."
  },
  {
    id: "t3",
    name: "Budi Santoso",
    role: "Keluarga",
    location: "Yogyakarta",
    avatar: "👨",
    tag: "Imun Keluarga",
    rating: 5,
    text: "Sejak mengenalkan TF Tri-Factor ke seluruh keluarga kami, kami menjadi lebih jarang sakit saat pergantian musim dan cuaca buruk. Kami merasa jauh lebih terlindungi."
  },
  {
    id: "t4",
    name: "Dian Permatasari",
    role: "Karyawan Swasta",
    location: "Jakarta Selatan",
    avatar: "👩",
    tag: "Kelelahan Kerja",
    rating: 5,
    text: "Kerja kantoran lembur tiap malam benar-benar menguras energi. Awalnya takut jatuh sakit, tapi berkat asupan TF Tri-Factor tubuh saya tetap bertenaga dan fit setiap hari. Rekomendasi suplemen terbaik!"
  },
  {
    id: "t5",
    name: "Rian Wijaya",
    role: "Mitra Resmi",
    location: "Semarang",
    avatar: "👨",
    tag: "Apotek MyShop",
    rating: 5,
    text: "Sangat terbantu dengan sistem MyShop 4Life. Pelanggan saya bisa langsung beli lewat link resmi tanpa saya harus stok barang sendiri di rumah. Pengirimannya cepat langsung dari gudang resmi."
  },
  {
    id: "t6",
    name: "Maria Ulfah",
    role: "Keluarga",
    location: "Medan",
    avatar: "👩",
    tag: "Daya Tahan Harian",
    rating: 5,
    text: "Awalnya ragu, tapi demi memberikan proteksi terbaik untuk keluarga, kami coba konsumsi TF Tri-Factor. Hasilnya tubuh terasa fit dan kami tidak mudah tertular flu lagi saat cuaca pancaroba."
  },
  {
    id: "t7",
    name: "Sri Wahyuni",
    role: "Mitra Resmi",
    location: "Solo",
    avatar: "👩",
    tag: "Riset BPOM",
    rating: 5,
    text: "Legalitas BPOM dan sertifikasi keamanan yang lengkap membuat saya percaya diri merekomendasikan Transfer Factor ke teman kerja. Semua merasa tenang dan aman mengonsumsinya."
  },
  {
    id: "t8",
    name: "Rina Astuti",
    role: "Konsumen",
    location: "Malang",
    avatar: "👩",
    tag: "Pemulihan Fisik",
    rating: 5,
    text: "Setelah sembuh dari sakit, tubuh terasa lemas dan sulit kembali bertenaga. Teman menyarankan minum TF Plus, alhamdulillah dalam 4 hari kondisi badan terasa segar dan bugar kembali."
  },
  {
    id: "t9",
    name: "Kartika Sari",
    role: "Mitra Resmi",
    location: "Denpasar",
    avatar: "👩",
    tag: "Reseller Digital",
    rating: 5,
    text: "Program kemitraan digital 4Life sangat sinergis bagi siapa saja. Kita cukup mengedukasi manfaat produk secara online, mereka beli langsung, dan sistem memberikan profit sharing yang adil."
  },
  {
    id: "t10",
    name: "Amalia Siregar",
    role: "Konsumen",
    location: "Pekanbaru",
    avatar: "👩",
    tag: "Daya Tahan Tubuh",
    rating: 5,
    text: "Sempat cemas karena badan sering meriang akibat kelelahan bekerja. Setelah konsumsi TF Tri-Factor secara teratur, meriangnya hilang dan aktivitas harian terasa jauh lebih nyaman."
  }
];

