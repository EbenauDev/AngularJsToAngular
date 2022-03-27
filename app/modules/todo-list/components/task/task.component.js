(function () {
    'use strict';

    angular
        .module("app.todoList")
        .component("Task", {
            template: "",
            controller: TaskController,
            controllerAs: "vm",
            bindings: {
                task: "<",
                taskCallback: "&"
            }
        });

    TaskController.$inject = [];
    function TaskController() {
        var vm = this;
    }
})();