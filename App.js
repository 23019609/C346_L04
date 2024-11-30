// ==================== EXERCISE 1 ====================
//
// import React from "react";
// import { View, Text } from "react-native";
//
// const Exercise1 = () => {
//     return (
//         <View>
//             <Text style={{ fontSize: 24 }}>RP Values</Text>
//             <Text style={{ color: "green" }}>Excellence</Text>
//             <Text style={{ backgroundColor: "yellow" }}>Customer-Centric</Text>
//             <Text style={{ fontStyle: "italic" }}>Integrity</Text>
//             <Text style={{ textAlign: "center" }}>Teamwork</Text>
//             <Text style={{ backgroundColor: "black", color: "white" }}>
//                 Enterprising
//             </Text>
//         </View>
//     );
// };
//
// export default Exercise1;

// ==================== EXERCISE 2 ====================
//
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//     greenBox: {
//         width: 100,
//         height: 100,
//         marginTop: 30,
//         backgroundColor: "green",
//         borderWidth: 1,
//         borderColor: "black",
//     },
//     boxText: {
//         textAlign: "center",
//         color: "white",
//     },
//     title: {
//         fontWeight: "bold",
//     },
// });
//
// const Exercise2 = () => {
//     return (
//         <View style={{ marginTop: 50 }}>
//             <View style={styles.greenBox}>
//                 <Text style={[styles.boxText, styles.title]}>Who Are We</Text>
//             </View>
//             <View style={styles.greenBox}>
//                 <Text style={[styles.boxText, styles.title]}>Our People</Text>
//             </View>
//             <View style={styles.greenBox}>
//                 <Text style={[styles.boxText, styles.title]}>Our Campus</Text>
//             </View>
//         </View>
//     );
// };
//
// export default Exercise2;

// ==================== EXERCISE 3A ====================
//
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//     Parent: {
//         flexDirection: "row",
//         backgroundColor: "#F5fcff",
//         borderColor: "#0099AA",
//         borderWidth: 5,
//     },
//     Child: {
//         borderWidth: 2,
//         textAlign: "center",
//         fontSize: 24,
//     },
// });
//
// const Exercise3 = () => {
//     return (
//         <View style={[styles.Parent, { marginTop: 50 }]}>
//             <Text style={[styles.Child, { backgroundColor: "powderblue" }]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, { backgroundColor: "skyblue" }]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, { backgroundColor: "steelblue" }]}>
//                 Child Three
//             </Text>
//         </View>
//     );
// };
//
// export default Exercise3;

// ==================== EXERCISE 3B ====================
//
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: "column",
//         backgroundColor: "#F5fcff",
//         borderColor: "#0099AA",
//         borderWidth: 5,
//     },
//     Child: {
//         flex: 1,
//         borderWidth: 2,
//         textAlign: "center",
//         fontSize: 24,
//     },
// });
//
// const Exercise3 = () => {
//     return (
//         <View style={[styles.Parent, { marginTop: 50 }]}>
//             <Text style={[styles.Child, { backgroundColor: "powderblue" }]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, { backgroundColor: "skyblue" }]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, { backgroundColor: "steelblue" }]}>
//                 Child Three
//             </Text>
//         </View>
//     );
// };
//
// export default Exercise3;

// ==================== EXERCISE 3C ====================
//
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: "column",
//         backgroundColor: "#F5fcff",
//         borderColor: "#0099AA",
//         borderWidth: 5,
//     },
//     Child: {
//         flex: 1,
//         borderWidth: 2,
//         textAlign: "center",
//         fontSize: 24,
//     },
// });
//
// const Exercise3 = () => {
//     return (
//         <View style={[styles.Parent, { marginTop: 50 }]}>
//             <Text
//                 style={[
//                     styles.Child,
//                     { backgroundColor: "powderblue", maxWidth: 90 },
//                 ]}
//             >
//                 Child One
//             </Text>
//             <Text style={[styles.Child, { backgroundColor: "skyblue" }]}>
//                 Child Two
//             </Text>
//             <Text
//                 style={[
//                     styles.Child,
//                     { backgroundColor: "steelblue", maxHeight: 120 },
//                 ]}
//             >
//                 Child Three
//             </Text>
//         </View>
//     );
// };
//
// export default Exercise3;

