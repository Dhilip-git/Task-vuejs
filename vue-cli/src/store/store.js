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
    SaveEmpData : (state,value)=>{
        const record = state.EmpData.find(elements => elements.emp_store_id == value.emp_save_ID);
            console.log(record)           
            if(record){
                console.log(1)
                record.emp_store_Name = value.emp_save_EmployeeName,
                record.emp_store_Age = value.emp_save_Age,
                record.emp_store_TaskName =  value.emp_save_TaskNames
            }else {
           console.log(2)     
            state.EmpData.push({
            emp_store_id: value.emp_save_ID,
            emp_store_Name: value.emp_save_EmployeeName,
            emp_store_Age : value.emp_save_Age,
            emp_store_TaskName: value.emp_save_TaskNames
        });
      } 
    }
   },

    actions: {
        Save_Data : ({commit},values)=> {
             commit('SaveData',values) 
            //  console.log(values)
        },

        Save_Emp_Data : ({commit},value)=>{
             commit('SaveEmpData',value)
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