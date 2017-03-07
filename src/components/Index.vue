<template lang="pug">
  div
    h1 {{$t('welcome')}}
    div
      router-link(to="/editor") {{$t('addNew')}}
    //program-item(v-for="(item,index) in programs" v-bind:item="item" @remove="programs.splice(index,1)")
</template>

<script>
//import ProgramItem  from './program-item.vue'
//console.log(localStorage)
export default {
  name: 'Index',
  data () {
    return {
      programs: [{name:'test'}]
    }
  },
  components:{
   // ProgramItem
  },
  methods:{
  }
}
</script>