

const url = "https://secure-depths-39233.herokuapp.com/api"

export function getAllPosts(courseid) {
    let token = global.token
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

export function getPost(postid) {
    let token = global.token
    return fetch(url + "/post/?id=" + postid, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
        },
    }).then((response) => {
        //alert(JSON.stringify(response))
        //alert(postid)
        return response.json()
    }) 
}

export function createPost(courseid, post) {
    let token = global.token
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

export function addToDiscussion(postid, message) {
    let token = global.token
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        postId: postid,
        message: message,
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(url + "/post/discussion", requestOptions)
        .then((response) => response.json())
}