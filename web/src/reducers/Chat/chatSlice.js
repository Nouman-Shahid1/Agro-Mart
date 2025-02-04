import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // ✅ Use axios directly

const API_BASE_URL = "http://localhost:8081/message"; // ✅ Backend URL

// Fetch Messages from API
export const fetchMessages = createAsyncThunk(
  "chat/fetchMessages",
  async ({ receiverId, limit = 20, offset = 0 }, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token; // ✅ Get token from Redux state

      if (!token) {
        throw new Error("❌ Authorization token is missing. Please log in again.");
      }

      console.log("🔹 Fetching Messages | Token:", token);

      const response = await axios.get(
        `${API_BASE_URL}/messages?receiverId=${receiverId}&limit=${limit}&offset=${offset}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Ensure the token is sent
          },
        }
      );

      console.log("✅ Messages Fetched:", response.data);
      return response.data.messages;
    } catch (error) {
      console.error("❌ Failed to fetch messages:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.message || "Failed to fetch messages.");
    }
  }
);

// Send Message to API
// export const sendMessage = createAsyncThunk(
//   "chat/sendMessage",
//   async ({ receiverId, content }, { rejectWithValue, getState }) => {
//     try {
//       const token = getState().auth.token;

//       if (!token) {
//         throw new Error("❌ Authorization token is missing. Please log in again.");
//       }

//       console.log("🔹 Sending Message | Token:", token);

//       const response = await axios.post(
//         `${API_BASE_URL}/new`, // ✅ Correct API endpoint
//         { receiverId, content },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // ✅ Ensure the token is sent
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("✅ Message Sent:", response.data);
//       return response.data.event;
//     } catch (error) {
//       console.error("❌ Failed to send message:", error.response?.data || error.message);
//       return rejectWithValue(error.response?.data?.message || "Failed to send message.");
//     }
//   }
// );

// ✅ Send Message to API
export const sendMessage = createAsyncThunk(
    "chat/sendMessage",
    async ({ receiverId, content }, { rejectWithValue, getState }) => {
      try {
        const token = getState().auth.token;
  
        if (!token) {
          throw new Error("Authorization token is missing. Please log in again.");
        }
  
        // ✅ Ensure correct request format
        const requestBody = { receiverId, content }; 
  
        const response = await axios.post(
          "http://localhost:8081/message/new",
          requestBody,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json", // ✅ Ensure proper headers
            },
          }
        );
  
        return response.data.event; // Assuming API returns { event: messageData }
      } catch (error) {
        console.error("❌ Failed to send message:", error.response?.data);
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
        state.messages.push(action.payload);
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
        state.loading = false;
        state.messages = action.payload || []; // ✅ Ensure messages is always an array
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

export const { clearChat } = chatSlice.actions;
export default chatSlice.reducer;
