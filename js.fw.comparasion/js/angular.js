"use strict";

function ngAppExampleController($scope) {
    $scope.data = {
        newTodo: '',
        plusImg: 'https://cdn4.iconfinder.com/data/icons/simplicio/128x128/file_add.png',
        todo: [
            {name: '1.will be done', age: 12},
            {name: '2.will be done', age: 22},
            {name: '3.will be done', age: 32},
        ],
    };
    $scope.addItem = function (x) {
        $scope.data.todo.push({name: $scope.data.newTodo, age: 9});
        console.log($scope.data);
    };
};
