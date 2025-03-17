import { Text, View } from "react-native";
import LittleLemonFooter from '../components/LittleLemonFooter';
import LittleLemonHeader from '../components/LittleLemonHeader'

export default function Index() {
  return (
    <>
    <View style={{ flex: 1, backgroundColor: '#495E57' }}>
      <LittleLemonHeader />
    </View>
    <View style={{ backgroundColor: '#495E57' }}>
      <LittleLemonFooter />
    </View>
    </>
  );
}
