import { Star1 } from "iconsax-react-nativejs";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Profile = () => {
  return (
    <ScrollView className="flex flex-col">
      <View className="flex flex-row justify-center items-center">
        <Image
          source={require("../../../assets/images/onboarding2.jpeg")}
          className="w-[120px] h-[120px] rounded-full"
        />
      </View>
      <Text className="text-center mt-2 text-[#202244] text-xl font-semibold">
        Dr. Christopher Davies
      </Text>
      <Text className="text-center mt-[1px] text-[#545454] text-sm font-normal">
        Resource Provider
      </Text>
      <View className="mt-[14px] flex flex-row justify-between items-center">
        <View className="flex flex-col gap-y-1">
          <Text className="text-[#202244] text-base font-semibold text-center">
            30
          </Text>
          <Text className="text-[#545454] text-base font-semibold text-center">
            Ads
          </Text>
        </View>
        <View className="flex flex-col gap-y-1">
          <Text className="text-[#202244] text-base font-semibold text-center">
            5700
          </Text>
          <Text className="text-[#545454] text-base font-semibold text-center">
            Sales
          </Text>
        </View>
        <View className="flex flex-col gap-y-1">
          <Text className="text-[#202244] text-base font-semibold text-center">
            850
          </Text>
          <Text className="text-[#545454] text-base font-semibold text-center">
            Ratings
          </Text>
        </View>
      </View>
      <View className="my-[18px] flex flex-row justify-center items-center">
        <View className="flex flex-row items-center gap-x-[6px]">
          <Text className="text-[#202244] text-2xl font-bold">4.8</Text>
          <View className="flex flex-row gap-[1px]">
            <Star1 size="20" color="#FFB72C" variant="Bold" />
            <Star1 size="20" color="#FFB72C" variant="Bold" />
            <Star1 size="20" color="#FFB72C" variant="Bold" />
            <Star1 size="20" color="#FFB72C" variant="Bold" />
            <Star1 size="20" color="#8D8A8A" variant="Linear" />
          </View>
        </View>
      </View>
      <View className="w-full p-[22px] bg-[#EFEAFC] mb-4 rounded-2xl">
        <Text className="text-lg font-semibold text-[#2B145A]">
          “The beautiful thing about learning is that no one can take it away
          from you”
        </Text>
      </View>
      <View className="border-[0.5px] border-[#EDEDED] bg-[#FFFFFF] p-3 rounded-2xl">
        <View className="flex flex-row gap-x-1">
          <Text className="text-[#545454] text-sm font-bold">Name:</Text>
          <Text className="text-[#545454] text-sm font-normal">
            Christopher Davies (Ph.D)
          </Text>
        </View>
        <View className="flex flex-row gap-x-1">
          <Text className="text-[#545454] text-sm font-bold">
            Member Since:
          </Text>
          <Text className="text-[#545454] text-sm font-normal">2021</Text>
        </View>
        <View className="flex flex-row gap-x-1">
          <Text className="text-[#545454] text-sm font-bold">Department:</Text>
          <Text className="text-[#545454] text-sm font-normal">
            History and International Studies
          </Text>
        </View>
        <View className="flex flex-row gap-x-1 mt-3">
          <Text className="text-[#545454] text-sm font-normal">
            Christopher Davies is a dedicated and exemplary lecturer in History
            and International Studies, known for his outstanding academic
            achievements and leadership qualities. Christopher has consistently
            demonstrated his commitment to excellence and his passion for
            learning. From an early age, Christopher exhibited a natural
            curiosity and an aptitude for academics. His journey through
            university has been marked by numerous accolades and recognition
            from both faculty and peers. He has excelled in his coursework,
            often leading study groups and assisting fellow students in
            understanding complex historical and international relations
            concepts. Beyond his academic prowess, Christopher is actively
            involved in various extracurricular activities. He is a member of
            the university's debate team, where he has honed his critical
            thinking and public speaking skills. Additionally, he volunteers as
            a tutor, helping underclassmen navigate their academic challenges in
            history and international studies. Christopher's drive extends
            beyond the classroom. He has participated in several research
            projects, contributing valuable insights and innovative ideas on
            historical events and global issues. His work has been published in
            academic journals, showcasing his ability to apply theoretical
            knowledge to real-world problems. With a strong foundation in
            history and international studies and a passion for continuous
            learning, Christopher Davies is poised to make significant
            contributions in his field. His dedication, intelligence, and
            leadership qualities make him a standout student and a promising
            future professional.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
