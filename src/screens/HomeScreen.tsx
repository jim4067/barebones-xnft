import { Text, View, StyleSheet } from "react-native";

import { Screen } from "../components/Screen";

export function HomeScreen() {
  return (
    <Screen style={styles.container}>
      <View >
        <View>
          <RedBackpack />
        </View>
        <Text style={styles.WAO}>
          WAO
        </Text>
      </View>
    </Screen>

  );
}

export function RedBackpack() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="80"
      viewBox="0 0 55 80"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.71 6.29026C35.6178 6.29026 38.3452 6.68005 40.8705 7.40296C38.3982 1.64085 33.2649 0 27.5519 0C21.8277 0 16.6855 1.64729 14.2188 7.43692C16.7255 6.68856 19.4412 6.29026 22.339 6.29026H32.71ZM21.6739 12.0752C7.86677 12.0752 0 22.9371 0 36.336V50.1C0 51.4399 1.11929 52.5 2.5 52.5H52.5C53.8807 52.5 55 51.4399 55 50.1V36.336C55 22.9371 45.8521 12.0752 32.0449 12.0752H21.6739ZM27.4805 36.4551C32.313 36.4551 36.2305 32.5376 36.2305 27.7051C36.2305 22.8726 32.313 18.9551 27.4805 18.9551C22.648 18.9551 18.7305 22.8726 18.7305 27.7051C18.7305 32.5376 22.648 36.4551 27.4805 36.4551ZM0 60.5901C0 59.2503 1.11929 58.1641 2.5 58.1641H52.5C53.8807 58.1641 55 59.2503 55 60.5901V75.1466C55 77.8264 52.7614 79.9988 50 79.9988H5C2.23857 79.9988 0 77.8264 0 75.1466V60.5901Z"
        fill="#E33E3F"
      />
    </svg>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
  },
  WAO: {
    fontWeight: '800',
    marginTop: '20px',
    textAlign: 'center',
  }
})