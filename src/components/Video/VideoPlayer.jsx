import React, { useContext } from "react";
import { SocketContext } from "../../contexts/SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className="mx-auto mt-16 max-w-7xl px-2 sm:px-6 lg:px-8">
      <h1 className="font-bold text-3xl mb-6 text-gray-900">Video Player</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* our video */}
        {stream && (
          <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow">
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className="rounded-t-lg w-full aspect-square object-cover"
            />
            <div className="p-2">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {name}
              </h5>
            </div>
          </div>
        )}
        {/* user video */}
        {callAccepted && !callEnded && (
          <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow">
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className="rounded-t-lg w-full aspect-square object-cover"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {call.name}
              </h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
