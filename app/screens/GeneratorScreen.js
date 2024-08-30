import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import DungeonLevel from '@/components/DungeonLevel';
import { shuffle, generateRoutes, goToNextLevel, goToPreviousLevel } from '@/utils/Utils';
import { useFonts } from 'expo-font';
import Loading from '@/components/Loading';
import Room from '../classes/Room';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function GeneratorScreen({ route, navigation }) {
    const { chalice, chaliceStructures } = route.params;
    const seed = Math.floor(Math.random() * 100) % chaliceStructures[chalice.title].forms.length;
    const [dungeonLevels, setDungeonLevels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentLevel, setCurrentLevel] = useState(0);
    const [path, setPath] = useState([]);
    let srcImg = require('../../assets/images/homeBackground.jpg'); 
    
    // switch (chalice.title){
    //     case 'Pthumeru':
    //         srcImg = require('../../assets/images/PTHUMERU.jpg');
    //         break;
    //     case 'Loran':
    //         srcImg = require('../../assets/images/LORAN.jpg');
    //         break;
    //     case 'Isz':
    //         srcImg = require('../../assets/images/ISZ.jpg');
    //         break;
    // }

    const generateDungeon = () => {
        const levels = [];
        const form = chaliceStructures[chalice.title].forms[seed];
        for (let j = 0; j < form.length; j++) {
            levels.push([]);
            let numberOfRoomsInLevel = form[j];
            let options = shuffle(chaliceStructures[chalice.title].effects[j]);

            for (let i = 0; i < numberOfRoomsInLevel; i++) {
                let newRoom = new Room(options[i], j, i);
                //console.log('room' + i + ' selectable ', newRoom.selectable);
                levels[j].push(newRoom);
            }
        }
        //console.log('GENERATED LEVELS :', levels);
        setDungeonLevels(generateRoutes(levels));
    };

    const renderLoading = () => {
        return <Loading/>;
    }

    const changeLevelGeneratorScreen = (levelNumber, selectedIndex) => {
        if(currentLevel == levelNumber) {
            setCurrentLevel(currentLevel + 1);
            const response = goToNextLevel(dungeonLevels, levelNumber, selectedIndex, path);
            setDungeonLevels(response.dungeonLevels);
            setPath(response.path);            
        } else if(currentLevel == levelNumber + 1) {
            setCurrentLevel(currentLevel - 1);
            const response = goToPreviousLevel(dungeonLevels, levelNumber, path);
            setDungeonLevels(response.dungeonLevels);
            setPath(response.path);
        }
        // console.log(currentLevel);
        // console.log(path);
    }

    useEffect(() => {
        generateDungeon();
        setTimeout(() => setLoading(false), 1000);        
    }, []);

    useFonts({
        'dungen': require('../../assets/fonts/DUNGRG.ttf'),
    });

    const renderPage = () => {
        return (
            <View style={styles.home}>
                <Text style={styles.title}>{String(chalice.title).toUpperCase()}  CHALICE</Text>
                <ScrollView 
                contentContainerStyle={styles.scrollView}
                showsVerticalScrollIndicator={false}
                horizontal={false}>
                    <View style={styles.levelsContainer}>
                        {dungeonLevels.map((level, index) => (
                            <DungeonLevel 
                                key={index}
                                level={level}
                                currentLevel={currentLevel}
                                changeLevel={changeLevelGeneratorScreen}
                                style={styles.dungeonLevel} />
                        ))}
                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.homeButton} 
                        activeOpacity={0.6} 
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.buttonText}>Return to Home Screen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <ImageBackground 
            source={srcImg} // Update this path to your image path
            style={styles.background}
            resizeMode="cover" // or 'contain' depending on the desired scaling
            >
            {loading ? renderLoading() : renderPage()}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, // Ensures the background image covers the whole screen
        width: SCREEN_WIDTH,
        height: '100%'
    },
    home: {
        flex: 1,
        width: SCREEN_WIDTH,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'dungen',
        fontSize: 36,
        marginTop: 40,
        color: '#F1F2E2', // Adjust text color for better visibility on the background image
    },
    scrollView:{
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH,
        flexGrow: 1
    },
    levelsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 0,
        padding: 0
    },
    dungeonLevel: {
        alignItems: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(95,68,76,0.8)',
        borderRadius: 20,
        padding: 10,
        shadowColor: "#ccc",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginVertical: 30,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
        margin: 5,
    },
    homeButton: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
});
