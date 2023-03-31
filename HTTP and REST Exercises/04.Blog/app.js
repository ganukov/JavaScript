


function attachEvents() {
    const loadPosts = document.getElementById('btnLoadPosts');
    const viewPost = document.getElementById('btnViewPost');
    const selectMenu = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBodyShow = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');
    const postBody = {};


    loadPosts.addEventListener('click', handleLoadPosts);
    viewPost.addEventListener('click', handlePost);
    function handleLoadPosts() {
        const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
        fetch(postsUrl)
            .then((res) => res.json())
            .then((data) => {

                for (const post in data) {
                    let content = data[post].title;
                    let contentValue = data[post].id;
                    const newOption = document.createElement('option');
                    newOption.textContent = content;
                    newOption.value = contentValue;
                    selectMenu.appendChild(newOption);
                    postBody[contentValue] = data[post].body;

                }

            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    function handlePost() {
        const comentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
        const allOptions = document.getElementById('posts');
        const selectedOption = allOptions.selectedOptions[0].value;
        const title = allOptions.selectedOptions[0].textContent;


        fetch(comentsUrl)
            .then((res) => res.json())
            .then((data) => {

                let showPost = null;
                for (const post in data) {
                    let currentPost = data[post];
                    if (selectedOption === currentPost.postId) {
                        showPost = data[post];
                        postTitle.textContent = title;

                        for (const each in postBody) {
                            if (each === showPost.postId) {
                                postBodyShow.textContent = postBody[each]
                            }
                        }
                        const li = document.createElement('li');
                        li.textContent = currentPost.text;
                        postComments.appendChild(li)

                    }

                }

            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

attachEvents();