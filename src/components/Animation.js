import Lottie from "react-lottie-player";
import loadingImg from "../img/loading.json";

function Animation() {
  return <Lottie loop animationData={loadingImg} play style={{ height: "30vh" }} />;
}

export default Animation;
