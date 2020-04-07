import { createStore } from "redux";
import { block } from "./reducers";

export const appStore = createStore(block);
