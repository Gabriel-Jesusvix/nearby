import { Welcome } from "@/components/Welcome";
import { Text, View } from "react-native";
import { s } from "./styles";
import { Steps } from "@/components/steps";



export default function App() {
  return (
    <View
      style={s.container}
    >
      <Welcome />
      <Steps />
    </View>
  )
}