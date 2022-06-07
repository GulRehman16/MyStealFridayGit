// // import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// // import React, { useState } from 'react'

// // const Steps1 = () => {

// //     const [state, setState] = useState(true)
// //     const [state1, setState1] = useState(true)

// //     const nextBtn = () => {
// //         setState(state + 1)
// //     }

// //     return (
// //         <View style={{
// //             justifyContent: 'center', alignItems: 'center', marginTop: 100,
// //             backgroundColor: '#fe56'
// //         }}>
// //             <Text style={{ color: '#fff', fontSize: 30 }}>Steps1</Text>
// //             <View style={styles.box}>
// //                 <TouchableOpacity style={{
// //                     width: 80,
// //                     height: 80,
// //                     borderRadius: 50,
// //                     backgroundColor: 'yellow',
// //                     margin: 30, bottom: -70, alignItems: 'center', justifyContent: 'center',


// //                 }}>
// //                     <View style={styles.circleview}><Text style={styles.txt}>1</Text>
// //                     </View>
// //                 </TouchableOpacity>
// //                 <TouchableOpacity style={{
// //                     width: 80,
// //                     height: 80,
// //                     borderRadius: 50,
// //                     backgroundColor: 'yellow',
// //                     margin: 30, bottom: -70, alignItems: 'center', justifyContent: 'center',
// //                     backgroundColor: state === false ? '#f52667' : 'transparent',
// //                 }}>
// //                     <View style={styles.circleview}><Text style={styles.txt}>1</Text>
// //                     </View>
// //                 </TouchableOpacity>
// //                 <TouchableOpacity style={{
// //                     width: 80,
// //                     height: 80,
// //                     borderRadius: 50,
// //                     backgroundColor: 'yellow',
// //                     margin: 30, bottom: -70, alignItems: 'center', justifyContent: 'center',
// //                     backgroundColor: state === false ? '#f52667' : 'transparent',


// //                 }}>
// //                     <View style={styles.circleview}><Text style={styles.txt}>1</Text>
// //                     </View>
// //                 </TouchableOpacity>
// //             </View>
// // {state === true ?
// //             <View style={{
// //                 justifyContent: 'center', marginTop: 50,
// //                 backgroundColor: 'green'
// //             }}>
// //                 <View>
// //                     <Text>hello welcom</Text>
// //                     <Text>hello welcom</Text>
// //                     <Text>hello welcom</Text>
// //                     <Text>hello welcom</Text>
// //                     <Text>hello welcom</Text>
// //                     <Text>hello welcom</Text>
// //                 </View>

// //                 <TouchableOpacity onPress={() => { setState(state) }}
// //                     style={{ marginVertical: 30, padding: 20, backgroundColor: 'red' }}>
// //                     <Text>Next</Text>
// //                 </TouchableOpacity>

// //             </View>
// // :

// //             <View>

// //                 {state === true ?

// //                     <View style={{
// //                         justifyContent: 'center', marginTop: 50,
// //                         backgroundColor: 'pink'
// //                     }}>
// //                         <View>
// //                             <Text>hello welcom</Text>
// //                             <Text>hello welcom</Text>
// //                             <Text>hello welcom</Text>
// //                             <Text>hello welcom</Text>
// //                             <Text>hello welcom</Text>
// //                             <Text>hello welcom</Text>
// //                         </View>

// //                         <TouchableOpacity onPress={() => { setState1(!state) }}
// //                             style={{ marginVertical: 30, padding: 20, backgroundColor: 'red' }}>
// //                             <Text>Next</Text>
// //                         </TouchableOpacity>

// //                     </View>
// //                     :

