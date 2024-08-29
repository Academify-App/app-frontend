import React from 'react'
import { useState, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router';

const NumberVerification = () => {
  const router = useRouter()
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const handleInput1Change = (digit) => {
    setInput1(digit);
    if(digit.length === 1){
        input2Ref.current.focus();
    }
  }
  const handleInput2Change = (digit) => {
    setInput2(digit);
    if(digit.length === 1){
        input3Ref.current.focus();
    }
  }
  const handleInput3Change = (digit) => {
    setInput3(digit);
    if(digit.length === 1){
        input4Ref.current.focus();
    }
  }

  return (
    <View className="flex-1 mt-4 w-[90%] p-1 max-w-md ml-[20px]">
      <View>
        <Text className="text-center w-full font-roboto text-[17px]">We sent you a 4-digit code to verify your phone number
          <Text className="font-robotobold"> 08xxx832</Text>
        </Text>
        <Text className="text-center font-roboto text-[17px] mt-5">Enter in the field below</Text>
      </View>

      <View className='flex flex-row gap-[11px] mt-2 ml-[1px] w-full h-[120px] py-3 px-2 overflow-hidden'>
        <TextInput
          className={`w-[20%] h-[full] border border-slate-400 rounded-md text-3xl text-center text-[#6E1FEF]
          ${input1 !== "" && 'border border-[#6E1FEF]'}`}
          keyboardType="numeric"
          maxLength={1}
          value={input1}
          onChangeText={handleInput1Change}
        />
        <TextInput
          className={`w-[20%] h-[full] border border-slate-400 rounded-md text-3xl text-center text-[#6E1FEF]
          ${input2 !== "" && 'border border-[#6E1FEF]'}`}
          ref={input2Ref}
          keyboardType="numeric"
          maxLength={1}
          value={input2}
          onChangeText={handleInput2Change}
        />
        <TextInput
          className={`w-[20%] h-[full] border border-slate-400 rounded-md text-3xl text-center text-[#6E1FEF]
          ${input3 !== "" && 'border border-[#6E1FEF]'}`}
          ref={input3Ref}
          keyboardType="numeric"
          maxLength={1}
          value={input3}
          onChangeText={handleInput3Change}
        />
        <TextInput
          className={`w-[20%] h-[full] border border-slate-400 rounded-md text-3xl text-center text-[#6E1FEF]
          ${input4 !== "" && 'border border-[#6E1FEF]'}`}
          ref={input4Ref}
          keyboardType="numeric"
          maxLength={1}
          value={input4}
          onChangeText={setInput4}
        />
      </View>
        
      <View className="flex flex-col p-3">
        <View className="flex flex-row justify-center items-center">
          <View>
            <Text className="text-center font-roboto">Didn't get the code?</Text>
          </View>
          <TouchableOpacity>
            <Text className="font-robotomedium"> Resend</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text className="text-center mt-3 font-roboto text-[#4B4B4B]">Expires in 
            <Text className="text-[#6E1FEF] font-robotomedium"> 01:00</Text>
          </Text>
        </View>
      </View>
      
      <TouchableOpacity className="w-full bg-[#2B145A] p-6 mt-4 rounded-full">
          <Text className="font-robotomedium text-center text-textColor text-[18px]">Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NumberVerification
