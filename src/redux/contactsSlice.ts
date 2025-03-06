import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Contact } from "../types/Contact";


const storedContacts = localStorage.getItem('contacts');
const contactsInitialState = {
    items: storedContacts ? JSON.parse(storedContacts) : [] as Contact[],
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
                localStorage.setItem('contacts', JSON.stringify(state.items));
            },
            prepare({ name, number }: { name: string; number: string }) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                    meta: undefined,
                    error: undefined,
                };
            }
        },
        deleteContact(state, action) {
            const index = state.items.findIndex((contact: Contact) => contact.id === action.payload);

            if (index !== -1) {
                state.items.splice(index, 1);
                localStorage.setItem('contacts', JSON.stringify(state.items));
            }
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;