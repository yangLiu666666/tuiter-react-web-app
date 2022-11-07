import React from "react";
import who from '../data/who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);

    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                who.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who}/>
                )
            }
        </ul>
        // <div>
        //     <h1>Who To Follow!!</h1>
        // </div>
    );
};

export default WhoToFollowList;
