import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import CalendarIcon from "../icons/CalendarIcon";
import ClockIcon from "../icons/ClockIcon";

interface StyledTextInput {
  placeholder: string;
  title: string;
  multiline?: boolean;
  editable?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  style?: StyleProp<ViewStyle>;
  isDatePicker?: boolean;
  isTimePicker?: boolean;
}

// Так небольшой коментарий к тому что я тут наделал
// Я понимаю что настолько перегруженные большой компонент не хорошо писать но мне было интересно вот так подойти к этой задаче и реализовать один универсальный компонент под все инпуты в приложении
// ну я не имею ввиду прям прям все все но вот вариативность есть
// так вот я лично вижу два варианта как можно было сделать чуть лучше чем-то что я сделал здесь ну на мой взгляд лучше
// первое писать в отдельных двух компонентах инпут с пикером под дату и под время (DateInput,TimeInput)
// второе в скрин компоненте завернуть наши StyledInput во View и внутри них отображать также как в этом компоненте что по-моему мнению не очень ну только если это единичный момент во всём приложении

// а ещё с этим пикером непонятные приколы он в случайный момент два раза под ряд вылетает и приходится дважды выбирать такое и с датой и со временем просиходит
// я не нашел как можно это по фиксить и особых догадок у меня нет подозреваю что проблема конкретно этого пикера...ну или в моей криворукости :)

// а ещё этот пикер нельзя стайлить ну как нельзя можно но только на IOS

const StyledTextInput: React.FC<StyledTextInput> = ({
  placeholder,
  title,
  value,
  editable = true,
  multiline = false,
  onChangeText,
  style,
  isDatePicker = false,
  isTimePicker = false,
}) => {
  const [valueState, setValueState] = useState(value);
  const [date, setDate] = useState(new Date()); // эти два стейта нужны просто чтобы связываться с пикерами ну по факту они не нужны потому что я в строку Value записываю
  const [time, setTime] = useState(new Date()); // но в них надо было передать value соответсвуещего типа так что так
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  useEffect(() => {
    // тут мы проверяем если у нас инпут относится к пикерам даты или времени он сразу запрещает менять его Value через ввод
    if (isDatePicker == true || isTimePicker == true) {
      editable = false;
    }
  }, []);

  const formatDate = (rawDate: Date) => {
    // просто хороший тон выделить в отдельную функцию
    let date = new Date(rawDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    month = month < 10 ? `0${month}` : month; // у меня тут жалуется на то что month это стринг и не может сравниваться с number но month это number ._.
    // upd до меня дошло что это из-за того что у меня в условии возвращется либо стринг либо нумбер и у этого отдельный тип данных string | number но что делать с этим не знаю так что оставлю так
    day = day < 10 ? `0${day}` : day; // тоже самое
    return `${day}-${month}-${year}`;
  };

  const formatTime = (rawDate: Date) => {
    // просто хороший тон выделить в отдельную функцию
    let date = new Date(rawDate);
    let minutes = date.getMinutes();
    let hours = date.getHours();
    minutes = minutes < 10 ? `0${minutes}` : minutes; // тоже самое
    hours = hours < 10 ? `0${hours}` : hours; // тоже самое

    return `${hours}-${minutes}`;
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || new Date(); // selectedDate не имеет начального значения так что приходиться давать значения самому
    setValueState(formatDate(currentDate));
    setShowDatePicker(!showDatePicker);
    onChangeText(valueState);
  };

  const handleTimeChange = (event: any, selectedTime?: Date) => {
    const currentTime = selectedTime || new Date(); // selectedDate не имеет начального значения так что приходиться давать значения самому
    setValueState(formatTime(currentTime));
    setShowTimePicker(!showTimePicker);
    onChangeText(valueState);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <TextInput
          editable={editable}
          multiline={multiline}
          value={isDatePicker || isTimePicker ? valueState : value}
          onChangeText={onChangeText}
          style={[style, styles.input]}
          placeholder={placeholder}
          placeholderTextColor="#999"
        />

        {isDatePicker && (
          <View style={styles.icon}>
            <TouchableOpacity
              onPressOut={() => {
                setShowDatePicker(!showDatePicker);
              }}
            >
              <CalendarIcon />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View>
        )}

        {isTimePicker && (
          <View style={styles.icon}>
            <TouchableOpacity
              onPressOut={() => {
                setShowTimePicker(!showTimePicker);
              }}
            >
              <ClockIcon />
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                value={time}
                is24Hour={true}
                mode="time"
                display="default"
                onChange={handleTimeChange}
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 14,
    color: "#1B1B1D",
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: "white",
  },
  icon: {
    height: "100%",
    alignSelf: "flex-end",
    justifyContent: "center",
    position: "absolute",
    padding: 16,
  },
});

export default StyledTextInput;
