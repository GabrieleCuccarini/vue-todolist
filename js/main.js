const { createApp } = Vue;

createApp({
    data () {
      return {
        toDoList: [
                {
                text: "Fare l'esercizio",
                done: false
                }, {
                text: "Committare",
                done: false
                }, {
                text: "Pushare",
                done: true
                }
            ],
            newToDoList: {
                text: "",
                done: "false"
            }
        }
    },
    methods: {
        eliminateItem(indexDelete) {
            this.toDoList.splice(indexDelete, 1);
        }
    }
}).mount("#app")
