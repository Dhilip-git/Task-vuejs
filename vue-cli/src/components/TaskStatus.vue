<template>
<div>
     <div class="ctr" v-if="Header">
        <h1>Task Status</h1>  
        <button class="ctr1" @click="show">Add Task </button>
     </div>
        <div class="row" v-if="Header" >
            <div class="col-xs-12 col-sm-8 col-sm-offset-2" style="margin-top:80px">
                <div class="panel panel-default" >
                    <div class="panel-heading">
                        <h4>Your Task</h4>
                    </div>
                        <div class="panel-body">
                            <table class="table">
                               <tr>
                                    <!-- <th>Index</th> -->
                                    <th>ID</th>
                                    <th>TaskName</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                                <tr v-for="showValue in show_value" :key="showValue.id" class="display">
                                <!-- <td><div>{{ index + 1 }}</div></td> -->

                                <td> 
                                    <div>{{ showValue.id }}</div>
                                    <!--<div><input type="text" v-model="showValue.id" v-show="showValue.id" v-if="isEditing"></div>-->
                                </td>

                                <td>
                                    <div>{{ showValue.Name }}</div>
                                    <!--<div><input type="text" v-model="showValue.Name" v-show="showValue.Name" v-if="isEditing"></div>-->
                                </td>
                                
                                <td>
                                    <div>{{ showValue.Message }}</div>
                                    <!--<div><input type="text" v-model="showValue.Message" v-show="showValue.Message" v-if="isEditing"></div>-->
                                </td>
                                <td>
                                    <button class="btn btn-primary" @click="edit(showValue.id,showValue.Name,showValue.Message)"
                                     v-show="showValue.id">
                                    Edit
                                    </button>
                                    <!-- <button class="btn btn-primary" @click="onDelete(showValue.id)">
                                    Delete
                                    </button> -->
                                </td>
                            </tr>
                        </table>
                     <!-- <button class="ctr1" @click="show">Add Action </button>    -->
                    </div>
                </div>
            </div>
        </div>

    <div class="container" v-if="switched">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Enter Task Details</h1>
                <hr>
                    <div class="form-group">
                        <label for="email">ID</label>
                        <input
                                type="text"
                                class="form-control"
                                v-model="Actiondata.ID">
                    </div>
                    <div class="form-group">
                        <label for="password">TaskName</label>
                        <input
                                type="text"
                                class="form-control"
                                v-model="Actiondata.TaskName">
                    </div>
                    <div class="form-group" >
                        <label for="message">Description</label>
                        <input
                                type="text"
                                class="form-control"
                                v-model="Actiondata.Description">
                    </div>
                           <div class="row">
                                <div class="col-xs-12">
                                  <button
                                         class="btn btn-primary" @click="submit">Submit
                                   </button>
                     <!--<button
                            class="btn btn-success navbar-right" @click="Home">Home
                    </button>-->
                                </div>
                            </div>
            </div>
        </div>
    </div>
       <!-- <div class="row" v-if="Datas">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2" style="margin-top:80px">
                <div class="panel panel-default" >
                    <div class="panel-heading">
                        <h4>Your Action</h4>
                    </div>
                    <div class="panel-body">
                     <p>{{ show_value }}</p> 
                       <table class="table">
                            <tr>
                                 <th>Index</th> 
                                <th>ID</th>
                                <th>TaskName</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                            <tr v-for="showValue in show_value" :key="showValue.id" class="display">
                                 <td><div>{{ index + 1 }}</div></td>

                                <td> 
                                    <div>{{ showValue.id }}</div>
                                    <div><input type="text" v-model="showValue.id" v-show="showValue.id" v-if="isEditing"></div>
                                </td>

                                <td>
                                    <div>{{ showValue.Name }}</div>
                                    <div><input type="text" v-model="showValue.Name" v-show="showValue.Name" v-if="isEditing"></div>
                                </td>
                                
                                <td>
                                    <div>{{ showValue.Message }}</div>
                                    <div><input type="text" v-model="showValue.Message" v-show="showValue.Message" v-if="isEditing"></div>
                                </td>
                                <td>
                                    <button class="btn btn-primary" @click="edit(showValue.id,showValue.Name,showValue.Message)"
                                     v-show="showValue.id">
                                    Edit
                                    </button>
                                     <button class="btn btn-primary" @click="onDelete(showValue.id)">
                                    Delete
                                    </button>
                                </td>
                            </tr>
                        </table>
                      <button class="ctr1" @click="show">Add Action </button>
                    </div>
                </div>
            </div>
        </div>-->   

</div> 
</template>

<script>    

import {mapGetters} from 'vuex' 
import { uuid } from 'vue-uuid'

    export default {
        data(){
            return{
                isEditing: false,
                Header:true,
                switched:false,
                Datas:false,
                genid: 0,
                Actiondata: {
                   ID:'',
                   TaskName:'',
                   Description:''
                }                
            }
        },
        methods:{
            show() {
                this.Header = false,
                this.switched = true

                   this.Actiondata.ID = '',
                   this.Actiondata.TaskName = '',
                   this.Actiondata.Description = ''

            },
            submit() {
                this.switched = false
                this.Header = true
                // this.Datas = true

                const values = {
                    // genid : this._uid,
                    genid : uuid.v1(),
                    ID : this.Actiondata.ID,
                    TaskName : this.Actiondata.TaskName,
                    Description : this.Actiondata.Description
                }
                 console.log(values)
               
               this.$store.dispatch('Save_Data',values)

            },
            edit(id,name,msg){
            //    this.isEditing = (!isEditing)
                this.switched = true
                this.Datas = false
                this.Header = false
                // console.log('inside edit' + id + name + msg)
                this.Actiondata.ID = id,
                this.Actiondata.TaskName = name,
                this.Actiondata.Description = msg

            },
            Home(){
                   this.$router.push('/');
            }
        },

        computed: {
            ...mapGetters({
                show_value : 'getdata'
            })
            // show_value(){
            //     return this.$store.getters.getdata;
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