<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { testAPI } from '@/api/globalApi'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: this.$t('global.webTitle'),
    }
  },
  mounted() {
    testAPI().then((res) => {
      console.log(res)
    })
  },
}
</script>
