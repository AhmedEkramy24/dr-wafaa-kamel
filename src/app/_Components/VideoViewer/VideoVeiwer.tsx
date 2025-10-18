import React from "react";

interface VideoViewerProps {
  videoLink: string;
  title: string;
}

export default function VideoVeiwer({ videoLink, title }: VideoViewerProps) {
  return (
    <div>
      <iframe
        src={videoLink.replace("watch?v=", "embed/")}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-[230px] rounded-xl"
      />
    </div>
  );
}
