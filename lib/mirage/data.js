import img0 from "../../public/images/0.png"
import img1 from "../../public/images/1.png"
import img2 from "../../public/images/2.png"
import img3 from "../../public/images/3.png"
import img4 from "../../public/images/4.png"
import img5 from "../../public/images/5.png"
import img6 from "../../public/images/6.png"
import img7 from "../../public/images/7.png"
import img8 from "../../public/images/8.png"
import img9 from "../../public/images/9.png"
import img10 from "../../public/images/10.png"
import img11 from "../../public/images/11.png"
import img12 from "../../public/images/12.png"
import img13 from "../../public/images/13.png"
import img14 from "../../public/images/14.png"
import img15 from "../../public/images/15.png"
import img16 from "../../public/images/16.png"
import img17 from "../../public/images/17.png"
import img18 from "../../public/images/18.png"
import img19 from "../../public/images/19.png"
import img20 from "../../public/images/20.png"
import img21 from "../../public/images/21.png"
import img22 from "../../public/images/22.png"
import img23 from "../../public/images/23.png"
import img24 from "../../public/images/24.png"
import img25 from "../../public/images/25.png"
import img26 from "../../public/images/26.png"
import img27 from "../../public/images/27.png"
import img28 from "../../public/images/28.png"
import img29 from "../../public/images/29.png"
import img30 from "../../public/images/30.png"
import img31 from "../../public/images/31.png"
import img32 from "../../public/images/32.png"
import img33 from "../../public/images/33.png"
import img34 from "../../public/images/34.png"
import img35 from "../../public/images/35.png"
import img36 from "../../public/images/36.png"
import img37 from "../../public/images/37.png"
import img38 from "../../public/images/38.png"
import img39 from "../../public/images/39.png"
import img40 from "../../public/images/40.png"
import img41 from "../../public/images/41.png"
import img42 from "../../public/images/42.png"
import img43 from "../../public/images/43.png"
import img44 from "../../public/images/44.png"
import img45 from "../../public/images/45.png"
import img46 from "../../public/images/46.png"
import img47 from "../../public/images/47.png"
import img48 from "../../public/images/48.png"
import img49 from "../../public/images/49.png"
import img50 from "../../public/images/50.png"
import img51 from "../../public/images/51.png"
import img52 from "../../public/images/52.png"
import img53 from "../../public/images/53.png"
import img54 from "../../public/images/54.png"
import img55 from "../../public/images/55.png"
import img56 from "../../public/images/56.png"
import img57 from "../../public/images/57.png"
import img58 from "../../public/images/58.png"
import img59 from "../../public/images/59.png"
import img60 from "../../public/images/60.png"
import img61 from "../../public/images/61.png"
import img62 from "../../public/images/62.png"
import img63 from "../../public/images/63.png"
import img64 from "../../public/images/64.png"
import img65 from "../../public/images/65.png"
import img66 from "../../public/images/66.png"
import img67 from "../../public/images/67.png"
import img68 from "../../public/images/68.png"
import img69 from "../../public/images/69.png"
import img70 from "../../public/images/70.png"
import img71 from "../../public/images/71.png"
import img72 from "../../public/images/72.png"
import img73 from "../../public/images/73.png"
import img74 from "../../public/images/74.png"
import img75 from "../../public/images/75.png"
import img76 from "../../public/images/76.png"
import img77 from "../../public/images/77.png"
import img78 from "../../public/images/78.png"
import img79 from "../../public/images/79.png"
import img80 from "../../public/images/80.png"
import img81 from "../../public/images/81.png"
import img82 from "../../public/images/82.png"
import img83 from "../../public/images/83.png"
import img84 from "../../public/images/84.png"
import img85 from "../../public/images/85.png"
import img86 from "../../public/images/86.png"
import img87 from "../../public/images/87.png"
import img88 from "../../public/images/88.png"
import img89 from "../../public/images/89.png"
import img90 from "../../public/images/90.png"
import img91 from "../../public/images/91.png"
import img92 from "../../public/images/92.png"
import img93 from "../../public/images/93.png"
import img94 from "../../public/images/94.png"
import img95 from "../../public/images/95.png"
import img96 from "../../public/images/96.png"
import img97 from "../../public/images/97.png"
import img98 from "../../public/images/98.png"
import img99 from "../../public/images/99.png"

