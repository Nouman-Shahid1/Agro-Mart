import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/config";

// **Fetch all orders**
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/order/orders");
      return response.data; // Assuming response contains an array of orders
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **Save a new order**
export const saveOrder = createAsyncThunk(
  "orders/saveOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/order/new-order", orderData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data; // Assuming response contains the created order
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

// **Update an order**
export const updateOrder = createAsyncThunk(
  "orders/updateOrder",
  async ({ id, orderData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/orders/${id}`, orderData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { id, ...response.data }; // Return the updated order
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

// **Delete an order**
export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/orders/${id}`);
      return id; // Return the ID of the deleted order
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **Orders Slice**
const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [], // List of orders
    loading: false, // Loading state
    error: null, // Error state
  },
  reducers: {}, // Additional reducers if needed
  extraReducers: (builder) => {
    builder
      // Fetch All Orders
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload; // Update state with fetched orders
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Save a New Order
      .addCase(saveOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload); // Add new order to the list
      })
      .addCase(saveOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update an Order
      .addCase(updateOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.orders.findIndex((order) => order.id === action.payload.id);
        if (index !== -1) {
          state.orders[index] = action.payload; // Update the order in the list
        }
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete an Order
      .addCase(deleteOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.filter((order) => order.id !== action.payload); // Remove the order from the list
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ordersSlice.reducer;
