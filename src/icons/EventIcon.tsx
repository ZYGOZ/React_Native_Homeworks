import * as React from "react";
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg";
const EventIcon = (props: SvgProps) => (
  <Svg width={48} height={48} fill="none" {...props}>
    <Rect width={48} height={48} fill="#E7E2F3" rx={24} />
    <G clipPath="url(#a)">
      <Path
        fill="#4A3780"
        d="M29 15h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1h4v-2h2v2h6v-2h2v2Zm-13 6v10h16V21H16Zm2 4h5v4h-5v-4Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M12 12h24v24H12z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default EventIcon;
