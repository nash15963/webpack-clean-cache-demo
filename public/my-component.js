const vm = Vue.createApp({
    data() {
        return {
            message : "Hello, Vue!"
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    },
})
vm.mount('#app')
