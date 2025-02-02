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

export const fetchOrderDetail = createAsyncThunk(
  "orders/fetchOrderDetail",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/order/order-detail/${id}`);
      return response.data; // Assuming response contains the order detail
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const fetchSellerStats = createAsyncThunk(
  "orders/fetchSellerStats",
  async (sellerId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/order/seller-stats/${sellerId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchSellerMonthlyStats = createAsyncThunk(
  "orders/fetchSellerMonthlyStats",
  async (sellerId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/order/monthly-stats/${sellerId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const saveOrder = createAsyncThunk(
    "orders/saveOrder",
    async (orderData, { rejectWithValue }) => {
      try {
        const response = await axios.post("/order/new-order", orderData);
        return response.data; // Ensure this matches the response structure
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
export const fetchSellerOrders = createAsyncThunk(
  "orders/fetchSellerOrders",
  async (sellerId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/order/seller-orders/${sellerId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const fetchBuyerOrders = createAsyncThunk(
  "orders/fetchBuyerOrders",
  async (buyerId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/order/buyer-orders/${buyerId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const updateOrderStatus = createAsyncThunk(
  "orders/updateOrderStatus",
  async ({ id, orderStatus }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/order/update-status/${id}`, { orderStatus });
      return { id, orderStatus: response.data.orderStatus };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **Delete an order**
export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/order/delete-order/${id}`);
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
    sellerOrders: [],
    buyerOrders: [],
    sellerStats: null, // Store overall seller stats
    sellerMonthlyStats: [],
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
      .addCase(fetchOrderDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetail = action.payload; // Update state with fetched order detail
      })
      .addCase(fetchOrderDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSellerOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.sellerOrders = action.payload;
      })
      .addCase(fetchSellerOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSellerStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerStats.fulfilled, (state, action) => {
        state.loading = false;
        state.sellerStats = action.payload; // Store overall seller stats
      })
      .addCase(fetchSellerStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Fetch Seller Monthly Stats
      .addCase(fetchSellerMonthlyStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerMonthlyStats.fulfilled, (state, action) => {
        state.loading = false;
        state.sellerMonthlyStats = action.payload; // Store monthly stats
      })
      .addCase(fetchSellerMonthlyStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateOrderStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.orders.findIndex((order) => order.id === action.payload.id);
        if (index !== -1) {
          state.orders[index].orderStatus = action.payload.orderStatus;
        }
      })
      
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBuyerOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBuyerOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.buyerOrders = action.payload;
      })
      .addCase(fetchBuyerOrders.rejected, (state, action) => {
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