// ==================== EXERCISE 3D ====================
//
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//     Parent: {
//         flexDirection: "row",
//         backgroundColor: "#F5fcff",
//         borderColor: "#0099AA",
//         borderWidth: 5,
//     },
//     Child: {
//         borderWidth: 2,
//         textAlign: "center",
//         fontSize: 24,
//     },
// });
//
// const Exercise3 = () => {
//     return (
//         <View style={[styles.Parent, { marginTop: 50 }]}>
//             <Text
//                 style={[
//                     styles.Child,
//                     { backgroundColor: "powderblue", flex: 1 },
//                 ]}
//             >
//                 Child One
//             </Text>
//             <Text
//                 style={[styles.Child, { backgroundColor: "skyblue", flex: 2 }]}
//             >
//                 Child Two
//             </Text>
//             <Text
//                 style={[
//                     styles.Child,
//                     { backgroundColor: "steelblue", flex: 3 },
//                 ]}
//             >
//                 Child Three
//             </Text>
//         </View>
//     );
// };
//
// export default Exercise3;

// ==================== EXERCISE 3E ====================
//
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: "column",
//         backgroundColor: "#F5fcff",
//         borderColor: "#0099AA",
//         borderWidth: 5,
//         // justifyContent: 'flex-start',
//         // justifyContent: 'flex-end',
//         // justifyContent: 'space-around',
//         justifyContent: "space-between",
//     },
//     Child: {
//         borderWidth: 2,
//         textAlign: "center",
//         fontSize: 24,
//     },
// });
//
// const Exercise3 = () => {
//     return (
//         <View style={[styles.Parent, { marginTop: 50 }]}>
//             <Text style={[styles.Child, { backgroundColor: "powderblue" }]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, { backgroundColor: "skyblue" }]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, { backgroundColor: "steelblue" }]}>
//                 Child Three
//             </Text>
//         </View>
//     );
// };
//
// export default Exercise3;

// ==================== EXERCISE 4 ====================
//
// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: "row",
//         backgroundColor: "whitesmoke",
//         marginTop: 30,
//         justifyContent: "space-evenly",
//         alignItems: "center",
//         verticalAlign: "center",
//     },
//     Child: {
//         width: 80,
//         height: 80,
//         textAlign: "center",
//         textAlignVertical: "center",
//         alignItems: "center",
//     },
// });
//
// const Exercise4 = () => {
//     return (
//         <View style={styles.Parent}>
//             <Text style={[styles.Child, { backgroundColor: "#81caed" }]}>
//                 Square 1
//             </Text>
//             <Text style={[styles.Child, { backgroundColor: "#5ec1ac" }]}>
//                 Square 2
//             </Text>
//             <Text style={[styles.Child, { backgroundColor: "#ed2a3b" }]}>
//                 Square 3
//             </Text>
//         </View>
//     );
// };
//
// export default Exercise4;

