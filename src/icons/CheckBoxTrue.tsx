import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from "react-native-svg";
const CheckBoxTrue = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Rect width={24} height={24} fill="#4A3780" rx={3} />
      <G clipPath="url(#b)">
        <Path
          fill="#fff"
          d="m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414 4.95 4.95Z"
        />
      </G>
    </G>
    <Rect width={23} height={23} x={0.5} y={0.5} stroke="#4A3780" rx={2.5} />
    <Defs>
      <ClipPath id="a">
        <Rect width={24} height={24} fill="#fff" rx={3} />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CheckBoxTrue;
