console.log('hello world')
const URL = "https://project-apis.codespace.co.za/api/movies"

fetch(URL, { method: "GET" }) // new Request ({ url: https://project-apis.codespace.co.za/api/movies})
.then(response => response.text()) // convert JSON to text
.then(data => console.log(data))
//default method is Get. 






//new Response ({ body: 'sdfsdfgdfghhjfg' })


