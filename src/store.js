import { configureStore } from "@reduxjs/toolkit";
import favorito from "./favoritos";
export default configureStore({
    reducer: {
        favorito,
    },
});
