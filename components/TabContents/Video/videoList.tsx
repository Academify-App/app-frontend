import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchCoursesByCategory } from "@/store/slices/getCoursesByCategorySlice";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";
import { PlayCircle } from "iconsax-react-nativejs";
import React, { useEffect, useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";

interface VideoListProps {
  id: string;
}

const VideoList = ({ id }: VideoListProps) => {
  const dispatch = useAppDispatch();
  const { courses, isLoading, error } = useAppSelector(
    (state) => state.getCoursesByCategory
  );
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    dispatch(fetchCoursesByCategory("video"));
  }, [dispatch]);
  const currentItem = courses.filter((item) => item.id.toString() === id);
  const list = currentItem[0];
  const videoSource = list?.url.toString();
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.pause();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });
  return (
    <>
      <View className="py-2 border-b border-b-[#E8F1FF] w-full flex flex-row justify-between items-center">
        <Text className="text-[#2B145A] text-base font-semibold">
          {list?.title}
        </Text>
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => setModalVisible(true)}
        >
          <PlayCircle size={30} color="#9747FF" variant="Bold" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={false}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 items-center px-[10px] bg-black">
          <VideoView
            className="w-full h-full rounded-[10px]"
            player={player}
            allowsFullscreen
            allowsPictureInPicture
          />
          <View>
            <Pressable
              onPress={() => {
                if (isPlaying) {
                  player.pause();
                } else {
                  player.play();
                }
              }}
            >
              {isPlaying ? (
                <Ionicons name="pause" size={24} color="white" />
              ) : (
                <Ionicons name="play" size={24} color="white" />
              )}
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default VideoList;
