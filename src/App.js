import logo from './logo.svg';
import './App.css';
import { useLottie, useLottieInteractivity } from "lottie-react";
import bgAnimation from './anims/BG.json';

const options = {
  animationData: bgAnimation,
};

const style = {
  border: 1,
  borderStyle: "solid",
  borderRadius: 0,
  borderColor: "#fff"
};

const App = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.45],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.45, 1],
        type: "seek",
        frames: [0, 38],
      },
    ],
  });

  return Animation;
};

export default App;
