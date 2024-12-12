import Lottie from "lottie-react";

type AnimationLottieProps = {
  animationPath: unknown;
};

export const AnimationLottie = ({ animationPath }: AnimationLottieProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};
