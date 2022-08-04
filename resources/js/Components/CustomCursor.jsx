import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";

const CustomCursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="255, 160, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ToastContainer />
    </>
  );
};

export default CustomCursor;
