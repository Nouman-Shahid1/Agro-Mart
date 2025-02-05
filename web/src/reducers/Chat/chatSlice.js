import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // ✅ Use axios directly

const API_BASE_URL = "http://localhost:8081/message"; // ✅ Backend URL

// Fetch Messages from API
// Fetch Messages from API
export const fetchMessages = createAsyncThunk(
  "chat/fetchMessages",
  async ({ senderId, receiverId, limit = 20, offset = 0 }, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token; // Get token from Redux state

      if (!token) {
        throw new Error("Authorization token is missing. Please log in again.");
      }

      const response = await axios.get(
        `${API_BASE_URL}/messages?receiverId=${receiverId}&limit=${limit}&offset=${offset}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure the token is sent
          },
        }
      );

      return response.data.messages; // Return messages array
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch messages.");
    }
  }
);

// Send Message to API
export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async ({ senderId, receiverId, content }, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;

      if (!token) {
        throw new Error("Authorization token is missing. Please log in again.");
      }

      const response = await axios.post(
        `${API_BASE_URL}/new`,
        { senderId, receiverId, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.message; // Return the sent message
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to send message.");
    }
  }
);

  

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {
    addMessage: (state, action) => {
      // Check for duplicate messages before adding
      const exists = state.messages.some(
        (msg) =>
          msg.senderId === action.payload.senderId &&
          msg.content === action.payload.content &&
          msg.timestamp === action.payload.timestamp // Include unique attributes if possible
      );

      if (!exists) {
        state.messages.push(action.payload);
      }
    },
    clearChat: (state) => {
      state.messages = [];
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        console.log("✅ Messages in Redux after Fetch:", action.payload);
        state.loading = false;
        state.messages = action.payload || [];
      })
      
      
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.messages = []; // ✅ Set an empty array to avoid errors
      })
  
      
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload); // ✅ Add new messages safely
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addMessage, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
