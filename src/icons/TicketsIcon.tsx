import * as React from "react";
import Svg, { Path } from "react-native-svg";

const TicketIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      stroke="#B8B8B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.35}
      d="M9.887 1.189v1.814M9.887 11.319v1.517M9.887 8.741V5.126"
    />
    <Path
      stroke="#B8B8B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.35}
      d="M13.527 12.999c1.367 0 2.473-1.093 2.473-2.443V8.612c-.904 0-1.632-.719-1.632-1.611A1.62 1.62 0 0 1 16 5.388V3.443c0-1.349-1.108-2.442-2.473-2.442H3.476c-1.366 0-2.473 1.093-2.473 2.442v2.008c.903 0 1.631.657 1.631 1.55 0 .892-.728 1.611-1.632 1.611v1.944C1.003 11.906 2.11 13 3.476 13h10.051Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default TicketIcon;