// //                     <View style={{
// //                         justifyContent: 'center', marginTop: 50,
// //                         backgroundColor: 'blue'
// //                     }}>
// //                         <View>
// //                             <Text>hello welcom</Text>
// //                             <Text>hello welcom</Text>
// //                             <Text>hello welcom</Text>
// //                             <Text>hello welcom</Text>
// //                             <Text>hello welcom</Text>
// //                             <Text>hello welcom</Text>
// //                         </View>
// //                         <TouchableOpacity onPress={() => { setState(!state) }}
// //                             style={{ marginVertical: 30, padding: 20, backgroundColor: 'red' }}>
// //                             <Text>Next</Text>
// //                         </TouchableOpacity>

// //                     </View>

// //                 }

// //             </View>
// // }

// //         </View>

// //     )
// // }

// // export default Steps1

// // const styles = StyleSheet.create({
// //     box: {
// //         flexDirection: 'row',
// //         borderBottomWidth: 5
// //     },
// //     circle: {
// //         width: 80,
// //         height: 80,
// //         borderRadius: 50,
// //         backgroundColor: 'yellow',
// //         margin: 30, bottom: -70, alignItems: 'center', justifyContent: 'center'
// //     },
// //     circleview: {
// //         alignSelf: 'center',
// //         justifyContent: 'center',
// //         width: 60,
// //         height: 60,
// //         borderRadius: 50,
// //         backgroundColor: '#fff'
// //     },
// //     txt: {
// //         textAlign: 'center',

// //     }
// // })




// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react';
// import StepIndicator from 'react-native-step-indicator';


// const currentPosition1 = () => {
//     return (

//         <View style={{ width: 100, height: 100, backgroundColor: 'green' }}>
//         </View>
//     )
// }

// const currentPosition2 = () => {
//     return (

//         <View style={{ width: 100, height: 100, backgroundColor: 'yellow' }}>
//         </View>
//     )
// }
// export { currentPosition2 }

// const currentPosition3 = () => {
//     return (

//         <View style={{ width: 100, height: 100, backgroundColor: 'red' }}>
//         </View>
//     )
// }
// export { currentPosition3 }


// const Steps1 = () => {
//     const [currentPosition, setCurrentPosition] = useState(1)

//     // const nextStep = () => {
//     //     setCurrentPosition(currentPosition + 1)

//     //}

//     const customStyles = {

//         stepIndicatorSize: 25,
//         currentStepIndicatorSize: 30,
//         separatorStrokeWidth: 2,
//         currentStepStrokeWidth: 3,
//         stepStrokeCurrentColor: '#fe7013',
//         stepStrokeWidth: 3,
//         stepStrokeFinishedColor: '#fe7013',
//         stepStrokeUnFinishedColor: '#aaaaaa',
//         separatorFinishedColor: '#fe7013',
//         separatorUnFinishedColor: '#aaaaaa',
//         stepIndicatorFinishedColor: '#fe7013',
//         stepIndicatorUnFinishedColor: '#ffffff',
//         stepIndicatorCurrentColor: '#ffffff',
//         stepIndicatorLabelFontSize: 13,
//         currentStepIndicatorLabelFontSize: 13,
//         stepIndicatorLabelCurrentColor: '#fe7013',
//         stepIndicatorLabelFinishedColor: '#ffffff',
//         stepIndicatorLabelUnFinishedColor: '#aaaaaa',
//         labelColor: '#999999',
//         labelSize: 13,
//         currentStepLabelColor: '#fe7013'
//     }
//     return (
//         <View style={{ marginTop: 310 }}>
//             <StepIndicator
//                 customStyles={customStyles}
//                 currentPosition={currentPosition1}
//                 onPress={setCurrentPosition}
//                 labels={['Approval', 'Processing', 'Shipping', 'Delivery']}
//                 stepCount={3} />



//             <TouchableOpacity onPress={() => setCurrentPosition(currentPosition + 1)}>
//                 <Text style={{ textAlign: 'center', marginVertical: 30 }}>Next</Text>
//             </TouchableOpacity>
//         </View>

//     )
// }

// export default Steps1

// const styles = StyleSheet.create({})