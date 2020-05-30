<template>
  <div class="hello">
    <div id="recaptcha-container"></div>
    <input type="text">
  </div>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'HelloWorld',
  
  mounted () {
    console.log('firebase')    
    const auth= new firebase.auth.RecaptchaVerifier('recaptcha-container');
    auth.render();

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
