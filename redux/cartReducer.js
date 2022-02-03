import { createSlice } from "@reduxjs/toolkit";
import img0 from "../public/images/0.png";
import img1 from "../public/images/1.png";
import img2 from "../public/images/2.png";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [
            {
                id: 0,
                count:1,
                productImage:img0,
                productName:"دوغ بدون گاز نعناع  1.5 لیتری رامک",
                brand:"رامک",
                categories:"foodStuffs",
                price: 160000,
                get isOff(){ return !this.offPercent},
                get priceOffer(){
                    return(this.price-(this.price/100) * this.offPercent)
                },
                selerCount: 12,

                offPercent: 0
            },
            {
                id: 1,
                count:7,
                productImage: img1,
                productName:"نوار بهداشتی بالدار نازک متوسط 10 عددی نانسی",
                brand:"نانسی",
                categories:"cosmetics",
                price:215000,
                get isOff(){ return !this.offPercent},
                get priceOffer(){
                    return(this.price-(this.price/100) * this.offPercent)
                },
                selerCount:23,
                offPercent:30
            },
            {
                id: 2,
                count:3,
                productImage: img2,
                productName:"سفره یکبارمصرف تجزیه پذیر 50 متری  پتروکلین",
                brand:"پتروکلین",
                categories:"tools",
                price:498000,
                get isOff(){ return !this.offPercent},
                get priceOffer(){
                    return(this.price-(this.price/100) * this.offPercent)
                },
                selerCount:76,
                offPercent:40
            }
        ],
    },
    reducers: {
        addToCart: (state, action) => {
            const p = state.items.findIndex((item) => item.id === action.payload.id);
            if (p >= 0) {
                state.items[p].count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
        },
        decreaseItem: (state, action) => {
            const p = state.items.findIndex((item) => item.id === action.payload.id);
            if (p > -1) {
                let value = state.items[p].count;
                if (value - 1) {
                    state.items[p].count = state.items[p].count - 1;
                } else {
                    state.items.splice(p, 1);
                }
            }
        },
        removeItem: (state, action) => {
            const p = state.items.findIndex((item) => item.id === action.payload.id);
            if (p > -1) {
                state.items.splice(p, 1);
            }
        },
        removeAllItem:(state,action)=>{
            state.items=[]
        }
    },
});

export const { addToCart, decreaseItem, removeItem,removeAllItem } = CartSlice.actions;
export default CartSlice.reducer;