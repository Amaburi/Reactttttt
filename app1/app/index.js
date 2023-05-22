import { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { NavigationProvider, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from './constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from './components';

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

function AppContent() {
  const router = useRouter();

  useEffect(() => {
    router.setOptions({
      headerStyle: { backgroundColor: COLORS.lightWhite },
      headerShadowVisible: false,
      headerLeft: () => (
        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
      ),
      headerRight: () => (
        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
      ),
      headerTitle: ""
    });
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
