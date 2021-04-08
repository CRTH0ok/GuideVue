$(function(){
    computedProperties();
})

function computedProperties(){
    var vm = new Vue({
        el: '#example',
        data: {
          message: 'Hello'
        },
        computed: {
          // 计算属性的 getter
          reverseMessage: function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
          }
        }
      })
}