import React, { useState, useEffect } from "react";
import teaserBg from "../assets/videos/AV1080p.webm";
import teaserBgMobile from "../assets/videos/AV_IG.mp4";
import "./VideoIntro.scss";

export default function VideoIntro() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="VideoIntro">
      <video
        src={isMobile ? teaserBgMobile : teaserBg}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}
