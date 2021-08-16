import React from 'react';
import CustomText from "./packages/ui/components/common/custom/text/CustomText";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaView style={{ flex:1, justifyContent:'center', alignItems:'center', position:'relative' }}>
        <CustomText isBold>Common text for all application</CustomText>
      </SafeAreaView>
  );
}
