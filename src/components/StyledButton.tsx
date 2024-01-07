import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";

interface StyledButton {
  onPress: () => void;
  title: string;
  inputStyles?: StyleProp<ViewStyle>;
}

const StyledButton: React.FC<StyledButton> = ({
  title,
  onPress,
  inputStyles,
}) => {
  return (
    <TouchableOpacity
      className={`w-full py-4 bg-green-600  rounded-full flex items-center${inputStyles}`}
      style={[inputStyles]}
      onPress={onPress}
    >
      <Text className="text-white text-center text-lg  font-semibold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
