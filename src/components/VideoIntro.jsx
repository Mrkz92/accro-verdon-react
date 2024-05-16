import teaserBg from "../assets/videos/AV1080p.webm";
import "./VideoIntro.scss";

export default function VideoIntro() {
  return (
    <div className="VideoIntro">
      <video src={teaserBg} autoPlay loop muted></video>
    </div>
  );
}
