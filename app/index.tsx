import { Text, View } from "react-native";
import { Stack } from "expo-router"; // You need to import Stack

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/index.ts to edit this screen.</Text>
      </View>
    </>
  );
}
