
Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{counter}}</button>',
    data:function(){
        return {
            counter:0
        }
    },
    methods:{
        incrementCounter:function(){
            //При нажатии на кнопку запускается функция  incrementCounter
            this.counter +=1;
            //генерация события в дочернем компоненте
            this.$emit('increment');
        }
    }
})
let sample = new Vue({
    el: "#container",
    data: {
        total:0,
    },
    methods:{
        incrementTotal:function(){
            this.total +=1;
        }
    }
});
let re = new Vue({
    el: "#ref",

    methods:{
        show:function(){
            alert(this.$refs.profile.value);
        }
    }
})
Vue.component('my-slot',{
    template:'<div><h2>Header</h2><slot>No content!</slot>'
});
let slot = new Vue({
    el:"#slot",

});