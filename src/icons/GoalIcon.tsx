import * as React from "react";
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg";
const GoalIcon = (props: SvgProps) => (
  <Svg width={48} height={48} fill="none" {...props}>
    <Rect width={48} height={48} fill="#FEF5D3" rx={24} />
    <G clipPath="url(#a)">
      <Path
        fill="#403100"
        d="M25 28.938V31h5v2H18v-2h5v-2.062A8 8 0 0 1 16 21v-6h16v6a8 8 0 0 1-7 7.938ZM18 17v4a6 6 0 1 0 12 0v-4H18Zm-5 0h2v4h-2v-4Zm20 0h2v4h-2v-4Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M12 12h24v24H12z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default GoalIcon;
