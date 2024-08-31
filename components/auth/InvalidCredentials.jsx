import { View, Text, TouchableOpacity } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const InvalidCredentials = () => {
    const { setInvalidCredentials } = useContext(AuthContext) 

    const hideMessage = () => {
      setInvalidCredentials(false)
    }

    return(
        <Animated.View
            entering={FadeInUp}
            exiting={FadeOutUp}
            style={{
                bottom:30,
                zIndex: 100,
                backgroundColor: '#3B3C36',
                width: '90%',
                flexGrow:1,
                position: 'absolute',
                borderRadius: 5,
                padding: 20,
                marginLeft: 15,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.4,
                shadowRadius: 2,
                shadowOffset: {width: 0, height: 1},
                elevation: 5,
            }}
        >
            <MaterialIcons name="error-outline" size={30} color="red" />
            <View  style={{flexDirection:"row",justifyContent:"space-between",width:"90%"}}>

            <View>
                <Text style={{
                    color: '#F6F4F4',
                    fontWeight: 'bold',
                    marginLeft: 10,
                    fontSize: 16,
                }}>Invalid Credentials</Text>
            
                <Text style={{
                    color: '#F6F4F4',
                    fontWeight: '500',
                    marginLeft: 10,
                    fontSize: 14,
                }}>Please enter a valid email and password</Text>  

            </View>
            <TouchableOpacity onPress={()=>hideMessage()}>
                <Feather name="x" size={30} color="white" style={{marginTop:-10}}/>
            </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

export default InvalidCredentials;