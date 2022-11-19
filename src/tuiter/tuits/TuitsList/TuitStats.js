import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    return (
        <div className="d-flex flex-row justify-content-between align-items-start mt-3">
            <div className="col-3">
                <i className="bi bi-chat"></i>
                <span className="p-2">{tuit.replies}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat me-2"></i>
                <span className="p-2">{tuit.retuits}</span>
            </div>
            <div className="col-3">
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))} className="bi bi-heart-fill me-2 text-danger"/>
                {tuit.likes}
            </div>
            <div className="col-3">
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                }))} className="bi bi-hand-thumbs-down me-2"/>
                {tuit.dislikes}
            </div>
            <div className="col-3">
                <i className="bi bi-upload"></i>
            </div>
        </div>
    );
};

export default TuitStats;


