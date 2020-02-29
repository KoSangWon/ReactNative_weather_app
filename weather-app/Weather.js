import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain:{
        colors:["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "For more info look outside",
        icon: "weather-rainy"
    },
    Clear:{
        colors:["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "Sunny day~~",
        icon: "weather-sunny"
    },
    Thunderstorm:{
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "weather-lightening"
    },
    Clouds:{
        colors:["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, it is boring",
        icon: "weather-cloudy"
    },
    Snow:{
        colors:["#7DE2FC", "#8986E5"],
        title: "Cold as balls",
        subtitle: "Do you wanna build a snowman~",
        icon: "weather-snowy"
    },
    Drizzle:{
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "It like rain",
        icon: "weather-hail"
    },
    Haze:{
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "비도 오고 그래서~",
        icon: "weather-windy"
    },
    Mist:{
        colors:["#89F7FE", "#66A6FF"],
        title: "Mist!!",
        subtitle: "It's like you have no glasses on",
        icon: "weather-fog"
    }
}

/*
export default class Weather extends Component{
    render() {
        return (
            <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons color="white" size={144} name="ios-rainy" />
                    <Text style={styles.temp}>35°C </Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raining like a MF</Text>
                    <Text style={styles.subtitle}>For more info look outside</Text>
                </View>
            </LinearGradient>
        );
    }
}
*/

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

function Weather({weatherName, temp}){
    //console.log(weatherName);//날씨 확인
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}°C </Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

export default Weather;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    temp:{
        fontSize:48,
        backgroundColor:"transparent",
        color:"white",
        marginTop:10,
    },
    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft:25,
    },
    title:{
        fontSize:38,
        backgroundColor: "transparent",
        color:"white",
        marginBottom:10,
    },
    subtitle:{
        fontSize:24,
        backgroundColor:"transparent",
        color:"white",
        marginBottom:24,
    }
});
