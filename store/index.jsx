import { configureStore } from '@reduxjs/toolkit'
import catalogo from './slices/catalogo';

export default configureStore({
    reducer:{
        catalogo
    }
});
