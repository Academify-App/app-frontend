// import { View, Text, Image } from 'react-native';
// import images from '../../constants/images';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import { useContext } from 'react';
// import AuthContext from '../../context/AuthContext';

// const OtpLoader = () => {
//   const { OtpSuccess } = useContext(AuthContext)

//   return (
//     <View className="flex-1 items-center justify-center">
//       <View>
//         { OtpSuccess ? 
//         (<MaterialCommunityIcons name="checkbox-marked-circle-outline" size={60} color="white" />)
//         :
//         (<Image source={images.OtpLoader} className="w-[85px] h-[85px]"/>)
//         }
//       </View>
//       { OtpSuccess ? (
//         <Text className="text-2xl text-white mt-2">OTP Verified! 👍</Text>
//       ) 
//       : 
//       (
//       <View className="mt-4">
//         <Text className="font-robotobold text-[28px] text-textColor">Kindly hold on ✋</Text>
//         <Text className="mt-2 font-roboto text-[16px] text-center text-textColor">We're verifying your OTP</Text>
//       </View>
//       )}
//     </View>
//   );
// };


// export default OtpLoader;
