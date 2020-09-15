<template>
<div >
     <div class="ctr" v-if="Header">
        <h1>Employee Status</h1>  
        <router-link to="/">Home</router-link>
        <button class="ctr1" @click="show">Add Action </button>
     </div>
 <div> 
    <div class="container" v-if="switched">
        <div>
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
                    <label for="message">Description</label><br>
                    <input
                            type="text"
                            class="form-control"
                            v-model="Actiondata.Description">
            </div>
             <div class="row">
                <div class="col-xs-12">
                    <button
                            class="btn btn-primary" @click="submit">Submit!
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
                    <div class="panel-heading">
                        <h4>Your Action</h4>
                    </div>
                    <div class="panel-body">
                    <!-- <p>{{ show_value }}</p> -->
                       <table class="table">
                            <tr>
                                <!-- <th>Index</th> -->
                                <th>ID</th>
                                <th>TaskName</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                            <tr v-for="(showValue, index) in show_value" :key="index" class="display">
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
    
  </div>  
</div> 
</template>

<script>    
    export default {
        data(){
            return{
                isEditing: false,
                Header:true,
                switched:false,
                Datas:false,
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
            },
            submit() {
                this.switched = false
                this.Datas = true

                const values = {
                    ID : this.Actiondata.ID,
                    TaskName : this.Actiondata.TaskName,
                    Description : this.Actiondata.Description
                }
                //  console.log(values)
               
               this.$store.dispatch('Save_Data',values)

            },
            edit(id,name,msg){
            //    this.isEditing = (!isEditing)
                this.switched = true
                this.Datas = false
                // console.log('inside edit' + id + name + msg)
                this.Actiondata.ID = id,
                this.Actiondata.TaskName = name,
                this.Actiondata.Description = msg

            },
            onDelete(id) {
                this.$store.state.TaskData = this.$store.state.TaskData.filter(remove =>  remove.ID!= id)
            }
        },

        computed: {
            show_value(){
                return this.$store.getters.getdata;
            }
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
    box-sizing: border-box;
    color: #539b29;
  }

  .ctr1 {
    margin: 10px;
    display: inline-block;
    border: 1px solid  #539b29;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
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