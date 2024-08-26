import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DungeonRoom({effectTitle, effectExplained}) {
    console.log(effectTitle);
    return (
        <View style={styles.roomContainer}>
            <TouchableOpacity style={styles.touchArea}>
                <Text style={styles.effectTitle}>{effectTitle}</Text>
                <Text style={styles.effectExplained}>{effectExplained}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    roomContainer: {
        width: 100,  // Fixed width to create a square
        height: 100,  // Fixed height to match the width
        justifyContent: 'center',  // Centers content vertically within the room
        alignItems: 'center',  // Centers content horizontally within the room
        margin: 5,  // Adds space around each DungeonRoom
        backgroundColor: '#f0f0f0',  // Light grey background for visibility
        borderRadius: 10,  // Rounded corners for a smoother look
        shadowColor: '#000',  // Shadow for better visual appearance
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2  // Elevation for Android shadow
    },
    touchArea: {
        width: '100%',  // Ensures touch area covers the entire room
        height: '100%',  // Ensures touch area covers the entire room
        justifyContent: 'center',  // Centers text vertically within the touch area
        alignItems: 'center'  // Centers text horizontally within the touch area
    },
    effectTitle: {
        fontWeight: 'bold',
        fontSize: 12,  // Smaller font size for room titles
        textAlign: 'center'  // Centers text
    },
    effectExplained: {
        fontSize: 10,  // Smaller font size for room explanations
        textAlign: 'center'  // Centers text
    }
});