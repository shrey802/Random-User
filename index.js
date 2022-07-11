const app = Vue.createApp({
    data(){
        return {
            fname: "Shreyash",
            lname: "Pingle",
            email: "shreyashpingle752@gmail.com",
            gender: "Male",
            picture: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods: {
        async getUser(){
            const res = await fetch("https://randomuser.me/api");
            const {results} = await res.json();
            this.fname = results[0].name.first
            this.lname = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})
app.mount("#app");