const PostSummaryItem = (post) => {
    return(`
            <div class="list-group">
                <div class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-8">
                            <div class="text-secondary">
                            ${post.topic}
                            </div>
                            <div class="fw-bolder ">
                            ${post.userName}
                            <i class="fas fa-check-circle p-1"></i>
                            <span class="text-secondary fw-normal">- ${post.time}</span>
                            </div>
                            <div class="fw-bolder wd-color-white ">
                            ${post.title}
                            </div>
                        </div>
                        <div class="col-4">
                            <img src=${post.image} class="float-end wd-rounded-corners-all-around img-fluid" width="100%"/>
                        </div>
                    </div>
                </div>
            </div>                   
    `);
}

export default PostSummaryItem;
