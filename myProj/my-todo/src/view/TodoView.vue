<template>
    <div id="todo">
        <CustomInput type="text" v-model.trim="inputVal" />
        <button @click="addTodo">add</button>
    </div>
</template>

<script>
import CustomInput from '../components/CustomInput.vue';
// import event from '../event';

export default {
    name: 'TodoView',
      components: {
          CustomInput,
  },
    data() {
        return {
            inputVal: '',
            todoList: [],
        }
    },
    methods: {
        addTodo() {
            // console.log(this.inputVal);
            if (this.inputVal) {
                // 不为空
                this.$store.commit('addTodo', {
                    text: this.inputVal,
                    created: Date.now()
                });
                this.inputVal = '';
                // console.log(this.$refs.todoDOM.children.length);  获取不到添加完的dom元素个数
                // this.$nextTick(() => {
                //     // 渲染完成后，异步获取
                //     console.log(this.$refs.todoDOM.children.length);
                // })
            }
        },
        deleteTodo(created) {
            console.log(created);
            const idx = this.todoList.findIndex(val => {
                if (val.created === created) return true;
            })
            this.todoList.splice(idx, 1);
        },
        inputSomething() {
            
        }
    },
    mounted() {
        // event.$on('input', this.inputSomething)
    },
    beforeDestroyed() {
        // event.$off('input', this.inputSomething);
    }
}
</script>