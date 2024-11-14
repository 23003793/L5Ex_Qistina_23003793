import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';

//Ex 1

// const datasource = Array.from({ length: 20 }, (_, i) => ({
//   key: String.fromCharCode(97 + i),
// }));
//
// const renderItem = ({ item }) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
// export default function App() {
//   return (
//       <View style={styles.container}>
//         <FlatList
//             data={datasource}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.key}
//         />
//       </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1,
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left',
//   },
// });

// Ex2

// const datasource = [
//     {
//         title: "Vowels",
//         data: [
//             { key: 'a' },
//             { key: 'e' },
//             { key: 'i' },
//             { key: 'o' },
//             { key: 'u' },
//         ],
//     },
//     {
//         title: "Consonants",
//         data: [
//             { key: 'b' },
//             { key: 'c' },
//             { key: 'd' },
//             { key: 'f' },
//             { key: 'g' },
//             { key: 'h' },
//             { key: 'j' },
//             { key: 'k' },
//             { key: 'l' },
//             { key: 'm' },
//             { key: 'n' },
//             { key: 'p' },
//             { key: 'q' },
//             { key: 'r' },
//             { key: 's' },
//             { key: 't' },
//             { key: 'v' },
//             { key: 'w' },
//             { key: 'x' },
//             { key: 'y' },
//             { key: 'z' },
//         ],
//     },
// ];
//
// const renderItem = ({ item }) => {
//     return (
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//         </TouchableOpacity>
//     );
// };
//
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <SectionList
//                 sections={datasource}
//                 renderItem={renderItem}
//                 renderSectionHeader={({ section: { title } }) => (
//                     <Text
//                         style={[
//                             styles.headerText,
//                             title === 'Vowels' ? styles.vowelHeader : styles.consonantHeader,
//                         ]}
//                     >
//                         {title}
//                     </Text>
//                 )}
//                 keyExtractor={(item) => item.key}
//             />
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 50,
//         backgroundColor: '#fff',
//     },
//     opacityStyle: {
//         borderWidth: 1,
//     },
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: 'left',
//     },
//     // Style for section headers
//     headerText: {
//         fontSize: 20,
//         margin: 10,
//         textAlign: 'center',
//         fontWeight: 'bold',
//     },
//     vowelHeader: {
//         backgroundColor: '#add8e6', // Light blue for vowels
//     },
//     consonantHeader: {
//         backgroundColor: '#90ee90', // Light green for consonants
//     },
// });
