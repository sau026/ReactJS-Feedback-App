import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  checkUserName,
  storeUserName,
} from "../../redux/actions/checkUsernameAction";
import ButtonPrimary from "../primary-button";

import "./index.scss";

const UserModal = (props) => {
  const userNameDetails = useSelector((state) => state.userNameDataReduced);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(null);

  const checkFeedbackExist = () => {
    dispatch(checkUserName(userName));
    dispatch(storeUserName(userName));
  };

  const getModalJSX = () => {
    return (
      <div className="modal-content user__textbox">
        <h3>Please enter your username!!</h3>
        <div className="input__container">
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <span>
            {userName && userNameDetails.userNameData.result?.feedback_exist
              ? "Sorry your preferrence has been already changed, May be you already gone through feedback or canceled the feedback"
              : null}
          </span>
        </div>
        <div className="submit__btn__box">
          {console.log('loader::::::::', userNameDetails, userNameDetails.isLoading)}
          <ButtonPrimary
            btnDisabled={userName ? false : true}
            classDisabled={!userName ? "btn btn__disabled" : "btn"}
            onBtnClick={() => checkFeedbackExist()}
            btnText="Submit"
            btnLoader={userNameDetails && userNameDetails.isLoading}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div id="myModal" className="username__modal">
        {getModalJSX()}
      </div>
    </div>
  );
};

export default UserModal;
