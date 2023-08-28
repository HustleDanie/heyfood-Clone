import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';

const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Welcome Back!
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Log into your account</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}></Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter PIN'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>


                <Button
                    placeholder="Continue"
                    filled

                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                        backgroundColor: '#3ed715',
                        borderColor: '#3ED715',
                        borderRadius: 25,


                    }}

                />
                <Text style={{ fontSize: 14, marginTop: 20 }}>By logging in you agree to our Terms and Condition and Privacy Policy</Text>
                <Text style={{fontSize: 17, textAlign: 'center', marginTop: 20,}}>Forgot PIN?</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                </View>
                <Button
                    title="Continue as a guest"
                    titleTextColor={COLORS.white}
                    //filled
                    onPress={() => navigation.navigate("loginTwo")}

                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                        backgroundColor: '#a5f88e',
                        borderColor: '#a2f78a',
                        borderRadius: 25,


                    }}

                />


            </View>
        </SafeAreaView>
    )
}

export default Login