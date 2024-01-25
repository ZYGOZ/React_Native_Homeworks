import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProfileIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#B8B8B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.487 11.789c-3.223 0-5.975.487-5.975 2.438 0 1.952 2.735 2.457 5.975 2.457 3.223 0 5.975-.488 5.975-2.44 0-1.95-2.734-2.455-5.975-2.455Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#B8B8B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M7.487 9.005a3.83 3.83 0 1 0-3.83-3.83 3.817 3.817 0 0 0 3.803 3.83h.027Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ProfileIcon;
