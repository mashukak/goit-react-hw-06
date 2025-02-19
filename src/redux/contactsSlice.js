import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { nanoid } from "nanoid";

const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;

    
      if (typeof name !== "string" || typeof number !== "string") {
        console.error("Помилка: неправильний формат контакту!", action.payload);
        return;
      }

      state.items.push({ id: nanoid(), name, number });
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

export default persistReducer(persistConfig, contactsSlice.reducer);
