import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  }
});

export const { addItem, incrementQuantity, decrementQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = state => state.cart.items;
export const selectCartTotal = state =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);


// Cart Slice(reducers):

// The cart slice typically handles synchronous actions like adding, incrementing, and decrementing items.These actions are straightforward and do not involve any asynchronous operations or side effects.


// Ex: Suppose you want to add an asynchronous action to the cart slice, like fetching cart items from a server.

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Asynchronous thunk action to fetch cart items
// export const fetchCartItems = createAsyncThunk(
//   'cart/fetchCartItems',
//   async () => {
//     const response = await fetch('/api/cart');
//     const data = await response.json();
//     return data;
//   }
// );

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     status: 'idle',
//     error: null
//   },
//   reducers: {
    // as above
  // },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchCartItems.pending, state => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCartItems.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchCartItems.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   }
// });



//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload.id);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;