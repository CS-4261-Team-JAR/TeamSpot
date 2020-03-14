

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

    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    post.course = courseid
    var raw = JSON.stringify(post)

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(url + "/post", requestOptions)
        .then((response) => response.text())
}