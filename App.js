import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function App() {
  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      initialRegion={{
        latitude: 53.4807,
        longitude: -2.2426,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        title="TestMarker"
        coordinate={{
          latitude: 53.4807,
          longitude: -2.2426,
        }}
      />

      <Marker
        title="TestMarker3"
        coordinate={{
          latitude: 53.495,
          longitude: -2.2426,
        }}
      >
        <View>
          <Text>I'm a test</Text>
        </View>
      </Marker>

      <Marker
        title="TestMarker2"
        description="A test marker with description to see if it appears on press"
        coordinate={{
          latitude: 53.4807,
          longitude: -2.25,
        }}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
