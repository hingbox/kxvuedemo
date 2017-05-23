<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="template">
    <p> {{ message }}</p>
    <p> {{reversedMessage }}</p>
    <p> {{reversedMessages() }}</p>
    <p>{{now}}</p>
    <div v-bind:class="{ active: isActive }">11111111111</div>
    <my-component class="baz boo"></my-component>
  </div>
</template>

<script>
  export default {
    name: 'template',
    data (){
        return {
          message: 'abcdefghijiklm',
          isActive:true,
        }
    },
    computed: {
      // a computed getter
      reversedMessage: function () {
        // `this` points to the vm instance
        return this.message.split('').reverse().join('')
      }
    },
    methods: {
      reversedMessages: function () {
        return this.message.split('').reverse().join('')
      }
    },
    computed: {
      now: function () {
        return Date.now()
      }
    }
  }
var vue = new Vue();
  vue.component('my-component',{
    template:'<p class="foo bar">Hi</p>'
  })

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
