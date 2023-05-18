
const baseURL ="http://localhost:8080/api/posts"
//endpoint:http://localhost:3000/api/posts

export  async function getPost(id){
    const res = await fetch(`${baseURL}`)
    const posts =await res.json()

    if(id){
        return posts.find(value=>value.id ==id)
    }
    return posts;
}