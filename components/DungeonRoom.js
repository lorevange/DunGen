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
                <Text style={styles.effectTitle}>{effectTitle}</Text>
                <Text style={styles.effectExplained}>{effectExplained}</Text>
                <View style={styles.arrowContainer}>
                    {left && <Feather name="arrow-down-left" size={12} color="black" />}
                    {mid && <Feather name="arrow-down" size={12} color="black" />}
                    {right && <Feather name="arrow-down-right" size={12} color="black" />}
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    roomContainer: {
        alignItems: 'center', // Center content inside each DungeonRoom horizontally
        justifyContent: 'center', // Centers content vertically within the room
        backgroundColor: '#f0f0f0', // Light grey background for visibility
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
    effectTitle: {
        fontWeight: 'bold',
        fontSize: 10, // Smaller font size for room titles
        textAlign: 'center', // Centers text
        flexShrink: 1,
    },
    effectExplained: {
        fontSize: 9, // Smaller font size for room explanations
        textAlign: 'center', // Centers text
        flexShrink: 1,
    },
    arrowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10, // Adjust margin top for spacing
        flexShrink: 1,
    },
});
