import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import XWhite from "@/assets/icons/X-White";

const BottomSheetLayout = forwardRef((props, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  useImperativeHandle(ref, () => ({
    expand: () => bottomSheetRef.current?.expand(),
    collapse: () => bottomSheetRef.current?.collapse(),
  }));

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["30%"]}
      index={-1}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: "#353535",
      }}
      handleIndicatorStyle={{
        display: "none",
      }}
    >
      <BottomSheetView className="flex-1 px-[32px] py-[24px]">
        <TouchableOpacity
          onPress={() => bottomSheetRef.current?.close()}
          className="absolute right-0 mr-[18px] mt-[10px]"
        >
          <XWhite />
        </TouchableOpacity>

        <View className="flex items-center justify-center flex-col gap-[32px]">
          <View className="flex flex-col items-center gap-[16px]">
            <Text className="font-roboto font-semibold text-[20px] text-white">
              Let’s Get Started!
            </Text>

            <Text className="font-roboto font-normal text-[16px] text-white">
              Discover, book, and relax - all in one place.
            </Text>
          </View>

          <View className="w-[100%] flex items-center justify-center flex-col gap-[20px]">
            <TouchableOpacity className="bg-[#1DB954] w-[100%] h-[47px] px-[16px] rounded-[10px] flex items-center justify-center">
              <Text className="font-roboto font-medium text-white text-[18px] text-center">
                Sign Up
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className=" w-[100%] h-[50px] px-[15px] rounded-2xl flex items-center justify-center">
              <Text className="font-roboto font-medium text-[#1DB954] text-[18px] text-center">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
});

export default BottomSheetLayout;
