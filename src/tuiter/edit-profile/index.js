import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editProfile} from "../profile/profile-reducer";

const EditProfileComponent = ({profile, setEditProfile}) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [birth, setDOB] = useState(profile.dateOfBirth);

    const saveProfileHandler = () => {
        const newProfile = {
            ...profile,
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: birth,
        }
        dispatch(editProfile(newProfile));
        setEditProfile(false);
    }

    return (
        <>
            <div className="row align-items-center ">
                <div className="col-1" onClick={() => setEditProfile(false)}>
                    <i className="bi bi-x-lg"/>
                </div>
                <div className="col-9 ps-0 fw-bold fs-5">
                    Edit Profile
                </div>
                <button onClick={saveProfileHandler} className="col-2 btn border-secondary fw-bold rounded-pill text-white bg-black">
                    Save
                </button>
            </div>
            <div className="row position-relative mt-2">
                <img src={profile.bannerPicture} className="img-fluid" style={{height:"300px"}}/>
                <img src={profile.profilePicture} className="img-fluid col-lg-3 col-sm-4 ms-4 rounded-circle position-absolute" style={{bottom:"-50px"}}/>

            </div>
            <div className="row pt-5 mt-2"/>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="firstname" className="form-label text-secondary">First Name:</label>
                <input onChange={(event) => setFirstName(event.target.value)}
                       id="firstname"
                       type="text"
                       className="form-control"
                       value={firstName}/>
            </div>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="lastname" className="form-label text-secondary">Last Name:</label>
                <input onChange={(event) => setLastName(event.target.value)}
                       id="lastname"
                       type="text"
                       className="form-control"
                       value={lastName}/>
            </div>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="bio" className="form-label text-secondary">Bio:</label>
                <textarea onChange={(event) => setBio(event.target.value)}
                          id="bio"
                          className="form-control"
                          value={bio}/>
            </div>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="location" className="form-label text-secondary">Location:</label>
                <input onChange={(event) => setLocation(event.target.value)}
                       id="location"
                       type="text"
                       className="form-control"
                       value={location}/>
            </div>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="website" className=" text-secondary">Website:</label>
                <input onChange={(event) => setWebsite(event.target.value)}
                       id="website"
                       type="text"
                       className="form-control"
                       value={website}/>
            </div>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="birth" className="form-label text-secondary">Date of Birth:</label>
                <input onChange={(event) => setDOB(event.target.value)}
                       id="birth"
                       type="date"
                       className="form-control"
                       value={birth}/>
            </div>
        </>
    )
}

export default EditProfileComponent;