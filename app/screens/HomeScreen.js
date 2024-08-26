import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { postDungeon } from '@/utils/Http';

export default function HomeScreen({navigation}) {

    const chalices = [
        {id: 1, title: 'Pthumeru', levels : 4},
        {id: 2, title: 'Loran', levels : 5},
        {id: 3, title: 'Isz', levels : 6}
    ];

    const renderButtons = () => {
        return chalices.map((chalice) => {
            return (
                <View key={chalice.id} style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.recButton} activeOpacity={0.6} onPress={() => navigation.navigate('Generator', {chalice: chalice})}>
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
            {renderButtons()}
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
    fontSize: 40
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
