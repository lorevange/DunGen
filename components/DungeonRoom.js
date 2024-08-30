import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';

// Get the width of the screen
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function DungeonRoom({ room, levelSize, currentLevel, changeLevel }) {
    // Calculate dynamic width based on screen width and level size
    const roomWidth = SCREEN_WIDTH / levelSize - 6; // Subtracting margin for each room
    const isPressable = room.accessible && room.selectable && (currentLevel == room.levelNumber || currentLevel == room.levelNumber + 1);
    const isAvailable = room.accessible && room.selectable;
    const isCurrent = room.current;
    //console.log('is room 0 pressable? accessible? selectable?', isPressable, room.accessible, room.selectable);

    const roomStyle = room.current ? styles.roomContainerCurrent : room.selected ? styles.roomContainerSelected : isAvailable ? styles.roomContainerAvailable : styles.roomContainerUnavailable;

    const onPress = () => {
        changeLevel(room.levelNumber, room.index);
    }

    return (
        <View style={[roomStyle, { width: roomWidth }]}>
            <TouchableOpacity style={styles.touchArea} disabled={!isPressable} onPress={() => onPress()}>
                <View style={styles.textContainer}>
                    <Text style={styles.effectTitle}>{room.title}</Text>
                    <Text style={styles.effectExplained}>{room.effect}</Text>
                </View>

                {/* Arrow positioning */}
                {room.left && room.current && (
                    <View style={[styles.arrowContainer, styles.arrowLeft]}>
                        <Feather name="arrow-down-left" style={styles.arrow} size={20} />
                    </View>
                )}
                {room.mid && room.current && (
                    <View style={[styles.arrowContainer, styles.arrowMid]}>
                        <Feather name="arrow-down" style={styles.arrow} size={20} />
                    </View>
                )}
                {room.right && room.current && (
                    <View style={[styles.arrowContainer, styles.arrowRight]}>
                        <Feather name="arrow-down-right" style={styles.arrow} size={20} />
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    roomContainerAvailable: {
        alignItems: 'center', // Center content inside each DungeonRoom horizontally
        justifyContent: 'center', // Centers content vertically within the room
        backgroundColor: 'rgba(0, 148, 42, 0.62)',
        borderColor: '#ccc',
        borderWidth: 1,
        marginHorizontal: 3, // Small margin for spacing between rooms
    },
    roomContainerUnavailable: {
        alignItems: 'center', // Center content inside each DungeonRoom horizontally
        justifyContent: 'center', // Centers content vertically within the room
        backgroundColor: 'rgba(85, 69, 65, 0.51)',
        borderColor: '#ccc',
        borderWidth: 1,
        marginHorizontal: 3, // Small margin for spacing between rooms
    },
    roomContainerSelected: {
        alignItems: 'center', // Center content inside each DungeonRoom horizontally
        justifyContent: 'center', // Centers content vertically within the room
        backgroundColor: 'rgba(80, 50, 23, 0.8)',
        borderColor: '#ccc',
        borderWidth: 1,
        marginHorizontal: 3, // Small margin for spacing between rooms
    },
    roomContainerCurrent: {
        alignItems: 'center', // Center content inside each DungeonRoom horizontally
        justifyContent: 'center', // Centers content vertically within the room
        backgroundColor: 'rgba(80, 50, 23, 0.8)',
        borderColor: '#ccc',
        borderWidth: 3,
        marginHorizontal: 3, // Small margin for spacing between rooms
    },
    touchArea: {
        width: '100%', // Ensure the touch area covers the entire room width
        height: '100%', // Ensure the touch area covers the entire room height
        justifyContent: 'center', // Centers text vertically within the touch area
        alignItems: 'center', // Centers text horizontally within the touch area
        padding: 10, // Add padding for content
        position: 'relative', // Position relative for absolute positioning of arrows
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1, // Use available space except for arrows
        marginBottom: 30
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
        position: 'absolute', // Position arrows absolutely within the touch area
        bottom: 5, // Distance from the bottom
    },
    arrowLeft: {
        left: 15, // Position near the bottom left corner
    },
    arrowMid: {
        left: '50%', // Position in the middle
    },
    arrowRight: {
        right: 15, // Position near the bottom right corner
    },
    arrow: {
        color: '#F1F2E2',
    },
});