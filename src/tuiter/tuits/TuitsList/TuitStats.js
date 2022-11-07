import React from "react";


const TuitStats = ({ tuit }) => {
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
                {tuit.liked && (
                    <i
                        className="bi bi-heart-fill me-2"
                        style={{ color: tuit.liked ? "red" : "white" }}
                    ></i>
                )}
                {!tuit.liked && <i className="bi bi-heart me-2"></i>}
                {tuit.likes}
            </div>
            <div className="col-3">
                <i className="bi bi-upload"></i>
            </div>
        </div>
    );
};

export default TuitStats;


