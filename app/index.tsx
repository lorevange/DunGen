import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export default function Index() {
  return (
    <View style={styles.home}>
      <View>
        <Text style={styles.title}>DUNGEN</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.recButton} activeOpacity={0.6} onPress={() => {}}>
          <Text style={styles.buttonText}>Generate your unique Dungeon!</Text>
        </TouchableOpacity>
      </View>
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
