import React from 'react';
import { View, Text, Image, StyleSheet, Linking, ScrollView } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import { Entypo } from '@expo/vector-icons'; 

const About = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['white', 'lightblue']}
    >
      <ScrollView
        showsVerticalScrollIndicator={true} 
      >
        <View style={styles.content}>
          <Button
            title="Home"
            onPress={() => navigation.navigate("Welcome")}
            style={styles.button}
          />

          <Text style={styles.heading}>About Us</Text>

          <Text style={styles.paragraph}>
            Welcome to Professional Chat!
          </Text>
          <Text style={styles.paragraph}>
            At Professional Chat, we believe in connecting people and building communities. We're on a mission to bring the world closer together by providing a platform for individuals, friends, families, and communities to connect, share, and communicate in meaningful ways.
          </Text>

          <Text style={styles.heading}>Key Features</Text>

          <Text style={styles.feature}>
            <Entypo name="user" size={11} color="black" style={styles.icon} /> Create your unique profile, showcase your interests, and share your life's moments.
          </Text>
          <Text style={styles.feature}>
            <Entypo name="users" size={11} color="black" style={styles.icon} /> Connect with friends and family, and discover new people with shared interests.
          </Text>
          <Text style={styles.feature}>
            <Entypo name="share" size={11} color="black" style={styles.icon} /> Share photos, videos, and posts with your network.
          </Text>
          <Text style={styles.feature}>
            <Entypo name="chat" size={11} color="black" style={styles.icon} /> Stay in touch with friends through private messaging and group chats.
          </Text>
          <Text style={styles.feature}>
            <Entypo name="network" size={11} color="black" style={styles.icon} /> Join or create communities around your interests, causes, or passions.
          </Text>

          <Text style={styles.heading}>Get Started</Text>

          <Text style={styles.paragraph}>
            Join millions of users worldwide who are already part of the Professional Chat community. Download the app today and start connecting with friends, sharing your life, and discovering new experiences.
          </Text>

          <Text style={styles.heading}>Contact Us</Text>

          <Text style={styles.paragraph}>
            Have questions, feedback, or concerns? We're here to help! Contact our support team at{' '}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('mailto:support@email.com')}
            >
              support@email.com
            </Text>
            .
          </Text>

          <Text style={styles.heading}>Follow Us</Text>

          <View style={styles.socialLinks}>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('[Facebook Link]')}
            >
              Facebook
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('[Twitter Link]')}
            >
              Twitter
            </Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('[Instagram Link]')}
            >
              Instagram
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  button: {
    marginTop: 40,
    width: '20%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  paragraph: {
    fontSize: 16,
    marginTop: 8,
    lineHeight: 24,
  },
  feature: {
    fontSize: 16,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  socialLinks: {
    flexDirection: 'row',
    marginTop: 8,
  },
});

export default About;
