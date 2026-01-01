import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../app/models/product';
interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
