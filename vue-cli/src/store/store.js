import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
  
    state:{
        TaskData:[]    
    },

    mutations:{
        SaveData: (state,values) =>{
          state.TaskData.push({
            id: values.ID,
            Name: values.TaskName,
            Message : values.Description
        }); 
    }
   },

    actions: {
        Save_Data : ({commit},values)=> {
             commit('SaveData',values) 
             console.log(values)
        }
    },

    getters: {
        getdata : (state) => {
        return state.TaskData
    }
}
})