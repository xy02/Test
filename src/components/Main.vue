<template lang="pug">
      router-view
</template>
<script>
export default {
      created(){
            this.$router.push('/editor')
      }
}
</script>