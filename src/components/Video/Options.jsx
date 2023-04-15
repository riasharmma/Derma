import React, { Children, useContext, useState } from "react";
import { VideoCameraIcon, MicrophoneIcon } from "@heroicons/react/24/outline";
import { SocketContext } from "../../contexts/SocketContext";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  
  const handleCall = ()=>{
      callUser(me)
  }
  return (
    <div>
      <div className="flex ml-12 gap-12 mt-16 mx-w-sm mx-auto">
        <div className="rounded-full w-16 p-3 border-2 border-red-500">
          <VideoCameraIcon />
        </div>
        <div className="rounded-full w-16 p-3 border-2 border-red-500">
          <MicrophoneIcon />
        </div>
      </div>

      {/* {me} */}
      {/* options */}
      <div className="mt-16 flex justify-center">
        {callAccepted && !callEnded ? (
          <>
            {" "}
            <button
              href="#_"
              onClick={leaveCall}
              class="px-10 py-5 relative rounded group text-white font-medium inline-block"
            >
              <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span class="relative">Hang up</span>
            </button>
          </>
        ) : (
          <button
            href="#_"
            class="px-10 py-5 relative rounded group text-white font-medium inline-block"
            onClick={handleCall}
          >
            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span class="relative">Call Doctor</span>
          </button>
        )}
      </div>
        <div className="mt-5">{children}</div>
    </div>
  );
};

export default Options;
