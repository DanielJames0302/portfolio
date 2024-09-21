import React from "react";

const Video = () => {
  return (
    <div className="flex justify-center items-center">
      <video width="750" height="500" controls>
        <source src="/intro (online-video-cutter.com).mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
