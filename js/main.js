const { createApp } = Vue;

createApp({
    data () {
      return {
        toDoList: [
                {
                text: "Fare l'esercizio",
                done: "false"
                }, {
                text: "Committare",
                done: "false"
                }, {
                text: "Pushare",
                done: "false"
                }
            ],
            textDeco: "text-decoration-line-through"
        }
    }
}).mount("#app")
