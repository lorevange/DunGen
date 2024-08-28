import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useEffect } from 'react';

// Get the width of the screen
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function DungeonRoom({ effectTitle, effectExplained, left, mid, right, levelSize }) {
    // Calculate dynamic width based on screen width and level size
    const roomWidth = SCREEN_WIDTH / levelSize - 6; // Subtracting margin for each room

    return (
        <View style={[styles.roomContainer, { width: roomWidth }]}>
            <TouchableOpacity style={styles.touchArea}>
                <View style={styles.textContainer}>
                    <Text style={styles.effectTitle}>{effectTitle}</Text>
                    <Text style={styles.effectExplained}>{effectExplained}</Text>
                </View>
                <View style={styles.arrowContainer}>
                    {left && <Feather name="arrow-down-left" style={styles.arrow} size={20}/>}
                    {mid && <Feather name="arrow-down" style={styles.arrow} size={20}/>}
                    {right && <Feather name="arrow-down-right" style={styles.arrow} size={20}/>}
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    roomContainer: {
        alignItems: 'center', // Center content inside each DungeonRoom horizontally
        justifyContent: 'center', // Centers content vertically within the room
        backgroundColor: 'rgba(137,101,80,0.6)', // Light grey background for visibility
        borderColor: '#ccc',
        borderWidth: 1,
        marginHorizontal: 3, // Small margin for spacing between rooms
    },
    touchArea: {
        width: '100%', // Ensure the touch area covers the entire room width
        height: '100%', // Ensure the touch area covers the entire room height
        justifyContent: 'center', // Centers text vertically within the touch area
        alignItems: 'center', // Centers text horizontally within the touch area
        padding: 10, // Add padding for content
    },
    textContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    effectTitle: {
        color: '#F1F2E2',
        fontWeight: 'bold',
        fontSize: 12, // Smaller font size for room titles
        textAlign: 'center', // Centers text
        flexShrink: 1,
    },
    effectExplained: {
        color: '#D7D8C2',
        fontSize: 10, // Smaller font size for room explanations
        textAlign: 'center', // Centers text
        flexShrink: 1,
    },
    arrowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, // Adjust margin top for spacing
    },
    arrow: {
        color: '#F1F2E2'
    }
});
