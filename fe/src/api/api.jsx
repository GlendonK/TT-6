const URL = ""
export function getApi() {
    return
}


export function login(username, password) {
    fetch(URL+"/login").then(res => res.json()).then(console.log) // return true or false

}