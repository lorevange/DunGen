import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import Feather from '@expo/vector-icons/Feather';

export default function DungeonRoom({effectTitle, effectExplained, left, mid, right}) {
    return (
        <View style={styles.roomContainer}>
            <TouchableOpacity style={styles.touchArea}>
                <Text style={styles.effectTitle}>{effectTitle}</Text>
                <Text style={styles.effectExplained}>{effectExplained}</Text>
                <View style={styles.arrowContainer}>
                    {left && <Feather name="arrow-down-left" size={24} color="black" />}
                    {mid && <Feather name="arrow-down" size={24} color="black" />}
                    {right && <Feather name="arrow-down-right" size={24} color="black" />}
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    roomContainer: {
        width: 200,  // Fixed width to create a square
        height: 100,  // Fixed height to match the width
        justifyContent: 'center',  // Centers content vertically within the room
        alignItems: 'center',  // Centers content horizontally within the room
        margin: 5,  // Adds space around each DungeonRoom
        backgroundColor: '#f0f0f0',  // Light grey background for visibility
        borderRadius: 10,  // Rounded corners for a smoother look
        // Updated shadow style using boxShadow
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.2)',  // X, Y, Blur, Color
        elevation: 2  // Elevation for Android shadow
    },
    touchArea: {
        width: '100%',  // Ensures touch area covers the entire room
        height: '100%',  // Ensures touch area covers the entire room
        justifyContent: 'center',  // Centers text vertically within the touch area
        alignItems: 'center',
        padding: 4  // Centers text horizontally within the touch area
    },
    effectTitle: {
        fontWeight: 'bold',
        fontSize: 12,  // Smaller font size for room titles
        textAlign: 'center'  // Centers text
    },
    effectExplained: {
        fontSize: 10,  // Smaller font size for room explanations
        textAlign: 'center'  // Centers text
    },
    arrowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50
    }
});