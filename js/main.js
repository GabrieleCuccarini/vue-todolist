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
            textDeco: "text-decoration-line-through"
        }
    },
    methods: {
        eliminateItem(indexDelete) {
            this.toDoList.splice(indexDelete, 1);
        }
    }
}).mount("#app")
