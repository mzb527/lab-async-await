// Write your code here!



    async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    const posts = await response.json();

    return posts;
}

function displayPosts(posts) {
const postList = document.getElementById('post-List')

posts.forEach((post) => { 
    const listTag = document.createElement('li');
    const h1Tag = document.createElement('h1');
    h1Tag.textContent = post.title;

    const pTag = document.createElement('p');
    pTag.textContentContent = post.body;

    listTag.appendChild(h1Tag)
    listTag.appendChild(pTag)

    postList.appendChild(listTag)
})

}

async function main() {
const posts = await fetchPosts();
displayPosts(posts);

}

document.addEventListener('DOMContentLoaded', main);
main ()