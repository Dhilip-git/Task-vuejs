import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({
  
    state:{
        TaskData:[],
        EmpData:[]    
    },

    mutations:{
        SaveData: (state,values) =>{
            const records = state.TaskData.find(element => element.id == values.ID);
            console.log(records)
            if(records){
                records.Name = values.TaskName,
                records.Message = values.Description
            }else {
          state.TaskData.push({
            id: values.ID,
            Name: values.TaskName,
            Message : values.Description
        }); 
      }
    },
    SaveEmpData : (state,values)=>{
        state.EmpData.push({
            emp_store_id: values.emp_save_ID,
            emp_store_Name: values.emp_save_EmployeeName,
            emp_store_Age : values.emp_save_Age,
            emp_store_TaskName: values.emp_save_TaskNames
        }); 
    }
   },

    actions: {
        Save_Data : ({commit},values)=> {
             commit('SaveData',values) 
            //  console.log(values)
        },

        Save_Emp_Data : ({commit},values)=>{
             commit('SaveEmpData',values)
            //  console.log(values)

        }
    },

    getters: {
        getdata : (state) => {
        return state.TaskData
    },
        empdata : (state) =>{
        return state.EmpData
    }
}
})