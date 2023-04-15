import React from "react";
import VideoPlayer from "../components/Video/VideoPlayer";
import Options from "../components/Video/Options";
import Notification from "../components/Video/Notification";
import { ContextProvider } from "../contexts/SocketContext";
const VideoPage = () => {
  return (
    <div>
      <ContextProvider>
        <div className="mx-auto mt-16 max-w-7xl px-2 sm:px-6 lg:px-8">
        <VideoPlayer />
        <Options>
          <Notification />
        </Options>
        </div>
      </ContextProvider>
    </div>
  );
};

export default VideoPage;
