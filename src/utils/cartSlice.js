import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[] //initial empty cart
    },
    reducers:{
        addItem: (state, action) => {
            const itemId = action.payload.card.info.id;
        
            // Check if the item is already in the cart
            const existingItem = state.items.find(item => item.card.info.id === itemId);
        
            if (existingItem) {
                // Increment quantity if the item already exists
                existingItem.quantity += 1;
            } else {
                // Add new item with quantity 1 if it doesn't exist
                state.items.push({ ...action.payload, quantity: 1 });
            }
        
            console.log(state.items); // Check updated cart items
        },
       
        increaseQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.card.info.id === itemId);
        
            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity if the item exists
            }
        },
        decreaseQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.card.info.id === itemId);
        
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1; // Decrement quantity if more than 1
                } else {
                    state.items = state.items.filter(item => item.card.info.id !== itemId); // Remove item from the cart if quantity becomes 0
                }
            }
        },
       
    }
})

export const {addItem,increaseQuantity,decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer;

