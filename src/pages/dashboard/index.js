import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../../components/sidebar-left'
import FeedbackModal from '../../components/feedback-popup'
import UserModal from '../../components/username-popup'
import './index.scss';

const Dashboard = () => {
  const userNameDetails = useSelector(
    (state) => state.userNameDataReduced.userNameData.result
  );

  const getAppSidebarJSX = () => {    	
    /**
    * Sidebar JSX code from child component
    */
    return (
      <div className="side-panel">
        <Sidebar></Sidebar>
      </div>
    )
  }

  return (
    <div className="dashboard__page-conatiner -site-text-size">
      { /**  
       * Handling username and 
       main feedback popup 
       */ }
      {!userNameDetails || userNameDetails?.feedback_exist === true ? <UserModal /> : null}  
      {userNameDetails && userNameDetails?.feedback_exist === false ? <FeedbackModal /> : null}
      {getAppSidebarJSX()}
      <div className="main-body">
      </div>
    </div>
  );
}

export default Dashboard;


