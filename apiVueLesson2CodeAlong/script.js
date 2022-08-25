console.log('hello world')
const URL = "https://project-apis.codespace.co.za/api/movies"


//basic example
// fetch(URL, { method: "GET" }) // new Request ({ url: https://project-apis.codespace.co.za/api/movies})
// .then(response => response.json()) // convert to JSON 
// .then(data => console.log(data))
//default method is Get. 

//can use to do streaming, fetch movies, pictures etc. use .blob() .buffer() .text()

//new Response ({ body: 'sdfsdfgdfghhjfg' })


//example 2 how to print as list
// fetch(URL, { method: "GET" })
//     .then(response => response.json())
//     .then((response) => {
//         const liElements = response.data
//             .map((item) => `<li>${item.name}</li>`)
//             .join('')

//         document.body.innerHTML = `<ul>${liElements}</ul>`
//     })
//can use .filter((item) => item.name.startsWith('Mr.') to filter names that start with Mr.

//How will this look like in Vue?

const { createApp } = window.Vue
const getData = () => new Promise((resolve) => {
    fetch(URL)
        .then(response => response.json())
        .then(json => json.data.map(item => item.name))
        .then(names => resolve(names))

})

const component = {
    data() {
        return {
            list: [],
            search: '',
        }
    },
    computed: {
        filteredList() { //HOW TO FILTER IN Vue
            return this.list.filter(item => item.includes(this.search))
        }
    },

    mounted() {
        console.log("im mounted")
        getData().then(resolveData => { this.list = resolveData })
    },

    template: /*HTML - first line cool tip for while data loading*/`
    <div v-if="list.length < 1">Fetching data...</div> 
    <div v-else>
        <input v-model="search">
        <div> {{ search }} </div>
            <ul>
                 <li v-for="item in filteredList"> {{ item }} </li>
             </ul>
        </div>
    `
}

window.addEventListener('DOMContentLoaded', () => {
    const app = createApp(component)
    app.mount('#app')
})