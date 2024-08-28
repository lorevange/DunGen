import { Image, StyleSheet, View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { Colors } from '@/constants/Colors';
import { postDungeon, fetchDungeon } from '@/utils/Http';
import Loading from '@/components/Loading';
import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';

export default function HomeScreen({navigation}) {

    const [loading, setLoading] = useState(true);
    const [chaliceStructures, setChaliceStructures] = useState();
    const chalices = [
        {id: 1, title: 'Pthumeru', levels : 4},
        {id: 2, title: 'Loran', levels : 5},
        {id: 3, title: 'Isz', levels : 6}
    ];

    async function fetchBackend() {
        destructureBackendData(await fetchDungeon());
    }

    const destructureBackendData = response => {
        // get the last Dungeon Config returned by the backend
        let tempData = {};
        for(var key in response.data){
            tempData = response.data[key];
        }
        setChaliceStructures(tempData);
        console.log(chaliceStructures);
    }

    useEffect(() => {
        fetchBackend();
        setLoading(false);
        //console.log(chaliceStructures);
    }, []);

    useFonts({
        'dungen' : require('../../assets/fonts/DUNGRG.ttf'),
    });

    const renderLoading = () => {
        return <Loading/>;
    }

    const renderButtons = () => {
        return chalices.map((chalice) => {
            return (
                <View key={chalice.id} style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.dunButton} 
                        activeOpacity={0.6} 
                        onPress={() => navigation.navigate(
                            'Generator', 
                            {
                                chalice: chalice,
                                chaliceStructures: chaliceStructures
                            }
                        )}>
                        <Text style={styles.buttonText}>Generate {chalice.title} Chalice</Text>
                    </TouchableOpacity>
                </View>
            );
        });
    }

    return (
        <ImageBackground 
            source={require('../../assets/images/homeBackground.jpg')} // Update this path to your image path
            style={styles.background}
            resizeMode="cover" // or 'contain' depending on the desired scaling
        >
            <View style={styles.home}>
                <View>
                    <Text style={styles.title}>DUNGEN</Text>
                </View>
                {loading ? renderLoading() : renderButtons()}
                {/* <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.recButton} activeOpacity={0.6} onPress={() => postDungeon()}>
                        <Text style={styles.buttonText}>UPLOAD CHALICES</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, // Ensures the background image covers the whole screen
        width: '100%',
        height: '100%',
    },
    home: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',  // Center items both vertically and horizontally
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'dungen',
        color: '#E9D7D6',  // Light color to contrast against the shadow
        textShadowColor: 'rgba(0, 0, 0, 1)',  // Darker shadow for better visibility
        textShadowOffset: { width: 2, height: 2 },  // More offset for a more visible shadow
        textShadowRadius: 12,  // Increased radius for a smoother shadow
        fontSize: 100,
        marginBottom: 30,  // Added margin below the title to separate it from the buttons
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: "#9F8082",  // Darker shadow color
        backgroundColor: 'rgba(95,68,76,0.8)',
        shadowOffset: {
            width: 0,
            height: 3,  // Increased height for a more pronounced shadow
        },
        shadowOpacity: 0.3,  // Slightly darker shadow opacity
        shadowRadius: 6,  // Larger shadow radius for a softer effect
        elevation: 8,  // Increased elevation for better shadow effect on Android
        marginVertical: 5,  // Reduced vertical margin to place buttons closer to each other
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        margin: 5,
    },
    dunButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
});