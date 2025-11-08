import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/sign-in">
        <Text style={styles.link}>Sign In</Text>
      </Link>
      <Link href="/explore">
        <Text style={styles.link}>Explore</Text>
      </Link>
      <Link href="/profile">
        <Text style={styles.link}>Profile</Text>
      </Link>
      <Link href="/properties">
        <Text style={styles.link}>Properties</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  link: { fontSize: 16, marginVertical: 8, color: "#007aff" },
});
