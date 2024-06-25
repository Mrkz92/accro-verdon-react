import React, { useState, useEffect } from "react";
import teaserBg from "../assets/videos/AV1080p.webm";
import teaserBgMobile from "../assets/videos/AV_IG.mp4";
import "./VideoIntro.scss";

export default function VideoIntro() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [muted, setMuted] = useState(true); // État du son (muet ou non)
  const [volume, setVolume] = useState(0.5); // Valeur du volume (entre 0 et 1)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleMute = () => {
    setMuted((currentMuted) => !currentMuted);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="VideoIntro">
      <video
        src={isMobile ? teaserBgMobile : teaserBg}
        autoPlay
        loop
        muted={muted}
      ></video>
      <button onClick={handleToggleMute}>
        {muted ? (
          <i class="ri-volume-mute-line"></i>
        ) : (
          <i class="ri-volume-up-line"></i>
        )}
      </button>
    </div>
  );
}
