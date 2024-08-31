import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AuthContext from "../../context/AuthContext";

const Error = () => {
    const {emailExists,setEmailExists,registerServerError} = useContext(AuthContext)

    const hideMessage = () => {
        setEmailExists(false)
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
                }}>{`${emailExists ? 'Email Already Exists' : registerServerError && 'Oops...an error occurred'}`}</Text>
            
                <Text style={{
                    color: '#F6F4F4',
                    fontWeight: '500',
                    marginLeft: 10,
                    fontSize: 14,
                }}>{`${emailExists ? 'Please enter a new one' : registerServerError && 'Please try again'}`}</Text>  

            </View>
            <TouchableOpacity onPress={()=>hideMessage()}>
                <Feather name="x" size={30} color="white" />
            </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

export default Error;