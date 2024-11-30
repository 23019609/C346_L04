import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
// npm install --save react-native-vector-icons
import Icon from "react-native-vector-icons/Fontisto";
// npx expo install expo-font
// npx expo install @expo-google-fonts/arbutus-slab
import {
    useFonts,
    ArbutusSlab_400Regular,
} from "@expo-google-fonts/arbutus-slab";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 20,
        backgroundColor: "#fef9f2",
        borderColor: "#f7efcb",
        borderWidth: 2,
        borderRadius: 25,
    },
    Name: {
        textTransform: "uppercase",
        fontFamily: "Arbutus_Slab",
        fontSize: 20,
        color: "#e7f5ff",
        textAlign: "center",
        textAlignVertical: "center",
    },
    NameBox: {
        width: 340,
        height: 30,
        marginTop: 20,
        marginBottom: 10,
        alignSelf: "center",
        backgroundColor: "#789dbc",
        borderColor: "#7ba2c2",
        borderWidth: 2,
        borderStyle: "dashed",
        borderRadius: 7,
    },
    Description: {
        width: 330,
        lineHeight: 20,
        fontSize: 15,
        marginTop: 10,
        marginBottom: 15,
        paddingTop: 5,
        paddingBottom: 5,
        alignSelf: "center",
        justifyContent: "center",
        fontFamily: "Poppins",
        color: "#003366b8",
        borderColor: "#7ba2c2",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderStyle: "dashed",
    },
    Image: {
        height: 200,
        width: 340,
        marginTop: 5,
        marginBottom: 20,
        borderRadius: 10,
        alignSelf: "center",
        resizeMode: "cover",
    },
});

const Boat = ({ name, description, picture }) => {
    useFonts({
        Arbutus_Slab: ArbutusSlab_400Regular,
        Poppins: Poppins_400Regular,
    });

    return (
        <View style={styles.Parent}>
            <View style={styles.NameBox}>
                <Text style={styles.Name}>
                    <Icon name="sait-boat" size={20} color="#e7f5ff" /> {name}
                </Text>
            </View>
            <Text style={styles.Description}>{description}</Text>
            <Image source={picture} style={styles.Image} />
        </View>
    );
};

export default Boat;
