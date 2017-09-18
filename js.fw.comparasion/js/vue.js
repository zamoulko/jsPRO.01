;(x => {
    "use strict";
    let app = new Vue({
        el: '#vuejs',
        data: {
            newTodo: '',
            plusImg: 'https://cdn4.iconfinder.com/data/icons/simplicio/128x128/file_add.png',
            todo: [
                {name: '1.will be done', age: 12},
                {name: '2.will be done', age: 22},
                {name: '3.will be done', age: 32},
            ],
        },
        methods: {
            addItem: function (x) {
                this.todo.push({name: this.newTodo, age: 9});
                console.log(this.newTodo, this.todo);
            },
        },
    });
})(document);