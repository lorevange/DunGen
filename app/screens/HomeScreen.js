import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ChaliceStructures } from '@/constants/Chalices';
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
                        style={styles.recButton} 
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
    );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'dungen',
    fontSize: 120
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
        height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    margin: 5
  },
  recButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  }
});