// ==================== EXERCISE 5 (L02 Boats) ====================
//
// import React from "react";
// import { ScrollView, View, Text, StyleSheet } from "react-native";
// import Boat from "./components/Boats";
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: "column",
//         margin: 20,
//         marginTop: 50,
//     },
//     Header: {
//         height: 35,
//         textAlign: "center",
//         textAlignVertical: "center",
//         fontFamily: "Arbutus_Slab",
//         fontSize: 20,
//         color: "#4a4a4acc",
//     },
//     HeaderBox: {
//         width: 370,
//         height: 40,
//         marginTop: 20,
//         alignSelf: "center",
//         borderColor: "#4a4a4acc",
//         borderWidth: 2,
//         borderStyle: "dashed",
//         borderRadius: 25,
//         backgroundColor: "#ffe3e3",
//     },
// });
//
// const BoatList = [
//     {
//         name: "Sea Ray 500 Sundancer",
//         description:
//             "Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.",
//         picture: require("./img/boats/sea_ray.jpg"),
//     },
//     {
//         name: "Four Winns Horizon 180",
//         description:
//             "A sporty look and refined details truly set the Horizon 180 above all others.",
//         picture: require("./img/boats/four_winns.jpg"),
//     },
//     {
//         name: "Flipper 640 ST",
//         description:
//             "A modern take on the classic, traditional hardtop and perfect for a family picnic.",
//         picture: require("./img/boats/flipper.jpg"),
//     },
//     {
//         name: "Princess V48",
//         description:
//             "There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.",
//         picture: require("./img/boats/princess.jpg"),
//     },
//     {
//         name: "Bayliner 175 Bowrider",
//         description:
//             "Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.",
//         picture: require("./img/boats/bayliner.jpg"),
//     },
//     {
//         name: "Fairline Targa 47",
//         description:
//             "Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.",
//         picture: require("./img/boats/fairline.jpg"),
//     },
// ];
//
// const App = () => {
//     return (
//         <ScrollView style={styles.Parent}>
//             <View style={styles.HeaderBox}>
//                 <Text style={styles.Header}>GetABoat - For Sale</Text>
//             </View>
//             {/*<Boat name="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." picture="sea_ray.jpg" />*/}
//             {/*<Boat name="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others." picture="four_winns.jpg" />*/}
//             {/*<Boat name="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." picture="flipper.jpg" />*/}
//             {/*<Boat name="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." picture="princess.jpg" />*/}
//             {/*<Boat name="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." picture="bayliner.jpg" />*/}
//             {/*<Boat name="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." picture="fairline.jpg" />*/}
//
//             {BoatList.map((boat, i) => (
//                 <Boat
//                     key={"boat_" + i}
//                     name={boat.name}
//                     description={boat.description}
//                     picture={boat.picture}
//                 />
//             ))}
//         </ScrollView>
//     );
// };
//
// export default App;

// ==================== EXERCISE 5 (L03 Quiz) ====================

import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Alert,
    Image,
    ScrollView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {
    useFonts,
    ArbutusSlab_400Regular,
} from "@expo-google-fonts/arbutus-slab";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        flexDirection: "column",
        margin: 20,
        marginTop: 50,
        marginBottom: 10,
    },
    Header: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center",
        color: "#e7f5ff",
        fontFamily: "Arbutus_Slab",
        fontSize: 30,
        lineHeight: 40,
    },
    HeaderBox: {
        width: 370,
        height: 65,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#789dbc",
        borderColor: "#7ba2c2",
        borderWidth: 2,
        borderStyle: "dashed",
        borderRadius: 25,
    },
    Image: {
        width: 340,
        height: 340,
        marginTop: 10,
        alignSelf: "center",
        borderRadius: 25,
    },
    Question: {
        marginTop: 15,
        marginBottom: -5,
        alignSelf: "center",
        lineHeight: 25,
        color: "#003366b8",
        fontFamily: "Poppins",
        fontSize: 15,
        borderColor: "#7ba2c2",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderStyle: "dashed",
    },
    QuestionBox: {
        width: 370,
        height: 445,
        marginTop: 20,
        marginBottom: 10,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#fef9f2",
        borderColor: "#f7efcb",
        borderWidth: 2,
        borderStyle: "dashed",
        borderRadius: 25,
    },
    ButtonStyle: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 5,
        width: 370,
        height: 40,
        borderRadius: 25,
        elevation: 2,
        backgroundColor: "#ffe3e3",
    },
    ButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "#4a4a4acc",
    },
});

