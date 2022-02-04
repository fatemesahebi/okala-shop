
const randomSelerCount= Math.floor(Math.random()*100)
const dateItem=new Date()
export const specialOffer = [{
    id: 0,
    productImage:"https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F386696202F3002F300&w=256&q=75",
    productName:"دوغ بدون گاز نعناع  1.5 لیتری رامک",
    brand:"رامک",
    categories:"foodStuffs",
    price: 160000,
    get isOff(){ return !this.offPercent},
    get priceOffer(){
        return(this.price-(this.price/100) * this.offPercent)
    },
    date : dateItem,
    selerCount: randomSelerCount,

    offPercent: 19
},
    {
        id: 1,
        productImage:"https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F388639202F3002F300&w=256&q=75",
        productName:"نوار بهداشتی بالدار نازک متوسط 10 عددی نانسی",
        brand:"نانسی",
        categories:"cosmetics",
        price:215000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount:randomSelerCount,
        offPercent:30
    },
    {
        id: 2,
        productImage:"https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F344245202F3002F300&w=384&q=75",
        productName:"سفره یکبارمصرف تجزیه پذیر 50 متری  پتروکلین",
        brand:"پتروکلین",
        categories:"tools",
        price:498000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date :dateItem,
        selerCount:randomSelerCount,
        offPercent:40
    },
    {
        id: 3,
        productImage:"https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F161011202F3002F300&w=256&q=75",
        productName:"ابر جادویی 35 گرمی بریتکس",
        brand:"بریتکس",
        categories:"tools",
        price:330000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent:40
    },
    {
        id: 4,
        productImage:"https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F378106202F3002F300&w=384&q=75",
        productName:"شامپو بدن اسکراب سبز 280 گرمی گلرنگ",
        brand:"گلرنگ",
        categories:"cosmetics",
        price:231700,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent:20
    },
    {
        id: 5,
        productImage:"https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F288481202F3002F300&w=256&q=75",
        productName:"زعفران درجه یک مقدار 1 گرم مصطفوی",
        brand:"مصطفوی",
        categories:"foodStuffs",
        price:473000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent:25
    },
    {
        id: 6,
        productImage:"https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F255703202F3002F300&w=256&q=75",
        productName:"خرمای مضافتی طلایی 680 گرمی ساغر",
        brand:"ساغر",
        categories:"food",
        price:645000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent:40
    },
    {
        id: 7,
        productImage:"https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F45293202F3002F300&w=384&q=75",
        productName:"ناگت مرغ و قارچ 950 گرمی ب.آ",
        brand:"ب.آ",
        categories:"foodStuffs",
        price: 1058000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent:40
    },
    {
        id: 8,
        productImage:"https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F380870202F3002F300&w=384&q=75",
        productName:"نرم کننده موهای خشک 200 میلی لیتری دیپ سنس",
        brand:"دیپ سنس",
        categories:"cosmetics",
        price:278800,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 30
    },
    {
        id: 9,
        productImage:"https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F377957202F3002F300&w=256&q=75",
        productName:"خامه کاکائو 100 گرمی پاکبان",
        brand:"پاکبان",
        categories:"foodStuffs",
        price: 70000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 30
    },
    {
        id: 10,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390670202F1502F150&w=256&q=75",
        productName: "پرتقال آبگیری 1کیلویی نصر خاتم",
        brand:"نصر خاتم",
        categories:"fruitsVegetables",
        price: 152000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 11,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390672202F1502F150&w=256&q=75",
        productName: "ماسک کودک سه لایه 50 عددی بارمان",
        brand:"بارمان",
        categories:"cosmetics",
        price: 500000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 12,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390648202F1502F150&w=256&q=75",
        productName: "خرمای ربی 450 گرمی ساغر",
        brand:"ساغر",
        categories:"food",
        price: 570000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 13,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390681202F1502F150&w=256&q=75",
        productName: "میکس سوپ 400 گرمی نوبرسبز",
        brand:"نوبرسبز",
        categories:"fruitsVegetables",
        price: 385000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 55
    },
    {
        id: 14,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390645202F1502F150&w=256&q=75",
        productName: "مایع سفید کننده سطوح و البسه اسنو 2 لیتری دامستوس",
        brand:"دامستوس",
        categories:"cosmetics",
        price: 630000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10
    },
    {
        id: 15,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390609202F1502F150&w=256&q=75",
        productName: "پک اسپری چندمنظوره 750 میلی لیتری دامستوس",
        brand:"دامستوس",
        categories:"cosmetics",
        price: "880,000",
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 20
    },
    {
        id: 16,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390610202F1502F150&w=256&q=75",
        productName: "پک اسپری پاک کننده چندمنظوره سطوح750میلی لیتری سیف",
        brand:"سیف",
        categories:"cosmetics",
        price: 880000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 20
    },
    {
        id: 17,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390608202F1502F150&w=256&q=75",
        productName: "پک پاک کننده چندمنظوره 750میلی لیتری سیف",
        brand:"سیف",
        categories:"cosmetics",
        price: 620000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 20
    },
    {
        id: 18,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390370202F1502F150&w=256&q=75",
        productName: "نارگیل پاک شده 1عدد متوسط نصر خاتم",
        brand:"نصر خاتم",
        categories:"fruitsVegetables",
        price: 474000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 19,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390371202F1502F150&w=256&q=75",
        productName: "نارگیل پاک شده 1عدد کوچک نصر خاتم",
        brand:"نصر خاتم",
        categories:"fruitsVegetables",
        price: "422,000",
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 20,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F389799202F1502F150&w=256&q=75",
        productName: "شکر سفید یک کیلویی ناردون",
        brand:"ناردون",
        categories:"food",
        price: 163500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",

    },
    {
        id: 21,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F380704202F1502F150&w=256&q=75",
        productName: "کره حیوانی 100 گرمی میهن",
        brand:"میهن",
        categories:"foodStuffs",
        price: 130000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 22,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F45483202F5002F500&w=256&q=75",
        productName: "روغن آفتابگردان غنی شده1800 گرمی اویلا",
        brand:"اویلا",
        categories:"food",
        price: 302500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 23,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F256227202F5002F500&w=256&q=75",
        productName: "تیویکاشیری نارگیلی 85 گرمی  ویتانا",
        brand:"ویتانا",
        categories:"foodStuffs",
        price: 50000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 24,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F164255202F5002F500&w=256&q=75",
        productName: "بادام زمینی نمکی 40 گرمی چی توز",
        brand:"چی توز",
        categories:"food",
        price: 60000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 25,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F380704202F1502F150&w=256&q=75",
        productName: "کره حیوانی 50 گرمی میهن",
        brand:"میهن",
        categories:"foodStuffs",
        price: 70000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 26,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F234145202F5002F500&w=256&q=75",
        productName: " ویفر رنگینک 15 گرمی گرجی",
        brand:"گرجی",
        categories:"food",
        price: 10000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 27,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F309731202F5002F500&w=256&q=75",
        productName: "شیر کم چرب 955 میلی لیتری کاله",
        brand:"کاله",
        categories:"foodStuffs",
        price: 125000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 28,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F120473202F5002F500&w=256&q=75",
        productName: "نوشابه پت 300 سی سی کوکاکولا",
        brand:"کوکاکولا",
        categories:"drinks",
        price: 50000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 20
    },
    {
        id: 29,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F176882202F5002F500&w=256&q=75",
        productName: "شیر کم چرب فرادما 1 لیتری پگاه",
        brand:"پگاه",
        categories:"foodStuffs",
        price: 150000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 30,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390681202F1502F150&w=384&q=75",
        productName: "میکس سوپ 400 گرمی نوبرسبز",
        brand:"نوبرسبز",
        categories:"fruitsVegetables",
        price: 385000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 55
    },
    {
        id: 31,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F163741202F1502F150&w=384&q=75",
        productName: "ابر و اسکاچ  ساده 2 عددی رزال",
        brand:"رزال",
        categories:"tools",
        price: 115000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 50,
    },
    {
        id: 32,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F200608202F1502F150&w=384&q=75",
        productName: "کاندوم فضایی دکمه دار بسته 1 عددی شادو",
        brand:"شادو",
        categories:"cosmetics",
        price: 330000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 50,
    },
    {
        id: 33,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F200619202F1502F150&w=384&q=75",
        productName: "کاندوم فضایی طوقی بسته 1 عددی ایکس دریم",
        brand:"دریم",
        categories:"cosmetics",
        price: 330000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 50,
    },
    {
        id: 34,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F381504202F1502F150&w=384&q=75",
        productName: "سینی بیضی طرح ایتالیا 5002 مهروز",
        brand:"مهروز",
        categories:"tools",
        price: 588000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 50,
    },
    {
        id: 35,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F343149202F1502F150&w=384&q=75",
        productName: "کاندوم بزرگ کننده بسته 12 عددی ایکس دریم",
        brand:"دریم",
        categories:"cosmetics",
        price: 485000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 50,
    },
    {
        id: 36,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F367432202F1502F150&w=384&q=75",
        productName: "کالباس مارتادلا 40 500 گرمی 32",
        brand:"32",
        categories:"foodStuffs",
        price: 430000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 50,
    },
    {
        id: 37,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F138238202F1502F150&w=384&q=75",
        productName: "نان پیتزا نیمه آماده منجمد ساده 480 گرمی 206 ",
        brand:"206",
        categories:"food",
        price: 186000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 50,
    },
    {
        id: 38,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F344749202F1502F150&w=384&q=75",
        productName: "نان یوفکا نیمه آماده منجمد مثلثی 450 گرمی 206",
        brand:"206",
        categories:"food",
        price: 410000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 45,
    },
    {
        id: 39,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F367339202F1502F150&w=384&q=75",
        productName: "تاپینگ پینزا 180 گرمی 206",
        brand:"206",
        categories:"foodStuffs",
        price: 319700,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 45,
    },
    {
        id: 40,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F134233202F1502F150&w=384&q=75",
        productName: "چای ایرانی ساده 350 گرمی بلوط",
        brand:"بلوط",
        categories:"drinks",
        price: 499000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 45,
    },
    {
        id: 41,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F120729202F1502F150&w=384&q=75",
        productName: "چای قرمز آسام طلاکوب 500 گرمی شهرزاد",
        brand:"شهرزاد",
        categories:"drinks",
        price: 1499500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 42,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F342054202F1502F150&w=384&q=75",
        productName: "چای تی بگ معطر 25 عددی چای احمد",
        brand:"احمد",
        categories:"drinks",
        price: 179000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 43,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F342942202F1502F150&w=384&q=75",
        productName: "دمنوش میوه ای کنار 15 عددی آرسیس لایف",
        brand:"آرسیس لایف",
        categories:"drinks",
        price: 500000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 44,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F341567202F1502F150&w=384&q=75",
        productName: "چای صبحانه معطر 500 گرمی شهرزاد",
        brand:"شهرزاد",
        categories:"drinks",
        price: 1199000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 45,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F342053202F1502F150&w=384&q=75",
        productName: "چای تی بگ هل 25 عددی چای احمد",
        brand:"احمد",
        categories:"drinks",
        price: 179000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 46,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F366353202F1502F150&w=384&q=75",
        productName: "دمنوش چای ترش 12 عددی سحرخیز",
        brand:"سحرخیز",
        categories:"drinks",
        price: 516000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 47,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F162809202F1502F150&w=384&q=75",
        productName: "تی بگ ارل گری 25 عددی 50 گرمی چای احمد",
        brand:"احمد",
        categories:"drinks",
        price: 179000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 48,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F120901202F1502F150&w=384&q=75",
        productName: "چای تی بگ رویال لفافدار 25 عددی شهرزاد",
        brand:"شهرزاد",
        categories:"drinks",
        price: 277800,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 49,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390545202F1502F150&w=384&q=75",
        productName: "چای تی بگ سبز با پرکهای لیمو 25 عددی شهرزاد",
        brand:"شهرزاد",
        categories:"drinks",
        price: 259900,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 50,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F381960202F1502F150&w=384&q=75",
        productName: "قارج اکونومی 400 گرمی نصر خاتم",
        brand:"نصر خاتم",
        categories:"fruitsVegetables",
        price: 319000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 15,
    },
    {
        id: 51,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F321045202F1502F150&w=384&q=75",
        productName: "قارچ دکمه ای درجه یک بسته بندی 400 گرمی بلوط",
        brand:"بلوط",
        categories:"fruitsVegetables",
        price: 372500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 52,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F177415202F1502F150&w=384&q=75",
        productName: "پیاز زرد خوش قالب متوسط یک کیلویی بلوط",
        brand:"بلوط",
        categories:"fruitsVegetables",
        price: 122500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 53,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F177409202F1502F150&w=384&q=75",
        productName: "سیب زمینی خوش قالب متوسط 2 کیلویی بلوط",
        brand:"بلوط",
        categories:"fruitsVegetables",
        price: 323750,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 54,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F388884202F1502F150&w=384&q=75",
        productName: "آلبالو با هسته منجمد 400 گرمی نوبر سبز",
        brand:"نوبر سبز",
        categories:"fruitsVegetables",
        price: 295500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 55,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F177411202F1502F150&w=384&q=75",
        productName: "سیب زمینی خوش قالب متوسط 1 کیلویی بلوط",
        brand:"بلوط",
        categories:"fruitsVegetables",
        price: 182500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 56,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F177412202F1502F150&w=384&q=75",
        productName: "خیار گلخانه ای 1 کیلویی بلوط",
        brand:"بلوط",
        categories:"fruitsVegetables",
        price: 212500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 57,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390391202F1502F150&w=384&q=75",
        productName: "اسفناج خشک 100 گرمی ناردون",
        brand:"ناردون",
        categories:"fruitsVegetables",
        price: 245000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 35,
    },
    {
        id: 58,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F266710202F1502F150&w=384&q=75",
        productName: "پرتقال توسرخ یک کیلویی بلوط(تعداد6تا8عدد درهربسته)",
        brand:"بلوط",
        categories:"fruitsVegetables",
        price: 286250,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 59,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F388015202F1502F150&w=384&q=75",
        productName: "ذرت دان شده منجمد400 گرمی نوبر سبز",
        brand:"نوبر سبز",
        categories:"fruitsVegetables",
        price: "365,000",
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 60,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F132702202F1502F150&w=384&q=75",
        productName: "نوار بهداشتی بالدار مشبک 10 عددی بیتا",
        brand:"بیتا",
        categories:"Cosmetics",
        price: 180000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 30,
    },
    {
        id: 61,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F366687202F1502F150&w=384&q=75",
        productName: "نوار بهداشتی بالدار بزرگ روزانه 10 عددی پنبه ریز ",
        brand:"پنبه ریز",
        categories:"Cosmetics",
        price: 154000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 62,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F177842202F1502F150&w=384&q=75",
        productName: "پد بی اختیاری اچ بی ال 5 عددی تافته",
        brand:"تافته",
        categories:"Cosmetics",
        price: 200000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 63,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F382108202F1502F150&w=384&q=75",
        productName: "نواربهداشتی بالدارفلاف نازک خیلی بزرگ10عددی نانسی",
        brand:"نانسی",
        categories:"Cosmetics",
        price: 209000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 30,
    },
    {
        id: 64,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F199587202F1502F150&w=384&q=75",
        productName: "نوار بهداشتی بالدار اولترا متوسط 10عددی مولپد",
        brand:"مولپد",
        categories:"Cosmetics",
        price: 228000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 65,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F344791202F1502F150&w=384&q=75",
        productName: "نوار بهداشتی بالدار بزرگ نرمال10 عددی پنبه ریز",
        brand:"پنبه ریز",
        categories:"Cosmetics",
        price: 142000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 66,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F388630202F1502F150&w=384&q=75",
        productName: "نوار بهداشتی بالدار مشبک بزرگ 10 عددی نانسی",
        brand:"نانسی",
        categories:"Cosmetics",
        price: 159000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 30,
    },
    {
        id: 67,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F366688202F1502F150&w=384&q=75",
        productName: "نوار بهداشتی بالدار بزرگ روزانه 10 عددی پنبه ریز",
        brand:"پنبه ریز",
        categories:"Cosmetics",
        price: 161000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 68,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F388639202F1502F150&w=256&q=75",
        productName: "نوار بهداشتی بالدار نازک متوسط 10 عددی نانسی",
        brand:"نانسی",
        categories:"Cosmetics",
        price: 215000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 30,
    },
    {
        id: 69,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F177376202F1502F150&w=384&q=75",
        productName: "نواربهداشتی نازک کتانی ویژه شب تافته",
        brand:"تافته",
        categories:"Cosmetics",
        price: 187500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 70,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F343582202F1502F150&w=384&q=75",
        productName: " کافی میکس 1×3 بسته24عددی 18 گرمی مولتی کافه",
        brand:"مولتی کافه",
        categories:"drinks",
        price: 744000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 71,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F380450202F1502F150&w=384&q=75",
        productName: "جعبه پودر موکا 10 عددی اکشن",
        brand:"اکشن",
        categories:"drinks",
        price: 500000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 20,
    },
    {
        id: 72,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F343584202F1502F150&w=384&q=75",
        productName: "کافی میکس کارمل 1×4 بسته 24عددی  18گرمی مولتی کافه",
        brand:"مولتی کافه",
        categories:"drinks",
        price: 684000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 5,
    },
    {
        id: 73,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F343581202F1502F150&w=384&q=75",
        productName: " کافی میکس 1×2 بدون شکر 24 عددی 14 گرمی مولتی کافه",
        brand:"مولتی کافه",
        categories:"drinks",
        price: 875000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 5,
    },
    {
        id: 74,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F344068202F1502F150&w=384&q=75",
        productName: "پودر قهوه فوری 3 در 1  360گرمی مادلین",
        brand:"مادلین",
        categories:"drinks",
        price: 610000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 25,
    },
    {
        id: 75,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F309959202F1502F150&w=384&q=75",
        productName: "کافی میکس 1×2 بدون شکر  14 گرمی مولتی کافه",
        brand:"مولتی کافه",
        categories:"drinks",
        price: 489000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 5,
    },
    {
        id: 76,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F344070202F1502F150&w=384&q=75",
        productName: "پودر کاپوچینو با طعم کارامل 400 گرمی مادلین",
        brand:"مادلین",
        categories:"drinks",
        price: 790000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 25,
    },
    {
        id: 77,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F388604202F1502F150&w=384&q=75",
        productName: "قهوه کلاسیک شیشه ای 100 گرمی مولتی کافه",
        brand:"مولتی کافه",
        categories:"drinks",
        price: 696000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 5,
    },
    {
        id: 78,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F178653202F1502F150&w=384&q=75",
        productName: "پودر کاکائو نسکوییک 15*24 360 گرمی نستله",
        brand:"نستله",
        categories:"drinks",
        price: 675000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 79,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F390454202F1502F150&w=384&q=75",
        productName: " کافی کریمر 200 گرمی مولتی میت",
        brand:"مولتی میت",
        categories:"drinks",
        price: 395000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 5,
    },
    {
        id: 80,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F344727202F1502F150&w=384&q=75",
        productName: "پنیر پیتزا رنده شده 2000 گرمی 206",
        brand:"206",
        categories:"foodStuffs",
        price: 2677500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 45,
    },
    {
        id: 81,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F367339202F1502F150&w=384&q=75",
        productName: "تاپینگ پینزا 180 گرمی 206",
        brand:"206",
        categories:"foodStuffs",
        price: 319700,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 45,
    },
    {
        id: 82,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F367340202F1502F150&w=384&q=75",
        productName: "تاپینگ پیتزا 500 گرمی 206",
        brand:"206",
        categories:"foodStuffs",
        price: 777600,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 45
    },
    {
        id: 83,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F367412202F1502F150&w=384&q=75",
        productName: "تاپینگ پیتزا 1000 گرمی 206",
        brand:"206",
        categories:"foodStuffs",
        price: 1411200,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 45,
    },
    {
        id: 84,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F381665202F1502F150&w=384&q=75",
        productName: "پنیر پارمسان رنده شده 100 گرمی کاله",
        brand:"کاله",
        categories:"foodStuffs",
        price: 438000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 85,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F266478202F1502F150&w=384&q=75",
        productName: "پنیر موزارلا رنده شده 500 گرمی دالیا",
        brand:"دالیا",
        categories:"foodStuffs",
        price: 780000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 27,
    },
    {
        id: 86,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F367842202F1502F150&w=384&q=75",
        productName: "پنیر موزارلا 2000 گرمی 206",
        brand:"206",
        categories:"foodStuffs",
        price: 2865000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 45,
    },
    {
        id: 87,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F377974202F1502F150&w=384&q=75",
        productName: "پنیر پیتزا 180 گرمی هایلا",
        brand:"هایلا",
        categories:"foodStuffs",
        price: 316000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 25,
    },
    {
        id: 88,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F377979202F1502F150&w=384&q=75",
        productName: "پنیر تاپینگ پیتزا 500 گرمی هایلا",
        brand:"هایلا",
        categories:"foodStuffs",
        price: 773000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 25,
    },
    {
        id: 89,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F266485202F1502F150&w=384&q=75",
        productName: "تاپینگ پیتزا رنده شده 500 گرمی دالیا",
        brand:"دالیا",
        categories:"foodStuffs",
        price: 650000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 39,
    },

    {
        id: 90,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F386690202F1502F150&w=384&q=75",
        productName: "شیر پرچرب 1لیتری  رامک",
        brand:"رامک",
        categories:"foodStuffs",
        price: 140000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 91,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F201212202F1502F150&w=384&q=75",
        productName: "شیر پر چرب  200 سی سی رامک",
        brand:"رامک",
        categories:"foodStuffs",
        price: 50000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 92,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F201224202F1502F150&w=384&q=75",
        productName: "شیر کاکائو  200 سی سی رامک",
        brand:"رامک",
        categories:"foodStuffs",
        price: 65000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 93,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F200935202F1502F150&w=384&q=75",
        productName: "خامه صبحانه 200 گرمی رامک",
        brand:"رامک",
        categories:"foodStuffs",
        price: 150000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 94,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F386686202F1502F150&w=384&q=75",
        productName: "شیر  نیم چرب 1 لیتری  رامک",
        brand:"رامک",
        categories:"foodStuffs",
        price: 130000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 95,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F386684202F1502F150&w=384&q=75",
        productName: "پنیر سفید پروبیوتیک  400 گرمی رامک",
        brand:"رامک",
        categories:"foodStuffs",
        price: 230000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 96,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F201211202F1502F150&w=384&q=75",
        productName: "شیر کم چرب  200 سی سی رامک",
        brand:"رامک",
        categories:"foodStuffs",
        price: 50000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 97,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F366529202F1502F150&w=384&q=75",
        productName: "کره محلی 50 گرمی رامک",
        brand:"رامک",
        categories:"foodStuffs",
        price: 70000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: "",
    },
    {
        id: 98,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F386685202F1502F150&w=384&q=75",
        productName: "ماست موسیر 250 گرمی رامک",
        brand:"رامک",
        categories:"foodStuffs",
        price: 100000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 99,
        productImage: "https://new.okala.com/_next/image?url=https3A2F2Fcdn.okala.com2Fmedia2Findex2FProduct2F201238202F1502F150&w=384&q=75",
        productName: "شیر پر چرب 1 لیتری  رامک",
        brand:"رامک",
        categories:"foodStuffs",
        price: 170000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    }
]
