import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="properties/index" options={{ title: "Properties" }} />
    </Tabs>
  );
}
