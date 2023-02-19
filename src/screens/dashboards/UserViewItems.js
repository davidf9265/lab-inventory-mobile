import { StyleSheet } from "react-native";

export default function userViewItems() {
    return (
        <View style={styles.container}>
        <Text>Register Item</Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    });
