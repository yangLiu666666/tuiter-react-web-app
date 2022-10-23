import React from "react";

const PostItem = ({post =
    {
        "avatar": "../../images/spacex.jpeg",
        "author": "SpaceX",
        "handle": "SpaceX",
        "time": "23h",
        "comments": "595",
        "retweets": "1,168",
        "likes": "11.1k",
        "image": "../../images/post_spacex.jpeg",
        "tweet": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon --> spacex.com/updates",
        "link": "spacex.com/updates",
        "content":"",
        "externalLink": ""
    }
                  }) => {

    return (
        <>
            <div className="list-group-item center">
                <div className="row pt-2">
                    <div className="col-1 ">
                        <img src={post.avatar} className="img-fluid rounded-circle wd-image"/>
                    </div>
                    <div className="col-11">
                        <div className="d-flex  position-relative">
                            <div className="fw-bold">{post.author}</div>
                            <i className="bi bi-patch-check-fill ps-1 text-primary"></i>
                            <div className="text-secondary ps-1">@{post.handle} · {post.time} </div>
                        </div>
                        <div className="pb-2">
                            {post.tweet}
                            <i className="bi bi-arrow-right"></i>
                            <a href="#" className="text-info">{post.link}</a>
                        </div>
                        <div className="list-group center">
                            <div className="list-group-item overflow-auto p-0">
                                <img src={post.image} className="img-fluid"/>
                            </div>

                            <div className={`list-group-item ${post.content ?  '': 'd-none'}`}>
                                <div className="font-bold">{post.title}</div>
                                <div className="text-secondary">{post.content}
                                    <i className="bi bi-arrow-right"></i>
                                    <a href="#" className="text-info">{post.externalLink}</a>
                                </div>
                            </div>
                        </div>

                        <div className="row text-secondary pt-3 pb-2 flex-row d-flex justify-content-between align-items-start ">
                            <div className="col-3">
                                <i class="bi bi-chat"></i><span className="p-3">{post.comments}</span>
                            </div>
                            <div className="col-3">
                                <i className="bi bi-arrow-repeat"></i><span className="p-3">{post.retweets}</span>
                            </div>
                            <div className="col-3">
                                <i className="bi bi-heart"></i><span className="p-3">{post.likes}</span>
                            </div>
                            <div className="col-3">
                                <i className="bi bi-upload"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostItem;