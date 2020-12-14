import { createStore} from "redux";
import rootReducers from "./reducers/root.reducer";


const store= createStore(rootReducers)


store.subscribe(() => {});
export default store;