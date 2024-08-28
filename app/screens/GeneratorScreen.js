import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useState, useEffect } from 'react';
import DungeonLevel from '@/components/DungeonLevel';
import { shuffle, generateRoutes } from '@/utils/Utils';
import { useFonts } from 'expo-font';

export default function GeneratorScreen({ route, navigation }) {

    const { chalice, chaliceStructures } = route.params;
    const seed = Math.floor(Math.random() * 100) % chaliceStructures[chalice.title].forms.length;
    const [dungeonLevels, setDungeonLevels] = useState([]);

    const generateDungeon = () => {
        const levels = [];
        const form = chaliceStructures[chalice.title].forms[seed];
        for (let j = 0; j < form.length; j++) {
            levels.push([]);
            let numberOfRoomsInLevel = form[j];
            let options = shuffle(chaliceStructures[chalice.title].effects[j]);

            for (let i = 0; i < numberOfRoomsInLevel; i++) {
                options[i].visited = false;
                levels[j].push(options[i]);
            }
        }
        console.log('GENERATED LEVELS :', levels);
        setDungeonLevels(generateRoutes(levels));
    }

    useEffect(() => {
        generateDungeon();
    }, []);

    useFonts({
        'dungen': require('../../assets/fonts/DUNGRG.ttf'),
    });

    return (
        <View style={styles.home}>
            <Text style={styles.title}>{String(chalice.title).toUpperCase()} CHALICE GENERATOR</Text>
            <View style={styles.levelsContainer}>
                {dungeonLevels.map((level, index) => (
                    <DungeonLevel key={index} dungeonLevel={level} style={styles.dungeonLevel}/>
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.homeButton} activeOpacity={0.6} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Return to Home Screen</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'dungen',
        fontSize: 30,
        marginTop: 30,
    },
    levelsContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    dungeonLevel: {
        height: 50
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
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
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        margin: 5,
    },
    homeButton: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    }
});