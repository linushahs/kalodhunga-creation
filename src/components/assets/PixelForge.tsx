import React, { ReactElement, SVGProps } from "react";

interface PixelForgeProps extends SVGProps<SVGSVGElement> {
  // Add any additional props you want to support here
  color?: string;
}

const PixelForge = ({
  color = "black",
  ...props
}: PixelForgeProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="51"
      viewBox="0 0 52 51"
      fill={color}
      {...props}
    >
      <path
        d="M47.1823 20.4278C46.2317 22.084 45.1341 23.7838 43.9056 25.4972C45.1341 27.2134 46.2317 28.9105 47.1823 30.5668C49.9088 35.3393 51.4668 39.7441 51.4805 43.3889C51.4805 44.4894 51.3334 45.5246 51.0065 46.4726C50.6796 47.4205 50.1676 48.2786 49.4621 48.9814C48.7594 49.6842 47.9014 50.1991 46.9535 50.526C46.0056 50.8529 44.9706 51 43.8702 51C40.2285 50.9891 35.8215 49.4282 31.0494 46.7014C29.3934 45.7507 27.6937 44.6529 25.9805 43.4243C24.2645 44.6529 22.5676 45.7507 20.9115 46.7014C16.1395 49.4282 11.7351 50.9864 8.09071 51C6.99031 51 5.95526 50.8529 5.00738 50.526C4.05951 50.1991 3.20153 49.687 2.4988 48.9814C1.79606 48.2813 1.28129 47.4205 0.954436 46.4753C0.627583 45.5273 0.480469 44.4922 0.480469 43.3916C0.491364 39.7495 2.05209 35.3421 4.77859 30.5695C5.72919 28.9133 6.82688 27.2134 8.0553 25.5C6.82688 23.7838 5.72919 22.0867 4.77859 20.4305C2.05209 15.6579 0.494088 11.2504 0.480469 7.6083C0.480469 6.50778 0.627583 5.47261 0.954436 4.52464C1.28129 3.57666 1.79334 2.71859 2.4988 2.01578C3.20153 1.31297 4.05951 0.798149 5.00738 0.473984C5.95526 0.147095 6.99031 0 8.09071 0C11.7324 0.0108948 16.1395 1.57173 20.9115 4.29852C22.5676 5.24922 24.2672 6.34703 25.9805 7.57558C27.6937 6.34703 29.3934 5.24922 31.0494 4.29852C35.8215 1.57173 40.2258 0.0136185 43.8702 0C44.9706 0 46.0056 0.147095 46.9535 0.473984C47.9014 0.800873 48.7594 1.31297 49.4621 2.01578C50.1649 2.71859 50.6797 3.57666 51.0038 4.52464C51.3307 5.47261 51.4777 6.50778 51.4777 7.6083C51.4668 11.2504 49.9061 15.6579 47.1796 20.4305L47.1823 20.4278ZM32.2588 44.5957C36.7966 47.2081 40.9422 48.5837 43.8702 48.5728C44.7527 48.5728 45.5208 48.453 46.1609 48.2323C46.8037 48.0089 47.3185 47.6902 47.7461 47.268C48.1711 46.843 48.4897 46.3255 48.7104 45.6826C48.931 45.0425 49.0508 44.2742 49.0508 43.3916C49.0617 40.4605 47.6862 36.3145 45.0741 31.779C44.2842 30.4006 43.3827 28.9868 42.3803 27.5485C40.4083 30.1009 38.1557 32.667 35.6499 35.1731C33.144 37.6766 30.5782 39.9321 28.026 41.9043C29.4614 42.9068 30.8778 43.8085 32.256 44.5984L32.2588 44.5957ZM40.8931 25.5C38.8884 22.8494 36.5542 20.1635 33.9366 17.5457C31.3191 14.9279 28.6307 12.5933 25.9832 10.5884C23.3329 12.5933 20.6473 14.9279 18.0298 17.5457C15.4122 20.1635 13.0779 22.8522 11.0732 25.5C13.0779 28.1478 15.4122 30.8364 18.0298 33.4542C20.6473 36.0721 23.3357 38.4066 25.9832 40.4115C28.6307 38.4066 31.3191 36.0721 33.9366 33.4542C36.5542 30.8364 38.8884 28.1478 40.8931 25.5ZM6.88679 31.779C4.27469 36.3173 2.89919 40.4633 2.91009 43.3916C2.91009 44.2742 3.02993 45.0425 3.25056 45.6826C3.47391 46.3255 3.7926 46.8403 4.21479 47.2652C4.64242 47.6902 5.1572 48.0089 5.80001 48.2323C6.4401 48.453 7.20821 48.5728 8.09071 48.5728C11.0215 48.5837 15.1671 47.2081 19.7022 44.5957C21.0804 43.8057 22.4968 42.904 23.9322 41.9016C21.38 39.9293 18.8142 37.6766 16.3084 35.1704C13.8052 32.6643 11.5499 30.0982 9.57788 27.5457C8.57554 28.9813 7.67396 30.3979 6.88407 31.7762L6.88679 31.779ZM19.7049 6.40422C15.1671 3.79184 11.0215 2.41622 8.09344 2.42712C7.21094 2.42712 6.44282 2.54698 5.80274 2.76763C5.15993 2.991 4.64515 3.30973 4.21751 3.73196C3.7926 4.15691 3.47391 4.67444 3.25329 5.31732C3.03266 5.95747 2.91009 6.7257 2.91281 7.6083C2.90192 10.5394 4.27742 14.6854 6.88952 19.221C7.67941 20.5994 8.58099 22.0159 9.58334 23.4515C11.5554 20.899 13.8079 18.3329 16.3138 15.8268C18.8196 13.3234 21.3854 11.0679 23.9376 9.09563C22.5022 8.09318 21.0859 7.19154 19.7076 6.40156L19.7049 6.40422ZM48.7104 5.32005C48.487 4.67717 48.1711 4.16236 47.7461 3.73468C47.3212 3.30973 46.8037 2.99373 46.1609 2.77036C45.5208 2.54698 44.7527 2.42985 43.8702 2.42985C40.9394 2.41895 36.7938 3.79456 32.2588 6.40694C30.8805 7.19693 29.4669 8.09863 28.0315 9.10109C30.5836 11.0733 33.1494 13.3261 35.6553 15.8322C38.1585 18.3384 40.4138 20.9045 42.3858 23.4569C43.3881 22.0213 44.2897 20.6048 45.0796 19.2264C47.6917 14.6881 49.0672 10.5421 49.0563 7.61376C49.0563 6.73116 48.9365 5.96293 48.7158 5.32277L48.7104 5.32005Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PixelForge;
