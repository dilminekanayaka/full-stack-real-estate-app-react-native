import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Property() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Property Page - ID: {id}</Text>
    </View>
  );
}
