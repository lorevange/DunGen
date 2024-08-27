import { View, Text, StyleSheet } from 'react-native';
import DungeonRoom from '@/components/DungeonRoom';

export default function DungeonLevel({dungeonLevel}) {

    const renderRooms = () => {
        return dungeonLevel.map((room, index) => {
            return(
                <DungeonRoom 
                    key={index} 
                    effectTitle={room.title} 
                    effectExplained={room.effect} 
                    left={room.left}
                    mid={room.mid}
                    right={room.right}
                />
            );
        })
    }

    return (
        <View style={styles.levelContainer}>
            {renderRooms()}
        </View>
    );
}

const styles = StyleSheet.create({
    levelContainer: {
        flexDirection: 'row',  // Aligns DungeonRooms horizontally
        justifyContent: 'center',  // Centers DungeonRooms in the row
        alignItems: 'center',  // Aligns DungeonRooms vertically centered in the row
        marginBottom: 20,  // Adds some space between levels
        width: '100%'
    }
});