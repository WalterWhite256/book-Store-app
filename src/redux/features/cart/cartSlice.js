import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';  // ✅ Correct import

const initialState = {
    cartItem: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItem.find(item => item._id === action.payload._id);
            if (!existingItem) {
                state.cartItem.push(action.payload);

                // ✅ Correct SweetAlert2 usage
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    title: "Item added successfully!",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
            } else {
                Swal.fire({
                    icon: "warning",
                    title: "Item already exists!",
                    timer: 2000,
                    showConfirmButton: false
                });
            }
        },
        removeFromCart : (state, action)=>{
            state.cartItem = state.cartItem.filter(item=>item._id !== action.payload._id)
        },
        clearCart: (state)=>{
            state.cartItem = []
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
