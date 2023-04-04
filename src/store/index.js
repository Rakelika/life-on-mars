import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
    const json = JSON.stringify(store.getState().UserReducer.user)
    localStorage.setItem("_user", json)
})

export default store