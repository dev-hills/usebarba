import OnboardingNext from "@/assets/icons/onboarding-next";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { OnboardingSlides } from "@/constants";
import BottomSheetLayout from "@/components/BottomSheetLayout";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Session } from "@supabase/supabase-js";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Onboarding = ({ session }: { session: Session }) => {
  useEffect(() => {
    console.log(session);
  }, []);

  const bottomSheetRef = useRef<{ expand: () => void; collapse: () => void }>(
    null
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollX = new Animated.Value(0);

  const goToNextSlide = () => {
    if (currentSlide < OnboardingSlides.length - 1)
      setCurrentSlide(currentSlide + 1);
  };

  const renderDots = () =>
    OnboardingSlides.map((_, index) => (
      <View
        key={index}
        className={`w-[15px] h-[7px] ${
          currentSlide === index
            ? "opacity-[100%] bg-[#1DB954] w-[35px] rounded-[4px]"
            : "bg-white opacity-20 rounded-[4px]"
        }`}
      />
    ));

  useEffect(() => {
    if (currentSlide === 0) {
      scrollX.setValue(0); // Ensure the scrollX starts from 0
    }
  }, []);

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="bg-[#121212] flex-1 relative">
        <Animated.ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
              listener: (event: {
                nativeEvent: { contentOffset: { x: number } };
              }) => {
                const slideIndex = Math.round(
                  event.nativeEvent.contentOffset.x / SCREEN_WIDTH
                );
                setCurrentSlide(slideIndex);
              },
            }
          )}
          contentOffset={{ x: currentSlide * SCREEN_WIDTH, y: 0 }}
        >
          {OnboardingSlides.map((slide, index) => (
            <View
              key={slide.id}
              style={{ width: SCREEN_WIDTH }}
              className="flex-1 flex flex-col justify-center items-center px-[20px] gap-[20px]"
            >
              <Video
                source={slide.image}
                style={{ width: 200, height: 200 }}
                resizeMode={ResizeMode.COVER}
                shouldPlay={
                  currentSlide === index && index === 0
                    ? true
                    : currentSlide === index
                }
              />

              <Text className="text-white text-[24px] font-medium text-center">
                {slide.title}
              </Text>
              <Text className="text-white text-[18px] font-normal text-center">
                {slide.description}
              </Text>
            </View>
          ))}
        </Animated.ScrollView>

        <View className="flex flex-row justify-between items-center w-full px-[20px] py-[30px]">
          <View className="flex flex-row gap-[7px] items-center justify-center">
            {renderDots()}
          </View>

          {currentSlide < OnboardingSlides.length - 1 ? (
            <TouchableOpacity onPress={goToNextSlide}>
              <OnboardingNext />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
              <OnboardingNext />
            </TouchableOpacity>
          )}
        </View>

        <BottomSheetLayout ref={bottomSheetRef} />
      </View>
    </GestureHandlerRootView>
  );
};

export default Onboarding;
