import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AuthContext from "../../context/AuthContext";

const Success = () => {
  const {setRegisterSuccess} = useContext(AuthContext)

  const hideMessage = () => {
    setRegisterSuccess(false)
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
      <Ionicons name="checkmark-circle" size={30} color="green" />
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <View>
            <Text style={{
              color: '#F6F4F4',
              fontWeight: 'bold',
              marginLeft: 10,
              fontSize: 16,
            }}>Account created successfully</Text>
            <Text style={{
              color: '#F6F4F4',
              fontWeight: '500',
              marginLeft: 10,
              fontSize: 14,
            }}>Please login to use the app.</Text>

          </View>
          <TouchableOpacity style={{marginLeft:18}} onPress={()=>hideMessage()}>
            <Feather name="x" size={30} color="white" />
          </TouchableOpacity>
      </View>
  </Animated.View>
    )
}

export default Success;