import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, Alert } from 'react-native';
import Hello from './Hello';
import Goodbye from './Goodbye';


export default function App() {

  let username = "teerasej"

  let onSignIn = () => {
    Alert.alert("Opps.", "ไม่พบบัญชีผู้ใช้")
  }

  return (
    <View style={styles.container}>
      {/* SafeArea ด้านบน */}
      <SafeAreaView style={styles.safeAreaTop}>
      </SafeAreaView>
      {/* SafeArea ด้านส่วนที่เหลือ  */}
      <SafeAreaView style={styles.safeAreaBottom}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Header</Text>
          <Hello></Hello>
          <Goodbye></Goodbye>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>Content</Text>
          <Button title="ลงชื่อเข้าใช้" onPress={onSignIn}  />
          <Hello name={username}></Hello>
          <Goodbye></Goodbye>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Footer</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  // เพิ่ม Stylesheet สำหรับ SafeArea ด้านบน กำหนด flex เป็น 0 เพื่อไม่ให้กินพื้นที่ลงมาด้านล่าง
  safeAreaTop: {
    flex: 0,
    backgroundColor: 'red',
  },
  // เพิ่ม Stylesheet สำหรับ SafeArea ด้านล่าง กำหนด flex เป็น 1 เพื่อให้กินพื้นที่ด้านล่างทั้งหมด
  safeAreaBottom: {
    flex: 1,
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
  },
  content: {
    flex: 18,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  contentText: {
    fontSize: 24,
    color: 'black',
  },
  footer: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 24,
    color: 'white',
  },

});
