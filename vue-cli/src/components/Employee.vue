<template>
<div >
     <div class="ctr" v-if="Header">
        <h1>Employee Status</h1>  
        <router-link to="/">Home</router-link>
        <button class="ctr1" @click="show" style="width:115px">Add Employee </button>
     </div>
 <div> 
    <div class="container" v-if="switched">
        <div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6">
                    <h1>Enter Employee Details</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">ID</label>
                        <input
                                type="text"
                                class="form-control"
                                v-model="Employeedata.emp_ID">
                    </div>
                    <div class="form-group">
                        <label for="password">EmployeeName</label>
                        <input
                                type="text"
                                class="form-control"
                                v-model="Employeedata.emp_EmployeeName">
                    </div>
                    <div class="form-group" >
                    <label for="message">Age</label><br>
                    <input
                            type="number"
                            class="form-control"
                            v-model="Employeedata.emp_Age">
                    </div>
                    <div class="form-group" >
                    <label for="message">Task</label><br>
                    <select v-model="Employeedata.emp_TaskNames" class="dropdown" style="width:200px;height:25px">
                       <option v-for="showvalue in show_value" :key="showvalue.Name">{{ showvalue.Name }}</option>
                    </select>
                    </div>
                    <div class="row">
                <div class="col-xs-12">
                    <button
                            class="btn btn-primary" @click="submit">Submit
                    </button>
                    <button
                            class="btn btn-success navbar-right" @click="Home1">Home
                    </button>
                </div>
            </div>
        </div>
      </div>

        </div>
        <hr>
        </div>
        <div class="row" v-if="Datas">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-offset-3" style="margin-top:80px">
                <div class="panel panel-default" >
                <button class="ctr1" @click="show(); Datas=!Datas" style="width:115px">Add Employee </button>
                    <div class="panel-heading">
                        <h4>Employee Details</h4>
                    </div>
                    <div class="panel-body">
                    <!-- <p>{{ show_value }}</p> -->
                       <table class="table">
                            <tr>
                                <!-- <th>Index</th> -->
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Task</th>
                                <th>Action</th>
                            </tr>
                            <tr v-for="(empValue,index) in emp_value" :key="index" class="display">
                                <!-- <td><div>{{ index + 1 }}</div></td> -->

                                <td> 
                                    <div>{{ empValue.emp_store_id }}</div>
                                    <!-- <div v-if="isEditing"><input v-model="empValue.emp_store_id" v-show="empValue.emp_store_id"></div> -->
                                </td>

                                <td>
                                    <div>{{ empValue.emp_store_Name }}</div>
                                    <!-- <div v-if="isEditing"><input v-model="empValue.emp_store_Name" v-show="empValue.emp_store_Name"></div> -->
                                </td>
                                
                                <td>
                                    <div>{{ empValue.emp_store_Age }}</div>
                                    <!-- <div v-if="isEditing"><input v-model="empValue.emp_store_Age" v-show="empValue.emp_store_Age"></div> -->
                                </td>
                                <td>
                                    <div>{{ empValue.emp_store_TaskName }}</div>
                                    <!-- <div v-if="isEditing"><select v-model="empValue.emp_store_TaskName" v-show="empValue.emp_store_TaskName">
                                        <option v-for="empvalue in emp_value" :key="empvalue.emp_store_TaskName">{{ empvalue.emp_store_TaskName }}</option>
                                        </select></div> -->
                                </td>
                                <td>
                                    <button class="btn btn-primary" 
                                    @click="empedit(empValue.emp_store_id,empValue.emp_store_Name,empValue.emp_store_Age,empValue.emp_store_TaskName)"
                                    v-show="empValue.emp_store_id"> 
                                    Edit
                                    </button>
                                    <!-- <button class="btn btn-primary" @click="onDelete(empValue.id)">
                                    Delete
                                    </button> -->
                                </td>
                            </tr>
                        </table>
                     <!-- <button class="ctr1" @click="show">Add Employee </button>    -->
                    </div>
                </div>
            </div>
        </div>
  </div>  
</div> 
</template>

<script>    

import {mapGetters} from 'vuex' 

    export default {
        data(){
            return{
                isEditing: false,
                Header:true,
                switched:false,
                Datas:false,
                Employeedata: {
                   emp_ID:'',
                   emp_EmployeeName:'',
                   emp_Age:'',
                   emp_TaskNames:''
                }                
            }
        },
        methods:{
            show() {
                this.Header = false,
                this.switched = true
            },
            submit() {
                this.switched = false
                this.Datas = true

                const value = {
                    emp_save_ID : this.Employeedata.emp_ID,
                    emp_save_EmployeeName : this.Employeedata.emp_EmployeeName,
                    emp_save_Age : this.Employeedata.emp_Age,
                    emp_save_TaskNames: this.Employeedata.emp_TaskNames
                }
                 console.log(value)
               
               this.$store.dispatch('Save_Emp_Data',value)

            },
            empedit(empid,empname,empage,emptaskname){
                this.switched = true
                this.Datas = false

                this.Employeedata.emp_ID = empid,
                this.Employeedata.emp_EmployeeName = empname,
                this.Employeedata.emp_Age = empage,
                this.Employeedata.emp_TaskNames = emptaskname
            },
            Home1(){
                   this.$router.push('/');
            }
        },

        computed: {

            ...mapGetters({
                 emp_value : 'empdata',
                 show_value : 'getdata'
            })
            // emp_value(){
            //     return this.$store.getters.empdata;
            // },
            // show_value(){
            //     return this.$store.getters.getdata;
            // }
        }
    }
</script>


<style>
h1 {
    text-align: center;
  }

  .ctr {
    width: 90%;
    margin: auto;
    text-align: center;
  }

  .ctr a {
    margin: 10px;
    display: inline-block;
    border: 1px solid  #539b29;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    color: #539b29;
  }

  .ctr1 {
    margin: 10px;
    display: inline-block;
    border: 1px solid  #539b29;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    color: #539b29;
  }

 .ctr1:hover{
    background-color: #539b29;
    color: white;
  
 }

  .ctr a:hover {
    background-color: #539b29;
    color: white;
  }
</style>