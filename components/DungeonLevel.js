import { View, Text, StyleSheet, Alert } from 'react-native';
import DungeonRoom from '@/components/DungeonRoom';
import { useEffect, useState } from 'react';

export default function DungeonLevel({ level, currentLevel, changeLevel }) {

    const [dungeonLevel, setDungeonLevel] = useState(level);
    const [myCurrentLevel, setMyCurrentLevel] = useState(currentLevel);

    const renderRooms = () => {
        return dungeonLevel.map((room, index) => {
            return (
                <DungeonRoom
                    key={index}
                    room={room}
                    levelSize={dungeonLevel.length}
                    currentLevel={currentLevel}
                    changeLevel={changeLevelDungeonLevel}
                />
            );
        });
    }

    const changeLevelDungeonLevel = (levelNumber, selectedIndex) => {
        changeLevel(levelNumber, selectedIndex);
    }

    useEffect(() => {
        setDungeonLevel(level);
        setMyCurrentLevel(currentLevel);
    }, [level, currentLevel])

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
        //width: '80%',  // Ensures the container uses full width
        marginTop: 3
    },
});
