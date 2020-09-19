<template>
<div>
  <nav class="navbar navbar-default">
    <div class="ctr navbar-right">
      <router-link to="/" style="width:110px">Home</router-link>
      <router-link to="/employee" style="width:110px">Employee ({{ emp_value.length }})</router-link>
      <router-link to="/task">Task ({{ show_value.length }})</router-link>
    </div>
  </nav> 
 </div>  
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  
 computed: {

            ...mapGetters({
                 emp_value : 'empdata',
                 show_value : 'getdata'
            })


 }
}
</script>

<style scoped>

  h1 {
    text-align: center;
  }

  .ctr {
    width: 500px;
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

  .ctr a:hover {
    background-color: #539b29;
    color: white;
  }
</style>