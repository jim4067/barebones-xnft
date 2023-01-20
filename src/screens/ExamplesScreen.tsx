import { Button, Image, Text, View } from "react-native";
import * as Linking from "expo-linking";

import { Section } from "../components/Section";
import { Screen } from "../components/Screen";
import { RedBackpack } from "./HomeScreen";

function LearnMoreLink({ url }: { url: string }) {
  return <Text onPress={() => Linking.openURL(url)}>Learn more</Text>;
}

export function ExamplesScreens() {

  return (
    <Screen>
      <Section title="Local Image Import">
        {/* <Image
          source={require("../../assets/icon.png")}
          style={{ width: 50, height: 50 }}
        /> */}
        <RedBackpack />
        <LearnMoreLink url="https://reactnative.dev/docs/images#static-image-resources" />
      </Section>
      <Section title="Custom Font">
        <Text style={{ fontFamily: "Inter_900Black" }}>
          Inter 900 Black Font
        </Text>
        <LearnMoreLink url="https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font" />
      </Section>
      <Section title="Opening a URL">
        <Button
          onPress={() => Linking.openURL("https://xnft.gg")}
          title="Open xNFT.gg"
        />
        <LearnMoreLink url="https://docs.expo.dev/versions/latest/sdk/linking/#linkingopenurlurl" />
      </Section>
    </Screen>
  );
}
