<template>
  <div>
    <h1>Welcome to see the employee status</h1>
    <div class="ctr">
      <router-link to="/employee">Employee</router-link>
      <router-link to="/task">Task</router-link>
    </div>
  </div>
</template>

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
    box-sizing: border-box;
    color: #539b29;
  }

  .ctr a:hover {
    background-color: #539b29;
    color: white;
  }
</style>