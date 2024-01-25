import * as React from "react";
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const TubIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={74}
    fill="none"
    {...props}
  >
    <Rect width={72} height={74} fill="url(#a)" fillOpacity={0.05} rx={16} />
    <Path
      fill="#B8B8B8"
      d="M44.5 14a4.5 4.5 0 0 0-4.473 4H38v2h6v-2h-1.95a2.5 2.5 0 0 1 4.945.336L47 18.5V28H21v2h2v5a5 5 0 0 0 3 4.584V42h2v-2h16v2h2v-2.416a5.001 5.001 0 0 0 2.995-4.349L49 35v-5h2v-2h-2v-9.5a4.5 4.5 0 0 0-4.5-4.5ZM25.001 30h22L47 35a3 3 0 0 1-2.65 2.98l-.174.015L44 38H28a3 3 0 0 1-2.995-2.824L25 35l.001-5Z"
    />
    <Path
      fill="#C9C9C9"
      d="M27.3 59v-6.48h-.86c-.15.7-.77 1.2-1.67 1.22v.69h1.57V59h.96Zm8.852-6.18v-.91h-5.72v.91h2.37V59h.98v-6.18h2.37Zm3 5.6c0 .2.02.47.04.58h.9c-.02-.17-.05-.51-.05-.89v-3.92h-.94v2.9c0 .73-.38 1.23-1.14 1.23-.79 0-1.09-.58-1.09-1.24v-2.89h-.94v3.03c0 1.09.68 1.93 1.8 1.93.56 0 1.16-.23 1.42-.73ZM42.5 59v-.7c.3.52.85.83 1.56.83 1.43 0 2.24-1.13 2.24-2.56 0-1.4-.75-2.52-2.21-2.52-.8 0-1.36.39-1.59.82v-3.11h-.93V59h.93Zm2.84-2.43c0 1.04-.56 1.72-1.42 1.72-.83 0-1.43-.68-1.43-1.72s.6-1.69 1.43-1.69c.87 0 1.42.65 1.42 1.69Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={71.074}
        x2={-2.662}
        y1={53.365}
        y2={52.399}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#176FF2" />
        <Stop offset={1} stopColor="#196EEE" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default TubIcon;
