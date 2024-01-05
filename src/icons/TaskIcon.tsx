import * as React from "react";
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg";
const TaskIcon = (props: SvgProps) => (
  <Svg width={48} height={48} fill="none" {...props}>
    <Rect width={48} height={48} fill="#DBECF6" rx={24} />
    <G clipPath="url(#a)">
      <Path
        fill="#194A66"
        d="M32 34H16a1 1 0 0 1-1-1V15a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-1-2V16H17v16h14ZM20 19h8v2h-8v-2Zm0 4h8v2h-8v-2Zm0 4h8v2h-8v-2Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M12 12h24v24H12z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TaskIcon;
