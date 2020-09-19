<template>
<div>
<appHome></appHome>
<router-view></router-view>
</div> 
</template>

<script>
 import Home from './components/Home';

export default {
 components: {
     appHome : Home
 }

}
</script>

<style>

</style>