const MyApp = () => {
    // after npx expo install @expo-google-fonts/arbutus-slab
    // and adding importing it and useFonts
    // add line below ("Arbutus_Slab: " is optional, it is like a custom name that you can change)
    useFonts({
        Arbutus_Slab: ArbutusSlab_400Regular,
        Poppins: Poppins_400Regular,
    });

    const [answers, setAnswers] = useState([]);

    // const checkAnswer = (correctAnswer) => {
    //      answer === correctAnswer
    //         ? console.log("Correct answer")
    //         : console.log("Wrong answer")
    // };

    // takes index defined in <Question ... />, so that value of that qn no can be written over
    // !!! order of parameters matter a lot, pass the arguments in the same order as called in Question onValueChange !!!
    const handleAnswerChange = (index, value) => {
        setAnswers((prev) => {
            // create a new array based on prev state
            const updateAnswers = [...prev];
            updateAnswers[index] = value;

            return updateAnswers;
        });
    };

    const handleSubmit = () => {
        let score = 0;
        if (answers[0] === "Birman Cat") score += 1;
        if (answers[1] === "Calico Cat") score += 1;
        if (answers[2] === "Sand Cat") score += 1;

        console.log(answers);

        let finalScore = score;
        let alertMsg = "";

        if (finalScore === 3) {
            alertMsg = "Excellent job! You scored 3/3!";
        } else if (finalScore === 2) {
            alertMsg = "Good job! You scored 2/3!";
        } else if (finalScore === 1) {
            alertMsg = "Nice try! You scored 1/3.";
        } else if (finalScore === 0) {
            alertMsg = "Better luck next time!";
        } else {
            alertMsg = "random debug msg to pinpoint error blah blah blah";
        }

        Alert.alert(alertMsg);
    };

    const questionList = [
        {
            id: "qn1",
            img: require("./img/cats/birman_cat.jpg"),
            option1: "Ragdoll Cat",
            option2: "Snowshoe Cat",
            option3: "Siamese Cat",
            option4: "Birman Cat",
        },
        {
            id: "qn2",
            img: require("./img/cats/calico_cat.jpg"),
            option1: "Tuxedo Cat",
            option2: "Orange Cat",
            option3: "Calico Cat",
            option4: "Chimera Cat",
        },
        {
            id: "qn3",
            img: require("./img/cats/sand_cat.jpg"),
            option1: "Fawn Cat",
            option2: "Sand Cat",
            option3: "Tabby Cat",
            option4: "Beige Cat",
        },
    ];

    const Question = ({ index, img, option1, option2, option3, option4 }) => {
        return (
            <View style={styles.QuestionBox}>
                <Image source={img} style={styles.Image} />

                <Text style={styles.Question}>What type of cat is this?</Text>
                {/*i genuinely dont know how to phrase this qn better sorry*/}
                <RNPickerSelect
                    onValueChange={(value) => {
                        handleAnswerChange(index, value);
                    }}
                    items={[
                        { label: option1, value: option1 },
                        { label: option2, value: option2 },
                        { label: option3, value: option3 },
                        { label: option4, value: option4 },
                    ]}
                    // update value of dropdown box
                    value={answers[index]}
                />
            </View>
        );
    };

    // reference: https://docs.expo.dev/ui-programming/react-native-styling-buttons/
    function CustomButton({ handleSubmit }) {
        return (
            <Pressable style={styles.ButtonStyle} onPress={handleSubmit}>
                <Text style={styles.ButtonText}>SUBMIT</Text>
            </Pressable>
        );
    }

    return (
        <View style={styles.Parent}>
            <ScrollView style={{ marginBottom: 10 }}>
                {/*Header*/}
                <View style={styles.HeaderBox}>
                    <Text style={styles.Header}>
                        <Icon name="cat" size={30} color="#e7f5ff" /> Cat Types
                        Quiz
                    </Text>
                </View>

                {/*Questions*/}
                {/*using the re-usable custom component more efficiently compared to prev attempt based on new knowledge learnt :D*/}
                {questionList.map((qn, index) => (
                    <Question
                        key={qn.id}
                        index={index}
                        img={qn.img}
                        option1={qn.option1}
                        option2={qn.option2}
                        option3={qn.option3}
                        option4={qn.option4}
                    />
                ))}
            </ScrollView>

            <CustomButton handleSubmit={handleSubmit} />
        </View>
    );
};

export default MyApp;
