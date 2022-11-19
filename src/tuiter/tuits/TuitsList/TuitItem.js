import React from "react";
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
// import { deleteTuit } from "../tuits-reducer";
import {deleteTuitThunk} from "../../../services/tuits-thunks";

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    };
    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-auto">
                        <img
                            width={50}
                            className="float-end rounded-circle"
                            src={tuit.image}
                            alt=""
                        />
                    </div>
                    <div className="col-10">
                        <span className="fw-bolder">{tuit.userName}</span>
                        <span>
              <a href="/">
                <i className="bi bi-patch-check-fill p-2"></i>
              </a>
            </span>
                        <span className="text-muted">
              {tuit.handle} · {tuit.time}
            </span>
                        <span>
              <i className="bi bi-x-lg float-end"
                  onClick={() => deleteTuitHandler(tuit._id)}></i>
            </span>
                        <div>{tuit.tuit}</div>
                        <TuitStats tuit={tuit} />
                    </div>
                </div>
            </li>
        </>
    );
};
export default TuitItem;
