import { createSlice } from "@reduxjs/toolkit";

export const catalogoSlice = createSlice({
    name: 'catalogo',
    initialState: {
        listaProducto: [],
    },
    reducers: {
        //state es el estado del initialState
        setProductList: (state, action) => {
            state.listaProducto = action.payload;
        }
    },
    extraReducers:{
        
    }
})

export const { setProductList } = catalogoSlice.actions

export default catalogoSlice.reducer;