import { Welcome } from "@/components/Welcome";
import { View } from "react-native";
import { s } from "./styles";
import { Steps } from "@/components/steps";
import { Button } from "@/components/Button";
import { router } from "expo-router";



export default function App() {
  return (
    <View
      style={s.container}
    >
      <Welcome />
      <Steps />
      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  )
}