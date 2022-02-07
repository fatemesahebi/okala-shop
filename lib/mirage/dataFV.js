import img1 from "../../public/images/FV1.png"
import img2 from "../../public/images/FV2.png"
import img3 from "../../public/images/FV3.png"
import img4 from "../../public/images/FV4.png"
import img5 from "../../public/images/FV5.png"
import img6 from "../../public/images/FV6.png"
import img7 from "../../public/images/FV7.png"
import img8 from "../../public/images/FV8.png"
import img9 from "../../public/images/FV9.png"
import img10 from "../../public/images/FV10.png"
import img11 from "../../public/images/FV11.png"
import img12 from "../../public/images/FV12.png"
import img13 from "../../public/images/FV13.png"
import img14 from "../../public/images/FV14.png"
import img15 from "../../public/images/FV15.png"
import img16 from "../../public/images/FV16.png"
import img17 from "../../public/images/FV17.png"
import img18 from "../../public/images/FV18.png"
import img19 from "../../public/images/FV19.png"
import img20 from "../../public/images/FV20.png"
import img21 from "../../public/images/FV21.png"
import img22 from "../../public/images/FV22.png"
import img23 from "../../public/images/FV23.png"
import img24 from "../../public/images/FV24.png"
import img25 from "../../public/images/FV25.png"
import img26 from "../../public/images/FV26.png"
import img27 from "../../public/images/FV27.png"
import img28 from "../../public/images/FV28.png"
import img29 from "../../public/images/FV29.png"
import img30 from "../../public/images/FV30.png"
import img31 from "../../public/images/FV31.png"
import img32 from "../../public/images/FV32.png"
import img33 from "../../public/images/FV33.png"
import img34 from "../../public/images/FV34.png"
import img35 from "../../public/images/FV35.png"
import img36 from "../../public/images/FV36.png"
import img37 from "../../public/images/FV37.png"
import img38 from "../../public/images/FV38.png"
import img39 from "../../public/images/FV39.png"
import img40 from "../../public/images/FV40.png"
import img41 from "../../public/images/FV41.png"
import img42 from "../../public/images/FV42.png"
import img43 from "../../public/images/FV43.png"
import img44 from "../../public/images/FV44.png"
import img45 from "../../public/images/FV45.png"
import img46 from "../../public/images/FV46.png"

import img47 from "../../public/images/10.png"
import img48 from "../../public/images/13.png"
import img49 from "../../public/images/18.png"
import img049 from "../../public/images/19.png"
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


