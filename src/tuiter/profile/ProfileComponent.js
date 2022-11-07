import React, {useState} from "react";
import {Link} from "react-router-dom"

const ProfileComponent = ({profile, setEditProfile}) => {
    return(
        <>
            <div>
                <div className="row align-items-center">
                    <Link to="/tuiter/home" className="col-1"><i className="bi bi-arrow-left"></i></Link>
                    <div className="col-11">
                        <div className="fw-bold">{profile.firstName} {profile.lastName}</div>
                        <div className="text-secondary">{profile.tuitCounts} tuits</div>
                    </div>
                </div>
                <div className="row position-relative">
                    <img src={profile.bannerPicture} className="img-fluid" style={{height:"300px"}}/>
                    <img src={profile.profilePicture} className="img-fluid rounded-circle col-3 col-sm-4 ms-4 position-absolute" width={50} style={{bottom:"-50px"}}/>
                    <div className="col-8"></div>
                    <button onClick={() => setEditProfile(true)} className="col-3 mt-3 btn border-secondary rounded-pill">Edit Profile</button>
                </div>

                <div className="row fw-bold pt-5 fs-5">
                    {profile.firstName} {profile.lastName}
                </div>
                <div className="row text-secondary">
                    @{profile.handle}
                </div>

                <div className="row mt-3 text-white">
                    {profile.bio}
                </div>

                <div className="row text-secondary mt-2">
                    <div className="col-3 ps-0">
                        <i className="bi bi-geo-alt-fill"/> {profile.location}
                    </div>

                    <div className="col-4">
                        <i className="bi bi-balloon-fill"/> Born {profile.dateOfBirth}
                    </div>

                    <div className="col-5">
                        <i className="bi bi-calendar-week-fill"/> Joined {profile.dateJoined}
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-2 ps-0">
                        <span>{profile.followingCount}</span><span className="text-secondary ps-2">Following</span>
                    </div>
                    <div className="col-2 ps-5">
                        <span>{profile.followersCount}</span><span className="text-secondary ps-2">Followers</span>
                    </div>
                </div>
            </div>
        </>
    )
};
export default  ProfileComponent;
