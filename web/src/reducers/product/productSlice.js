import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/config";

// Create Product
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (formData, { rejectWithValue, getState }) => {
    try {
      // Get the token from the Redux state
      const token = getState().auth.token;

      if (!token) {
        throw new Error("Authorization token is missing. Please log in again.");
      }

      // Make the API request with the Authorization header
      const response = await axios.post("/products/new-product", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
        error.message ||
        "Failed to create product. Please try again."
      );
    }
  }
);

// Update Product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, formData }, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token; // Get token from Redux state
      if (!token) {
        throw new Error("Authorization token is missing.");
      }

      const response = await axios.put(`/products/update-product/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Add token
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update product."
      );
    }
  }
);



// Get All Products
export const getProducts = createAsyncThunk(
  "product/getallproducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/getallproducts");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Get Product by ID
export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/Product/${productId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch product.");
    }
  }
);


// Delete Product
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;

      if (!token) {
        throw new Error("Authorization token is missing. Please log in again.");
      }

      const response = await axios.delete(`/products/delete-product/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Return productId to update the state
      return { productId };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Failed to delete product. Please try again."
      );
    }
  }
);

export const getProductByUserId = createAsyncThunk(
  "product/getProductByUserId",
  async (userId, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token; // Get token from Redux state

      if (!token) {
        throw new Error("Authorization token is missing. Please log in again.");
      }

      // Make the API request with the Authorization header
      const response = await axios.get(`/products/get-Product/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Failed to get product by user ID."
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    selectedProduct: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Product
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
     
      // Update Product
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(product => product.id === action.payload.id);
        state.products[index] = action.payload; // Update the product in the state
        state.loading = false;
        state.error = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get Products
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get Product by ID
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.product;
        state.username = action.payload.username; // Save username in state
      })
      
      
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete Product
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload.productId);
        state.loading = false;
        state.error = null;
      })
      
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
         // Get Product by User ID
         .addCase(getProductByUserId.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getProductByUserId.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
        })
        .addCase(getProductByUserId.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});


export default productSlice.reducer;