const randomSelerCount = Math.floor(Math.random() * 100)
const dateItem = new Date()
export const specialOffer = [{
    id: 0,
    productImage: img0,
    productName: "دوغ بدون گاز نعناع  1.5 لیتری رامک",
    brand: "رامک",
    brandEn: "ramak",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "دوغ",
    price: 160000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 19
},
{
    id: 1,
    productImage: img1,
    productName: "نوار بهداشتی بالدار نازک متوسط 10 عددی نانسی",
    brand: "نانسی",
    brandEn:"nancy",
    categories: "آرایشی بهداشتی",
    category: "cosmetics",
    batchType: "بهداشت فردی",
    Type: "پوشک و نوار",
    price: 215000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,
    offPercent: 30
},
{
    id: 2,
    productImage: img2,
    productName: "سفره یکبارمصرف تجزیه پذیر 50 متری  پتروکلین",
    brand: "پتروکلین",
    brandEn:"petroclin",
    categories: "ابزار و ملزومات",
    category: "tools",
    batchType: "بهداشت فردی",
    Type: "پوشک و نوار",
    price: 498000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,
    offPercent: 40
},
{
    id: 3,
    productImage: img3,
    productName: "ابر جادویی 35 گرمی بریتکس",
    brand: "بریتکس",
    brandEn:"britex",
    categories: "ابزار و ملزومات",
    category: "tools",
    batchType: "ابزار و لوازم منزل",
    Type: "لوازم آشپزخانه",
    price: 330000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 40
},
{
    id: 4,
    productImage: img4,
    productName: "شامپو بدن اسکراب سبز 280 گرمی گلرنگ",
    brand: "گلرنگ",
    brandEn:"golrang",
    categories: "آرایشی بهداشتی",
    category: "cosmetics",
    batchType: "بهداشت فردی",
    Type: "بهداشت سر و بدن",
    price: 231700,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 20
},
{
    id: 5,
    productImage: img5,
    productName: "زعفران درجه یک مقدار 1 گرم مصطفوی",
    brand: "مصطفوی",
    brandEn:"mostafavi",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "چاشنی و ادویه جات",
    Type: "ادویه",
    price: 473000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 25
},
{
    id: 6,
    productImage: img6,
    productName: "خرمای مضافتی طلایی 680 گرمی ساغر",
    brand: "ساغر",
    brandEn:"saghar",
    categories: "خواربار",
    category: "food",
    batchType: "آجیل و خشکبار",
    Type: "خشکبار",
    price: 645000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 40
},
{
    id: 7,
    productImage: img7,
    productName: "ناگت مرغ و قارچ 950 گرمی ب.آ",
    brand: "ب.آ",
    brandEn:"a.b",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "خوارباری آماده و کنسروجات",
    Type: "خوارباری نیمه آماده یخچالی",
    price: 1058000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 40
},
{
    id: 8,
    productImage: img8,
    productName: "نرم کننده موهای خشک 200 میلی لیتری دیپ سنس",
    brand: "دیپ سنس",
    brandEn:"deep sense",
    categories: "آرایشی بهداشتی",
    category: "cosmetics",
    batchType: "بهداشت فردی",
    Type: "بهداشت سر و بدن",
    price: 278800,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 30
},
{
    id: 9,
    productImage: img9,
    productName: "خامه کاکائو 100 گرمی پاکبان",
    brand: "پاکبان",
    brandEn:"pakban",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "خامه",
    price: 70000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 30
},
{
    id: 10,
    productImage: img10,
    productName: "پرتقال آبگیری 1کیلویی نصر خاتم",
    brand: "نصر خاتم",
    brandEn:"nasr khatam",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "میوه",
    Type: "میوه تازه",
    price: 152000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 11,
    productImage: img11,
    productName: "ماسک کودک سه لایه 50 عددی بارمان",
    brand: "بارمان",
    brandEn:"barman",
    categories: "آرایشی بهداشتی",
    category: "cosmetics",
    batchType: "بهداشت فردی",
    Type: "وسایل شخصی",
    price: 500000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 12,
    productImage: img12,
    productName: "خرمای ربی 450 گرمی ساغر",
    brand: "ساغر",
    brandEn:"saghar",
    categories: "خواربار",
    category: "food",
    batchType: "آجیل و خشکبار",
    Type: "خشکبار",
    price: 570000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 13,
    productImage: img13,
    productName: "میکس سوپ 400 گرمی نوبر سبز",
    brand: "نوبر سبز",
    brandEn:"nobar sabz",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "سبزیجات خشک و منجمد",
    Type: "سبزیجات منجمد",
    price: 385000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 55
},
{
    id: 14,
    productImage: img14,
    productName: "مایع سفید کننده سطوح و البسه اسنو 2 لیتری دامستوس",
    brand: "دامستوس",
    brandEn:"damstos",
    categories: "آرایشی بهداشتی",
    category: "cosmetics",
    batchType: "بهداشت خانگی",
    Type: "سفید کننده و ضدعفونی کننده",
    price: 630000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 10
},
{
    id: 15,
    productImage: img15,
    productName: "پک اسپری چندمنظوره 750 میلی لیتری دامستوس",
    brand: "دامستوس",
    brandEn:"damstos",
    categories: "آرایشی بهداشتی",
    category: "cosmetics",
    batchType: "بهداشت خانگی",
    Type: "پاک کننده",
    price: 880000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 20
},
{
    id: 16,
    productImage: img16,
    productName: "پک اسپری پاک کننده چندمنظوره سطوح750میلی لیتری سیف",
    brand: "سیف",
    brandEn:"seif",
    categories: "آرایشی بهداشتی",
    category: "cosmetics",
    batchType: "بهداشت خانگی",
    Type: "پاک کننده",
    price: 880000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 20
},
{
    id: 17,
    productImage: img17,
    productName: "پک پاک کننده چندمنظوره 750میلی لیتری سیف",
    brand: "سیف",
    brandEn:"seif",
    categories: "آرایشی بهداشتی",
    category: "cosmetics",
    batchType: "بهداشت خانگی",
    Type: "پاک کننده",
    price: 620000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 20
},
{
    id: 18,
    productImage: img18,
    productName: "نارگیل پاک شده 1عدد متوسط نصر خاتم",
    brand: "نصر خاتم",
    brandEn:"nasr khatam",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "میوه",
    Type: "میوه تازه",
    price: 474000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 19,
    productImage: img19,
    productName: "نارگیل پاک شده 1عدد کوچک نصر خاتم",
    brand: "نصر خاتم",
    brandEn:"nasr khatam",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "میوه",
    Type: "میوه تازه",
    price: 422000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 20,
    productImage: img20,
    productName: "شکر سفید یک کیلویی ناردون",
    brand: "ناردون",
    brandEn:"nardon",
    categories: "خواربار",
    category: "food",
    batchType: "قند و شکر و نبات",
    Type: "قند و شکر ",
    price: 163500,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,

},
{
    id: 21,
    productImage: img21,
    productName: "کره حیوانی 100 گرمی میهن",
    brand: "میهن",
    brandEn:"mihan",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "کره ",
    price: 130000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 22,
    productImage: img22,
    productName: "روغن آفتابگردان غنی شده1800 گرمی اویلا",
    brand: "اویلا",
    brandEn:"oila",
    categories: "خواربار",
    category: "food",
    batchType: "روغن",
    Type: "روغن مایع تنظیم بازار ",
    price: 302500,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 23,
    productImage: img23,
    productName: "تیویکا شیری نارگیلی 85 گرمی  ویتانا",
    brand: "ویتانا",
    brandEn:"vitana",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "شیرینی و تنقلات",
    Type: "بیسکویت و ویفر ",
    price: 50000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 24,
    productImage: img24,
    productName: "بادام زمینی نمکی 40 گرمی چی توز",
    brand: "چی توز",
    brandEn:"cheetoz",
    categories: "خواربار",
    category: "food",
    batchType: "شیرینی و تنقلات",
    Type: "تخمه و مغزهای طعم دار",
    price: 60000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 25,
    productImage: img25,
    productName: "کره حیوانی 50 گرمی میهن",
    brand: "میهن",
    brandEn:"mihan",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "کره ",
    price: 70000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 26,
    productImage: img26,
    productName: " ویفر رنگینک 15 گرمی گرجی",
    brand: "گرجی",
    brandEn:"gorji",
    categories: "خواربار",
    category: "food",
    batchType: "شیرینی و تنقلات",
    Type: "بیسکویت و ویفر ",
    price: 10000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 27,
    productImage: img27,
    productName: "شیر کم چرب 955 میلی لیتری کاله",
    brand: "کاله",
    brandEn:"kaleh",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "شیر",
    price: 125000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 28,
    productImage: img28,
    productName: "نوشابه پت 300 سی سی کوکاکولا",
    brand: "کوکاکولا",
    brandEn:"coca cola",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های سرد",
    Type: "نوشیدنی گازدار",
    price: 50000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 20
},
{
    id: 29,
    productImage: img29,
    productName: "شیر کم چرب فرادما 1 لیتری پگاه",
    brand: "پگاه",
    brandEn:"pegah",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "شیر",
    price: 150000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 30,
    productImage: img30,
    productName: "میکس سوپ 400 گرمی نوبر سبز",
    brand: "نوبر سبز",
    brandEn:"nobar sabz",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "سبزیجات خشک و منجمد",
    Type: "سبزیجات منجمد",
    price: 385000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 55
},
{
    id: 31,
    productImage: img31,
    productName: "ابر و اسکاچ  ساده 2 عددی رزال",
    brand: "رزال",
    brandEn:"razal",
    categories: "ابزار و ملزومات",
    category: "tools",
    batchType: "ابزار و لوازم منزل",
    Type: "لوازم آشپزخانه",
    price: 115000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 50,
},
{
    id: 32,
    productImage: img32,
    productName: "کاندوم فضایی دکمه دار بسته 1 عددی شادو",
    brand: "شادو",
    brandEn:"shadow",
    categories: "آرایشی بهداشتی",
    category: "cosmetics",
    batchType: "بهداشت فردی",
    Type: "بهداشت جنسی",
    price: 330000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 50,
},
{
    id: 33,
    productImage: img33,
    productName: "کاندوم فضایی طوقی بسته 1 عددی ایکس دریم",
    brand: "ایکس دریم",
    brandEn:"xderim",
    categories: "آرایشی بهداشتی",
    category: "cosmetics",
    batchType: "بهداشت فردی",
    Type: "بهداشت جنسی",
    price: 330000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 50,
},
{
    id: 34,
    productImage: img34,
    productName: "سینی بیضی طرح ایتالیا 5002 مهروز",
    brand: "مهروز",
    categories: "ابزار و ملزومات",
    category: "tools",
    batchType: "ابزار و لوازم منزل",
    Type: "لوازم آشپزخانه",
    price: 588000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 50,
},
{
    id: 35,
    productImage: img35,
    productName: "کاندوم بزرگ کننده بسته 12 عددی ایکس دریم",
    brand: "دریم ایکس",
    brandEn:"xderim",
    categories: "آرایشی بهداشتی",
    category: "cosmetics",
    batchType: "بهداشت فردی",
    Type: "بهداشت جنسی",
    price: 485000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 50,
},
{
    id: 36,
    productImage: img36,
    productName: "کالباس مارتادلا 40 500 گرمی 32",
    brand: "32",
    brandEn:"32",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "پروتئینی",
    Type: "سوسیس و کالباس",
    price: 430000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 50,
},
{
    id: 37,
    productImage: img37,
    productName: "نان پیتزا نیمه آماده منجمد ساده 480 گرمی 206 ",
    brand: "206",
    brandEn:"206",
    categories: "خواربار",
    category: "food",
    batchType: "نان و غلات",
    Type: "نان",
    price: 186000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 50,
},
{
    id: 38,
    productImage: img38,
    productName: "نان یوفکا نیمه آماده منجمد مثلثی 450 گرمی 206",
    brand: "206",
    brandEn:"206",
    categories: "خواربار",
    category: "food",
    batchType: "نان و غلات",
    Type: "نان",
    price: 410000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 45,
},
{
    id: 39,
    productImage: img39,
    productName: "تاپینگ پینزا 180 گرمی 206",
    brand: "206",
    brandEn:"206",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "پنیر",
    price: 319700,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 45,
},
{
    id: 40,
    productImage: img40,
    productName: "چای ایرانی ساده 350 گرمی بلوط",
    brand: "بلوط",
    brandEn:"balot",
    categories: "نوشیدنی و دمنوش ها",
    batchType: "نوشیدنی های گرم",
    Type: "چای و دمنوش",
    category: "drinks",
    price: 499000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 45,
},
{
    id: 41,
    productImage: img41,
    productName: "چای قرمز آسام طلاکوب 500 گرمی شهرزاد",
    brand: "شهرزاد",
    brandEn:"shahrzad",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "چای و دمنوش",
    price: 1499500,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 42,
    productImage: img42,
    productName: "چای تی بگ معطر 25 عددی چای احمد",
    brand: "احمد",
    brandEn:"ahmad",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "چای و دمنوش",
    price: 179000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 43,
    productImage: img43,
    productName: "دمنوش میوه ای کنار 15 عددی آرسیس لایف",
    brand: "آرسیس لایف",
    brandEn:"arcis life",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "چای و دمنوش",
    price: 500000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 44,
    productImage: img44,
    productName: "چای صبحانه معطر 500 گرمی شهرزاد",
    brand: "شهرزاد",
    brandEn:"shahrzad",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "چای و دمنوش",
    price: 1199000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 45,
    productImage: img45,
    productName: "چای تی بگ هل 25 عددی چای احمد",
    brand: "احمد",
    brandEn:"ahmad",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "چای و دمنوش",
    price: 179000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 46,
    productImage: img46,
    productName: "دمنوش چای ترش 12 عددی سحرخیز",
    brand: "سحرخیز",
    brandEn:"saharkhiz",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "چای و دمنوش",
    price: 516000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 47,
    productImage: img47,
    productName: "تی بگ ارل گری 25 عددی 50 گرمی چای احمد",
    brand: "احمد",
    brandEn:"ahmad",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "چای و دمنوش",
    price: 179000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 48,
    productImage: img48,
    productName: "چای تی بگ رویال لفافدار 25 عددی شهرزاد",
    brand: "شهرزاد",
    brandEn:"shahrzad",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "چای و دمنوش",
    price: 277800,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 49,
    productImage: img49,
    productName: "چای تی بگ سبز با پرکهای لیمو 25 عددی شهرزاد",
    brand: "شهرزاد",
    brandEn:"shahrzad",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "چای و دمنوش",
    price: 259900,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 50,
    productImage: img50,
    productName: "قارج اکونومی 400 گرمی نصر خاتم",
    category: "fruitsVegetables",
    brand: "نصر خاتم",
    brandEn:"nasr khatam",
    categories: "میوه و سبزیجات",
    batchType: "میوه",
    Type: "میوه تازه",
    price: 319000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 15,
},
{
    id: 51,
    productImage: img51,
    productName: "قارچ دکمه ای درجه یک بسته بندی 400 گرمی بلوط",
    brand: "بلوط",
    brandEn:"balot",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "میوه",
    Type: "میوه تازه",
    price: 372500,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 52,
    productImage: img52,
    productName: "پیاز زرد خوش قالب متوسط یک کیلویی بلوط",
    brand: "بلوط",
    brandEn:"balot",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "میوه",
    Type: "صیفی جات",
    price: 122500,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 53,
    productImage: img53,
    productName: "سیب زمینی خوش قالب متوسط 2 کیلویی بلوط",
    brand: "بلوط",
    brandEn:"balot",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "میوه",
    Type: "صیفی جات",
    price: 323750,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 54,
    productImage: img54,
    productName: "آلبالو با هسته منجمد 400 گرمی نوبر سبز",
    brand: "نوبر سبز",
    brandEn:"nobar sabz",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "میوه",
    Type: "میوه منجمد",
    price: 295500,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 10,
},
{
    id: 55,
    productImage: img55,
    productName: "سیب زمینی خوش قالب متوسط 1 کیلویی بلوط",
    brand: "بلوط",
    brandEn:"balot",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "میوه",
    Type: "صیفی جات",
    price: 182500,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 56,
    productImage: img56,
    productName: "خیار گلخانه ای 1 کیلویی بلوط",
    brand: "بلوط",
    brandEn:"balot",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "میوه",
    Type: "میوه تازه",
    price: 212500,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 57,
    productImage: img57,
    productName: "اسفناج خشک 100 گرمی ناردون",
    brand: "ناردون",
    brandEn:"nardon",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "سبزی",
    Type: " سبزیجات خشک و منجمد",
    price: 245000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 35,
},
{
    id: 58,
    productImage: img58,
    productName: "پرتقال توسرخ یک کیلویی بلوط(تعداد6تا8عدد درهربسته)",
    brand: "بلوط",
    brandEn:"balot",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "میوه",
    Type: "میوه تازه",
    price: 286250,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 59,
    productImage: img59,
    productName: "ذرت دان شده منجمد400 گرمی نوبر سبز",
    brand: "نوبر سبز",
    brandEn:"nobar sabz",
    categories: "میوه و سبزیجات",
    category: "fruitsVegetables",
    batchType: "میوه",
    Type: "میوه منجمد",
    price: 365000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 10,
},
{
    id: 60,
    productImage: img60,
    productName: "نوار بهداشتی بالدار مشبک 10 عددی بیتا",
    brand: "بیتا",
    brandEn:"bita",
    categories: "آرایشی بهداشتی",
    category: "Cosmetics",
    batchType: "بهداشت فردی",
    Type: "پوشک و نوار",
    price: 180000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 30,
},
{
    id: 61,
    productImage: img61,
    productName: "نوار بهداشتی بالدار بزرگ روزانه 10 عددی پنبه ریز ",
    brand: "پنبه ریز",
    brandEn:"panbeh riz",
    categories: "آرایشی بهداشتی",
    category: "Cosmetics",
    batchType: "بهداشت فردی",
    Type: "پوشک و نوار",
    price: 154000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 62,
    productImage: img62,
    productName: "پد بی اختیاری اچ بی ال 5 عددی تافته",
    brand: "تافته",
    brandEn:"tafteh",
    categories: "آرایشی بهداشتی",
    category: "Cosmetics",
    batchType: "بهداشت فردی",
    Type: "پوشک و نوار",
    price: 200000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 63,
    productImage: img63,
    productName: "نواربهداشتی بالدارفلاف نازک خیلی بزرگ10عددی نانسی",
    brand: "نانسی",
    brandEn:"nancy",
    categories: "آرایشی بهداشتی",
    category: "Cosmetics",
    batchType: "بهداشت فردی",
    Type: "پوشک و نوار",
    price: 209000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 30,
},
{
    id: 64,
    productImage: img64,
    productName: "نوار بهداشتی بالدار اولترا متوسط 10عددی مولپد",
    brand: "مولپد",
    brandEn:"molpad",
    categories: "آرایشی بهداشتی",
    category: "Cosmetics",
    batchType: "بهداشت فردی",
    Type: "پوشک و نوار",
    price: 228000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 65,
    productImage: img65,
    productName: "نوار بهداشتی بالدار بزرگ نرمال10 عددی پنبه ریز",
    brand: "پنبه ریز",
    brandEn:"panbeh riz",
    categories: "آرایشی بهداشتی",
    category: "Cosmetics",
    batchType: "بهداشت فردی",
    Type: "پوشک و نوار",
    price: 142000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 66,
    productImage: img66,
    productName: "نوار بهداشتی بالدار مشبک بزرگ 10 عددی نانسی",
    brand: "نانسی",
    brandEn:"nancy",
    categories: "آرایشی بهداشتی",
    category: "Cosmetics",
    batchType: "بهداشت فردی",
    Type: "پوشک و نوار",
    price: 159000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 30,
},
{
    id: 67,
    productImage: img67,
    productName: "نوار بهداشتی بالدار بزرگ روزانه 10 عددی پنبه ریز",
    brand: "پنبه ریز",
    brandEn:"panbeh riz",
    categories: "آرایشی بهداشتی",
    category: "Cosmetics",
    batchType: "بهداشت فردی",
    Type: "پوشک و نوار",
    price: 161000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 68,
    productImage: img68,
    productName: "نوار بهداشتی بالدار نازک متوسط 10 عددی نانسی",
    brand: "نانسی",
    brandEn:"nancy",
    categories: "آرایشی بهداشتی",
    category: "Cosmetics",
    batchType: "بهداشت فردی",
    Type: "پوشک و نوار",
    price: 215000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 30,
},
{
    id: 69,
    productImage: img96,
    productName: "نواربهداشتی نازک کتانی ویژه شب تافته",
    brand: "تافته",
    brandEn:"tafteh",
    categories: "آرایشی بهداشتی",
    category: "Cosmetics",
    batchType: "بهداشت فردی",
    Type: "پوشک و نوار",
    price: 187500,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 70,
    productImage: img70,
    productName: " کافی میکس 1×3 بسته24عددی 18 گرمی مولتی کافه",
    brand: "مولتی کافه",
    brandEn:"multi cafe",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "پودر نوشیدنی گرم",
    price: 744000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 71,
    productImage: img71,
    productName: "جعبه پودر موکا 10 عددی اکشن",
    brand: "اکشن",
    brandEn:"action",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "پودر نوشیدنی گرم",
    price: 500000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 20,
},
{
    id: 72,
    productImage: img72,
    productName: "کافی میکس کارمل 1×4 بسته 24عددی  18گرمی مولتی کافه",
    brand: "مولتی کافه",
    brandEn:"multi cafe",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "پودر نوشیدنی گرم",
    price: 684000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 5,
},
{
    id: 73,
    productImage: img73,
    productName: " کافی میکس 1×2 بدون شکر 24 عددی 14 گرمی مولتی کافه",
    brand: "مولتی کافه",
    brandEn:"multi cafe",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "پودر نوشیدنی گرم",
    price: 875000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 5,
},
{
    id: 74,
    productImage: img74,
    productName: "پودر قهوه فوری 3 در 1  360گرمی مادلین",
    brand: "مادلین",
    brandEn:"madeleine",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "پودر نوشیدنی گرم",
    price: 610000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 25,
},
{
    id: 75,
    productImage: img75,
    productName: "کافی میکس 1×2 بدون شکر  14 گرمی مولتی کافه",
    brand: "مولتی کافه",
    brandEn:"multi cafe",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "پودر نوشیدنی گرم",
    price: 489000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 5,
},
{
    id: 76,
    productImage: img76,
    productName: "پودر کاپوچینو با طعم کارامل 400 گرمی مادلین",
    brand: "مادلین",
    brandEn:"madeleine",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "پودر نوشیدنی گرم",
    price: 790000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 25,
},
{
    id: 77,
    productImage: img77,
    productName: "قهوه کلاسیک شیشه ای 100 گرمی مولتی کافه",
    brand: "مولتی کافه",
    brandEn:"multi cafe",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "پودر نوشیدنی گرم",
    price: 696000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 5,
},
{
    id: 78,
    productImage: img78,
    productName: "پودر کاکائو نسکوییک 15*24 360 گرمی نستله",
    brand: "نستله",
    brandEn:"nestle",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "پودر نوشیدنی گرم",
    price: 675000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 79,
    productImage: img79,
    productName: " کافی کریمر 200 گرمی مولتی میت",
    brand: "مولتی میت",
    brandEn:"multi cafe",
    categories: "نوشیدنی و دمنوش ها",
    category: "drinks",
    batchType: "نوشیدنی های گرم",
    Type: "پودر نوشیدنی گرم",
    price: 395000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 5,
},
{
    id: 80,
    productImage: img80,
    productName: "پنیر پیتزا رنده شده 2000 گرمی 206",
    brand: "206",
    brandEn:"206",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "پنیر",
    price: 2677500,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 45,
},
{
    id: 81,
    productImage: img81,
    productName: "تاپینگ پینزا 180 گرمی 206",
    brand: "206",
    brandEn:"206",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "پنیر",
    price: 319700,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 45,
},
{
    id: 82,
    productImage: img82,
    productName: "تاپینگ پیتزا 500 گرمی 206",
    brand: "206",
    brandEn:"206",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "پنیر",
    price: 777600,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 45
},
{
    id: 83,
    productImage: img83,
    productName: "تاپینگ پیتزا 1000 گرمی 206",
    brand: "206",
    brandEn:"206",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "پنیر",
    price: 1411200,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 45,
},
{
    id: 84,
    productImage: img84,
    productName: "پنیر پارمسان رنده شده 100 گرمی کاله",
    brand: "کاله",
    brandEn:"kaleh",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "پنیر",
    price: 438000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 85,
    productImage: img85,
    productName: "پنیر موزارلا رنده شده 500 گرمی دالیا",
    brand: "دالیا",
    brandEn:"dalia",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "پنیر",
    price: 780000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 27,
},
{
    id: 86,
    productImage: img86,
    productName: "پنیر موزارلا 2000 گرمی 206",
    brand: "206",
    brandEn:"206",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "پنیر",
    price: 2865000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 45,
},
{
    id: 87,
    productImage: img87,
    productName: "پنیر پیتزا 180 گرمی هایلا",
    brand: "هایلا",
    brandEn:"halia",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "پنیر",
    price: 316000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 25,
},
{
    id: 88,
    productImage: img88,
    productName: "پنیر تاپینگ پیتزا 500 گرمی هایلا",
    brand: "هایلا",
    brandEn:"halia",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "پنیر",
    price: 773000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 25,
},
{
    id: 89,
    productImage: img89,
    productName: "تاپینگ پیتزا رنده شده 500 گرمی دالیا",
    brand: "دالیا",
    brandEn:"dalia",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "پنیر",
    price: 650000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 39,
},

{
    id: 90,
    productImage: img90,
    productName: "شیر پرچرب 1لیتری  رامک",
    brand: "رامک",
    brandEn: "ramak",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "شیر",
    price: 140000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 91,
    productImage: img91,
    productName: "شیر پر چرب  200 سی سی رامک",
    brand: "رامک",
    brandEn: "ramak",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "شیر",
    price: 50000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 10,
},
{
    id: 92,
    productImage: img92,
    productName: "شیر کاکائو  200 سی سی رامک",
    brand: "رامک",
    brandEn: "ramak",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "شیر",
    price: 65000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 10,
},
{
    id: 93,
    productImage: img93,
    productName: "خامه صبحانه 200 گرمی رامک",
    brand: "رامک",
    brandEn: "ramak",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "خامه",
    price: 150000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 10,
},
{
    id: 94,
    productImage: img94,
    productName: "شیر  نیم چرب 1 لیتری  رامک",
    brand: "رامک",
    brandEn: "ramak",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "شیر",
    price: 130000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 95,
    productImage: img95,
    productName: "پنیر سفید پروبیوتیک  400 گرمی رامک",
    brand: "رامک",
    brandEn: "ramak",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "پنیر",
    price: 230000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 10,
},
{
    id: 96,
    productImage: img96,
    productName: "شیر کم چرب  200 سی سی رامک",
    brand: "رامک",
    brandEn: "ramak",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "شیر",
    price: 50000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 10,
},
{
    id: 97,
    productImage: img97,
    productName: "کره محلی 50 گرمی رامک",
    brand: "رامک",
    brandEn: "ramak",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "کره",
    price: 70000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 0,
},
{
    id: 98,
    productImage: img98,
    productName: "ماست موسیر 250 گرمی رامک",
    brand: "رامک",
    brandEn: "ramak",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "ماست",
    price: 100000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 10,
},
{
    id: 99,
    productImage: img99,
    productName: "شیر پر چرب 1 لیتری  رامک",
    brand: "رامک",
    brandEn: "ramak",
    categories: "مواد غذایی",
    category: "foodStuffs",
    batchType: "لبنیات",
    Type: "شیر",
    price: 170000,
    get isOff() { return !this.offPercent },
    get priceOffer() {
        return (this.price - (this.price / 100) * this.offPercent)
    },
    date: dateItem,
    selerCount: randomSelerCount,

    offPercent: 10,
},

]
