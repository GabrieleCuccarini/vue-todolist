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
                },
                {
                text: "Cenare",
                done: false
                },
                {
                text: "Andare a dormire",
                done: true
                }
            ],
            newToDoList: {
                text: "",
            }
        }
    },
    methods: {
        eliminateItem(index) {
            this.toDoList.splice(index, 1);
            debugger
        },
        buttonSubmit() {
            this.toDoList.push({
                text: this.newToDoList.text,
                done: false
            })
            this.newToDoList.text = ""
        }
    }
}).mount("#app")
