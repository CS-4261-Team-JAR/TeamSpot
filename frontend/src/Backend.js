

const url = "https://secure-depths-39233.herokuapp.com/"

export default class Backend {

    getAllPosts(token, courseid) {
        fetch(url + "/post/?course=" + courseid, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token
                },
            body: JSON.stringify(body),
        }).then((response) => resolve(response))
    }

    getPosts() {
        const url = "https://blooming-harbor-28361.herokuapp.com/posts"
        return fetch(url)
            .then((response) => response.json())
            .then(json => resolve(json))
    }
}