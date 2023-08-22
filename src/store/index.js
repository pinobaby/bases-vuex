import { createStore } from "vuex";
import counterStore from "./Counter/index.js";


export default createStore({

  
    modules: {

        counter: counterStore
        

    },

})