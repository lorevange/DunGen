import { ScrollView, StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useState, useEffect } from 'react';
import DungeonLevel from '@/components/DungeonLevel';
// import { ChaliceStructures } from '@/constants/Chalices';
import { shuffle, generateRoutes } from '@/utils/Utils';
import { useFonts } from 'expo-font';

export default function GeneratorScreen({route, navigation}) {

    const { chalice, chaliceStructures } = route.params;
    let currentLevel = 1;
    const seed = Math.floor(Math.random() * 100) % chaliceStructures[chalice.title].forms.length;
    
    const [dungeonLevels, setDungeonLevels] = useState([]);

    const generateDungeon = () => {
        const levels = [];
        const form = chaliceStructures[chalice.title].forms[seed];
        for(let j = 0; j < form.length; j++){
            levels.push([]);
            let numberOfRoomsInLevel = form[j];
            let options = shuffle(chaliceStructures[chalice.title].effects[j]);

            for(let i = 0; i < numberOfRoomsInLevel; i++){
                levels[j].push(options[i]);
            }
        }
        console.log('GENERATED LEVELS :', levels);
        setDungeonLevels(generateRoutes(levels));
    }

    const renderDungeon = () => {
        return dungeonLevels.map((level, index) => {
            return(
                <DungeonLevel key={index} dungeonLevel={level}/>
            );
        });
    }

    useEffect(() => {
        generateDungeon();
    }, []);

    useFonts({
        'dungen' : require('../../assets/fonts/DUNGRG.ttf'),
    });

    return (
        <View style={styles.home}>
            <View>
                <Text style={styles.title}>{String(chalice.title).toUpperCase()} CHALICE GENERATOR</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {renderDungeon()}
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.recButton} activeOpacity={0.6} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Return to Home Screen</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10, // Padding to prevent content from touching the edges
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'dungen',
        fontSize: 60,
        marginVertical: 20, // Adds space between the title and the scroll view
    },
    scrollViewContent: {
        width: Dimensions.get('window').width, // Ensures ScrollView takes full width
        alignItems: 'center', // Centers DungeonLevels horizontally
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 20,
        padding: 10,
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 20, // Adds space above the button
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        margin: 5,
    },
    recButton: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    }
});
