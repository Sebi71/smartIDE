import {configureStore} from "@reduxjs/toolkit"
import tabs from "./features/tabs"
import view from "./features/view"

export const store = configureStore({
    reducer: {
        tabs,
        view
    }
})