import React from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function DemoScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <Text style={styles.badge}>NEW</Text>
          <Text style={styles.title}>Welcome 👋</Text>
          <Text style={styles.subtitle}>
            Your React Navigation setup is ready. Build something awesome!
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Getting Started</Text>
          <Text style={styles.cardBody}>
            This is a polished demo screen with a clean layout, subtle shadows,
            and accessible touch targets. Use it as a starting point for your
            app.
          </Text>

          <View style={styles.ctaRow}>
            <Pressable
              style={({pressed}) => [
                styles.primaryButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => {Alert.alert("get started","get started")}}>
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                styles.secondaryButton,
                pressed && styles.secondaryButtonPressed,
              ]}
              onPress={() => {Alert.alert("learn more","learn more")}}>
              <Text style={styles.secondaryButtonText}>Learn More</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>⚡</Text>
            <View style={styles.featureTextWrap}>
              <Text style={styles.featureTitle}>Fast Iteration</Text>
              <Text style={styles.featureDesc}>
                Edit this screen and see changes instantly.
              </Text>
            </View>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>🎨</Text>
            <View style={styles.featureTextWrap}>
              <Text style={styles.featureTitle}>Modern UI</Text>
              <Text style={styles.featureDesc}>
                Thoughtful spacing, hierarchy, and contrast.
              </Text>
            </View>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>🔒</Text>
            <View style={styles.featureTextWrap}>
              <Text style={styles.featureTitle}>Best Practices</Text>
              <Text style={styles.featureDesc}>
                Accessible buttons and consistent styles.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 32,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  badge: {
    backgroundColor: '#EEF2FF',
    color: '#3B5BDB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
    overflow: 'hidden',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#6B7280',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
    marginBottom: 16,
    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 6},
    shadowRadius: 12,
    // Android elevation
    elevation: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  cardBody: {
    fontSize: 14,
    lineHeight: 20,
    color: '#4B5563',
    marginBottom: 16,
  },
  ctaRow: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#EFF6FF',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  secondaryButtonPressed: {
    backgroundColor: '#E0EDFF',
  },
  secondaryButtonText: {
    color: '#1D4ED8',
    fontWeight: '700',
    fontSize: 15,
  },
  features: {
    marginTop: 4,
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 8,
    // Android elevation
    elevation: 10,
  },
  featureEmoji: {
    fontSize: 22,
    marginRight: 12,
  },
  featureTextWrap: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  featureDesc: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
});

export default DemoScreen;
