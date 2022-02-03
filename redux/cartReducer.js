import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [{
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
            offPercent:30,
            count:2
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
                offPercent:40,
                count:2

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
                selerCount: 5,

                offPercent:40,
                count:2

            }],
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
    },
});

export const { addToCart, decreaseItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;