import { View, Text, StyleSheet } from 'react-native';
import DungeonRoom from '@/components/DungeonRoom';

export default function DungeonLevel({ dungeonLevel }) {

    const renderRooms = () => {
        return dungeonLevel.map((room, index) => {
            return (
                <DungeonRoom
                    key={index}
                    effectTitle={room.title}
                    effectExplained={room.effect}
                    left={room.left}
                    mid={room.mid}
                    right={room.right}
                    levelSize={dungeonLevel.length}
                />
            );
        });
    }

    return (
        <View style={styles.levelContainer}>
            {renderRooms()}
        </View>
    );
}

const styles = StyleSheet.create({
    levelContainer: {
        flex: 1,  // Makes the container take up the full available space
        flexDirection: 'row',  // Aligns DungeonRooms horizontally
        justifyContent: 'center',  // Centers DungeonRooms horizontally
        alignItems: 'center',  // Aligns DungeonRooms vertically centered in the row
        width: '80%',  // Ensures the container uses full width
        marginTop: 3
    },
});
