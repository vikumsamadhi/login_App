import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';


const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={['white', 'lightblue']}
        >
            <View style={{ flex: 1 }}>
            <Button
                        title="Home"
                        onPress={() => navigation.navigate("Login")}
                        style={{
                            marginTop: 40,
                            marginBottom: 10,
                            left: 10,
                            width: "20%",
                           
                        }}
                    />
                
               
            <Image
                        source={require("../assets/hero3.jpg")}
                        style={{
                            height: 250,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 100,
                            left:80,
                           transform: [
                               { translateX: 20 },
                               { translateY: 20 },
                                
                            ]
                        }}
                    />

                
               
            </View>
            <Text style={{ textAlign: 'center', marginLeft: 30, marginRight: 30, fontSize: 20, bottom: 210 }}>Bachelor of Information Communication Technology ( Hons )</Text>
            <Text style={{ textAlign: 'justify', marginLeft: 30, marginRight: 30, fontSize: 18, bottom: 220 }}>
            {'\n'}
            I'm Hansini Maheshika, a final year student of the Department of Information Communication Technology Faculty of Technology, Rajarata University of Sri Lanka{'\n'}
            {'\n'}
    
  
            </Text>
            <Image
                        source={require("../assets/google.png")}
                        style={{
                            height: 20,
                            width: 20,
                           
                            position: "absolute",
                            top: 610,
                            left:30,
                           
                                
                            
                        }}
                    />
                        <Text style={{ position: "absolute",top: 610,left:60,fontSize: 15}}>hansinimaheshika98221@gmail.com</Text>

                        <Image
                        source={require("../assets/4.png")}
                        style={{
                            height: 20,
                            width: 20,
                           
                            position: "absolute",
                            top: 645,
                            left:30,
                           
                                
                            
                        }}
                    />
                    <Text style={{ position: "absolute",top: 645,left:60,fontSize: 15}}>+94702849636</Text>
        </LinearGradient>
    )
}

export default Welcome