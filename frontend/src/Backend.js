

const url = "https://secure-depths-39233.herokuapp.com/api"

export function getAllPosts(token, courseid) {
    return fetch(url + "/post/?course=" + courseid, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
        },
    }).then((response) => {
        //alert(JSON.stringify(response))
        return response.json()
    })
}

// Old function
export function getPosts() {
    const url = "https://blooming-harbor-28361.herokuapp.com/posts"
    return fetch(url)
        .then((response) => response.json())
}

export function createPost(token, courseid, post) {
    post.course = courseid
    alert(JSON.stringify(post))
    return fetch(url + "/post", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(post)
    })
}