const randomSelerCount= Math.floor(Math.random()*100)
const dateItem=new Date()
export const FruitsVegetables =[
    {
        id: 1,
        productImage: img1,
        productName: "تره خشک 50 گرمی کرالیچین",
        brand:"کرالیچین",
        categories:"میوه و سبزیجات",
        batchType:"سبزی",
        Type:"سبزی خشک",
        price: 79000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 2,
        productImage: img2,
        productName: "مرزه خشک 60 گرمی کرالیچین",
        brand:"کرالیچین",
        categories:"میوه و سبزیجات",
        batchType:"سبزی",
        Type:"سبزی خشک",
        price: 105000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 3,
        productImage: img3,
        productName: "سبزی کوکو خشک 70 گرمی ناردون",
        brand:"ناردون",
        categories:"میوه و سبزیجات",
        batchType:"سبزی",
        Type:"سبزی خشک",
        price: 188000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 35,
    },
    {
        id: 4,
        productImage: img4,
        productName: "سبزی قورمه خشک 70 گرمی ناردون",
        brand:"ناردون",
        categories:"میوه و سبزیجات",
        batchType:"سبزی",
        Type:"سبزی خشک",
        price: 188000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 35,
    },
    {
        id: 5,
        productImage: img5,
        productName: "سبزی آش خشک سلفون 70 گرمی خشک پاک",
        brand:"خشک پاک",
        categories:"میوه و سبزیجات",
        batchType:"سبزی",
        Type:"سبزی خشک",
        price: 145000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 6,
        productImage: img6,
        productName: "سبزی دلمه 70گرمی برتر",
        brand:"برتر",
        categories:"میوه و سبزیجات",
        batchType:"سبزی",
        Type:"سبزی خشک",
        price: 170000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 7,
        productImage: img7,
        productName: "سبزی قورمه منجمد 400 گرمی نوبر سبز",
        brand:"نوبر سبز",
        categories:"میوه و سبزیجات",
        batchType:"سبزی",
        Type:"سبزیجات منجمد",
        price: 234500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 8,
        productImage: img8,
        productName: "سبزی آش منجمد 400 گرمی نوبر سبز",
        brand:"نوبر سبز",
        categories:"میوه و سبزیجات",
        batchType:"سبزی",
        Type:"سبزیجات منجمد",
        price: 234500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 9,
        productImage: img9,
        productName: "مخلوط وجینا(نخودفرنگی، هویج و سیب زمینی) منجمد 400 گرمی  نوبر سبز",
        brand:"نوبر سبز",
        categories:"میوه و سبزیجات",
        batchType:"سبزی",
        Type:"سبزیجات منجمد",
        price: 239500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 10,
        productImage: img10,
        productName: "مخلوط سبزیجات زیبا 400 گرمی  نوبر سبز",
        brand:"نوبر سبز",
        categories:"میوه و سبزیجات",
        batchType:"سبزی",
        Type:"سبزیجات منجمد",
        price: 329000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 11,
        productImage: img11,
        productName: "ذرت دان شده منجمد400گرمی  نوبر سبز",
        brand:"نوبر سبز",
        categories:"میوه و سبزیجات",
        batchType:"سبزی",
        Type:"سبزیجات منجمد",
        price: 365000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 12,
        productImage: img12,
        productName: "کلم سفید بلوط (یک عدد متوسط)",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"صیفی جات",
        price: 156250,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 13,
        productImage: img13,
        productName: " هویج 1 کیلویی بلوط(تعداد تقریبی 17 عدد در هر بسته)",
        brand:" بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:" صیفی جات",
        price: 150000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 14,
        productImage: img14,
        productName: "کلم بروکلی یک عدد متوسط نصر خاتم",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"صیفی جات",
        price: 162000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 15,
        productImage: img15,
        productName: "گریپ فروت یک کیلوگرمی بلوط( تعداد 5 تا 7 عدد در هر بسته)",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 185000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 16,
        productImage: img16,
        productName: "گوجه فرنگی بوته ای 1 کیلویی بلوط(تعداد تقریبی 9 عدد در هر بسته)",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"صیفی جات",
        price: 265000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 17,
        productImage: img17,
        productName: "آلبالو با هسته منجمد 400 گرمی نوبر سبز",
        brand:"نوبر سبز",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه منجمد",
        price: 295000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 18,
        productImage: img18,
        productName: "بادمجان گلخانه‌ای 1کیلویی بلوط(تعداد تقریبی 7 عدد در هر بسته)",
        brand:" بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"صیفی جات",
        price: 301250,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 19,
        productImage: img19,
        productName: " انگور شاهرودی درجه یک 1 کیلویی بلوط",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:" میوه تازه",
        price: 331250,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 20,
        productImage: img20,
        productName: "شلغم یک کیلویی بلوط(تعداد 6 تا 8 عدد در هر بسته)",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:" صیفی جات",
        price: 373750,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 21,
        productImage: img21,
        productName: "موز اکوادور 1 کیلویی بلوط(تعداد تقریبی 5 عدد در هر بسته)",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:" میوه تازه",
        price: 506250,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 22,
        productImage: img22,
        productName: "فلفل شیرین تازه 250گرمی نصرخاتم",
        brand:" نصرخاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:" صیفی جات",
        price: 172000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 23,
        productImage: img23,
        productName: "نخود فرنگی منجمد400گرمی  نوبر سبز",
        brand:"نوبر سبز",
        categories:"میوه و سبزیجات",
        batchType:"سبزیجات خشک و منجمد",
        Type:"سبزیجات منجمد",
        price: 379500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 50,
    },
    {
        id: 24,
        productImage: img24,
        productName: "کاهو پیچ بلوط (یک عدد متوسط) ",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"صیفی جات",
        price: 181250,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 25,
        productImage: img25,
        productName: "پرتقال رسمی شمال آبگیری 1 کیلویی بلوط (تعداد 4 تا 6 عدد در هر بسته)",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:" میوه تازه",
        price: 198750,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 26,
        productImage: img26,
        productName: "فلفل دلمه رنگی 500 گرمی بلوط",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"صیفی جات",
        price: 211250,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 27,
        productImage: img27,
        productName: "پرتقال توسرخ یک کیلویی بلوط(تعداد6تا8عدد در هربسته)",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 306250,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 28,
        productImage: img28,
        productName: "سیر خشک 500 گرمی بلوط (تعداد تقریبی 7 عدد در هر بسته)",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"صیفی جات",
        price: 488750,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 29,
        productImage: img29,
        productName: "کدو حلوایی 2 کیلوگرمی بعلاوه منهای 500 گرم بلوط",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"صیفی جات",
        price: 531250,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 30,
        productImage: img30,
        productName: "خیار سالادی 1 کیلویی نصر خاتم",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه ",
        Type:"میوه تازه",
        price: 165000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 31,
        productImage: img31,
        productName: "کدوسبز فله درجه یک 1 کیلویی",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"صیفی جات",
        price: 229500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 10,
    },
    {
        id: 32,
        productImage: img32,
        productName: "کلم خرد شده 350 گرمی بامیکا",
        brand:"بامیکا",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"صیفی جات",
        price: 258500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 33,
        productImage: img33,
        productName: "مغر کاهو رسمی 250 گرمی بامیکا",
        brand:"بامیکا",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"صیفی جات",
        price: 172500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 34,
        productImage: img34,
        productName: "هویج توپی تازه 200 گرمی بامیکا",
        brand:"بامیکا",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:" صیفی جات",
        price: 190500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 35,
        productImage: img35,
        productName: "چای ترش 200 گرمی نصر خاتم",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 322500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 36,
        productImage: img36,
        productName: "سیب زمینی ارگانیک 1 کیلویی رضوانی",
        brand:"رضوانی",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"صیفی جات",
        price: 145000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 37,
        productImage: img37,
        productName: "آلوئه ورا بلوط (یک عدد متوسط)",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 90000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 38,
        productImage: img38,
        productName: "هلو زعفرانی ممتاز 1 کیلویی نصر خاتم",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 331500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 39,
        productImage: img39,
        productName: "هندوانه ممتاز 4کیلویی نصر خاتم",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 280000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 40,
        productImage: img40,
        productName: "انبه ممتاز 1 عدد متوسط نصر خاتم",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 412000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 41,
        productImage: img41,
        productName: "گوجه سبز 500 گرمی بلوط",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 215000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 33,
    },
    {
        id: 42,
        productImage: img42,
        productName: "هلو انجیری ممتاز 1کیلویی نصر خاتم",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 259500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 43,
        productImage: img43,
        productName: "سیب سبز یک کیلویی بلوط (تعداد تقریبی 8 عدد در هر بسته)",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 142500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 44,
        productImage: img44,
        productName: "زالزالک درجه یک 500گرمی بلوط",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 171500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 45,
        productImage: img45,
        productName: "گلابی شاه میوه ممتاز 1کیلویی نصر خاتم",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 292500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 11,
    },
    {
        id: 46,
        productImage: img46,
        productName: "شلیل انجیری یک کیلویی بلوط (تعداد تقریبی 11 عدد در هر بسته)",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 125000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 47,
        productImage: img47,
        productName: "پرتقال آبگیری 1کیلویی نصر خاتم",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 152000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 48,
        productImage: img48,
        productName: "میکس سوپ 400 گرمی نوبرسبز",
        brand:"نوبرسبز",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
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
        id: 49,
        productImage: img49,
        productName: "نارگیل پاک شده 1عدد متوسط نصر خاتم",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 474000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 50,
        productImage: img50,
        productName: "قارج اکونومی 400 گرمی نصر خاتم",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
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
        productImage: img51,
        productName: "قارچ دکمه ای درجه یک بسته بندی 400 گرمی بلوط",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 372500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 52,
        productImage: img52,
        productName: "پیاز زرد خوش قالب متوسط یک کیلویی بلوط",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 122500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 53,
        productImage: img53,
        productName: "سیب زمینی خوش قالب متوسط 2 کیلویی بلوط",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 323750,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 54,
        productImage: img54,
        productName: "آلبالو با هسته منجمد 400 گرمی نوبر سبز",
        brand:"نوبر سبز",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
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
        productImage: img55,
        productName: "سیب زمینی خوش قالب متوسط 1 کیلویی بلوط",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 182500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 55,
        productImage: img55,
        productName: "سیب زمینی خوش قالب متوسط 1 کیلویی بلوط",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 182500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 56,
        productImage: img56,
        productName: "خیار گلخانه ای 1 کیلویی بلوط",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 212500,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 57,
        productImage: img57,
        productName: "اسفناج خشک 100 گرمی ناردون",
        brand:"ناردون",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
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
        productImage: img58,
        productName: "پرتقال توسرخ یک کیلویی بلوط(تعداد6تا8عدد درهربسته)",
        brand:"بلوط",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 286250,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
    {
        id: 59,
        productImage: img59,
        productName: "ذرت دان شده منجمد400 گرمی نوبر سبز",
        brand:"نوبر سبز",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 365000,
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
        productImage: img049,
        productName: "نارگیل پاک شده 1عدد کوچک نصر خاتم",
        brand:"نصر خاتم",
        categories:"میوه و سبزیجات",
        batchType:"میوه",
        Type:"میوه تازه",
        price: 422000,
        get isOff(){ return !this.offPercent},
        get priceOffer(){
            return(this.price-(this.price/100) * this.offPercent)
        },
        date : dateItem,
        selerCount: randomSelerCount,

        offPercent: 0,
    },
]