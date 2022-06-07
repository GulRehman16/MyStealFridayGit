import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ViewMore = () => {
    return (
        < TouchableOpacity style={styles.ViewMore}>
            <Text style={styles.ViewMoreText}>View More..</Text>
        </TouchableOpacity>
    )
}

export { ViewMore }

const styles = StyleSheet.create({
    ViewMore: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    ViewMoreText: {
        fontSize: 16,
        color: '#1564EB'
    }

})