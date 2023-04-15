import React, { useContext } from "react";

import { SocketContext } from "../../contexts/SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
 console.log(call);
  return ( 
    <>
        <h1 className="text-xl font-bold">Notifications or Incoming Calls-:</h1>
        {call.isReceivingCall && !callAccepted && (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h1>{call.name} is calling:</h1>
            <button variant="contained" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" color="primary" onClick={answerCall}>
              Answer 
            </button>
          </div>
        )}
    </>
  );
};

export default Notifications;
