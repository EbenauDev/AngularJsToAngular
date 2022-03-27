(function () {
    'use strict';

    angular
        .module("app.todoList")
        .controller("TodoListController", TodoListController);

    TodoListController.$inject = [];
    function TodoListController() {
        var vm = this;
    }
})();