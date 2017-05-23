<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="test">
    <h1>{{ msg.split('').reverse().join('') }}</h1>
    <h1>{{ msg | capitalize }}</h1>
    <h2>{{ ok ?'YES':'No'}}</h2>
    <p v-if="seen">now you see me</p>
    {{ number + 1 }}<br/>
    <a v-bind:href="url">1111111111111111111</a>
    <form v-on:submit.prevent="onSubmit"></form>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: '你好呀1',
      number:1,
      seen:true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
