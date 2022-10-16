const PostItem = (post) => {
    return (`
        <div class="list-group-item wd-setup wd-boarder-solid">
        <div class="row pt-2">
            <div class="col-1">
                <img src=${post.avatar} class="img-fluid rounded-circle">
            </div>
            <div class="col-11">
                <div class="d-flex  position-relative">
                    <div class="wd-color-white fw-bold">${post.author} <i class="fas fa-check-circle"></i></div>
                    <div class="text-secondary ps-1">@${post.handle} · ${post.time} </div>
                </div>
                <div class="wd-color-white pb-2">
                    ${post.tweet}
                </div>
                <div class="list-group wd-setup">
                    <div class="list-group-item wd-image">
                        <img src=${post.image} class="img-fluid">
                    </div>
                   
                    ${post.content ?`<div class="list-group-item wd-bg-color-black">
                                        <div class="wd-border-solid fw-bold">${post.title}</div>
                                        <div class="text-secondary">${post.content}</div>
                                     </div>`: ''}     
                </div>
                
                <div class="row text-secondary pt-3 pb-2 mb-2">
                    <div class="col-3">
                        <i class='far fa-comment'></i><span class="wd-space">${post.comments}</span>
                    </div>
                    <div class="col-3">
                        <i class='fas fa-retweet'></i><span class="wd-space">${post.retweets}</span>
                    </div>
                    <div class="col-3">
                        <i class='far fa-heart'></i><span class="wd-space">${post.likes}</span>
                    </div>
                    <div class="col-3">
                        <i class='fas fa-upload'></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
    `);
}

export default PostItem;