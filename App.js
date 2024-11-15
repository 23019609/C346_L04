
// ======================================= EXERCISE 1 =======================================
//
// import React from "react";
// import {View, Text} from 'react-native';
//
// const Exercise1 = () => {
//     return (
//         <View>
//             <Text style={{fontSize: 24}}>RP Values</Text>
//             <Text style={{color: "green"}}>Excellence</Text>
//             <Text style={{backgroundColor: "yellow"}}>Customer-Centric</Text>
//             <Text style={{fontStyle: "italic"}}>Integrity</Text>
//             <Text style={{text: "center"}}>Excellence</Text>
//             <Text style={{color: "green"}}>Excellence</Text>
//         </View>
//     );
// };
//
// export default Exercise1;

// ======================================= EXERCISE 2 =======================================
//
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     greenBox: {
//         width: 100,
//         height: 100,
//         marginTop: 30,
//         backgroundColor: 'green',
//         borderWidth: 1,
//         borderColor: 'black',
//     },
//     boxText: {
//         textAlign: 'center',
//         color: 'white',
//     },
//     title: {
//         fontWeight: 'bold',
//     }
// });
//
// const Exercise2 = () => {
//     return(
//         <View style={{marginTop: 50}}>
//             <View style={styles.greenBox}>
//                 <Text style={[styles.boxText, styles.title]}>
//                     Who Are We
//                 </Text>
//             </View>
//             <View style={styles.greenBox}>
//                 <Text style={styles.boxText}>
//                     Our People
//                 </Text>
//             </View>
//             <View style={styles.greenBox}>
//                 <Text style={styles.boxText}>
//                     Our Campus
//                 </Text>
//             </View>
//         </View>
//     );
// };
//
// export default Exercise2;

// ======================================= EXERCISE 3A =======================================
//
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     Parent: {
//         flexDirection: 'row',
//         backgroundColor: 'F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//     },
//     Child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 28,
//     }
// })
//
// const Exercise3 = () => {
//     return (
//         <View style={[styles.Parent, {marginTop: 50}]}>
//             <Text style={[styles.Child, {backgroundColor: 'powderblue'}]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, {backgroundColor: 'skyblue'}]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, {backgroundColor: 'steelblue'}]}>
//                 Child Three
//             </Text>
//         </View>
//     )
// }
//
// export default Exercise3;

// ======================================= EXERCISE 3B =======================================
//
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: 'F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//     },
//     Child: {
//         flex: 1,
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     }
// })
//
// const Exercise3 = () => {
//     return (
//         <View style={[styles.Parent, {marginTop: 50}]}>
//             <Text style={[styles.Child, {backgroundColor: 'powderblue'}]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, {backgroundColor: 'skyblue'}]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, {backgroundColor: 'steelblue'}]}>
//                 Child Three
//             </Text>
//         </View>
//     )
// }
//
// export default Exercise3;

// ======================================= EXERCISE 3C =======================================
//
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: 'F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//     },
//     Child: {
//         flex: 1,
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     }
// })
//
// const Exercise3 = () => {
//     return (
//         <View style={[styles.Parent, {marginTop: 50}]}>
//             <Text style={[styles.Child, {backgroundColor: 'powderblue', maxWidth: 90}]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, {backgroundColor: 'skyblue'}]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, {backgroundColor: 'steelblue', maxHeight: 120}]}>
//                 Child Three
//             </Text>
//         </View>
//     )
// }
//
// export default Exercise3;

// ======================================= EXERCISE 3D =======================================
//
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     Parent: {
//         flexDirection: 'row',
//         backgroundColor: 'F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//     },
//     Child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 28,
//     }
// })
//
// const Exercise3 = () => {
//     return (
//         <View style={[styles.Parent, {marginTop: 50}]}>
//             <Text style={[styles.Child, {backgroundColor: 'powderblue', flex: 1}]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, {backgroundColor: 'skyblue', flex: 2}]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, {backgroundColor: 'steelblue', flex: 3}]}>
//                 Child Three
//             </Text>
//         </View>
//     )
// }
//
// export default Exercise3;

// ======================================= EXERCISE 3E =======================================
//
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: 'F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//         // justifyContent: 'flex-start',
//         // justifyContent: 'flex-end',
//         // justifyContent: 'space-around',
//         justifyContent: 'space-between',
//     },
//     Child: {
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 28,
//     }
// })
//
// const Exercise3 = () => {
//     return (
//         <View style={[styles.Parent, {marginTop: 50}]}>
//             <Text style={[styles.Child, {backgroundColor: 'powderblue'}]}>
//                 Child One
//             </Text>
//             <Text style={[styles.Child, {backgroundColor: 'skyblue'}]}>
//                 Child Two
//             </Text>
//             <Text style={[styles.Child, {backgroundColor: 'steelblue'}]}>
//                 Child Three
//             </Text>
//         </View>
//     )
// }
//
// export default Exercise3;

// ======================================= EXERCISE 4 =======================================

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        marginTop: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    Child: {
        width: 80,
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
    }
})

const Exercise4 = () => {
    return (
        <View style={styles.Parent}>
            <Text style={[styles.Child, {backgroundColor: '#81caed'}]}>
                Square 1
            </Text>
            <Text style={[styles.Child, {backgroundColor: '#5ec1ac'}]}>
                Square 2
            </Text>
            <Text style={[styles.Child, {backgroundColor: '#ed2a3b'}]}>
                Square 3
            </Text>
        </View>
    )
}

export default Exercise4;
