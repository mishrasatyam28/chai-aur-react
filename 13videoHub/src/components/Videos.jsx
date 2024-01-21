import { Stack, VStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Videos = () => {
  return (
    <Stack direction={["column", "row"]} h={"100vh"}>
      <VStack w={"full"}>
        <video
          controls
          controlsList="nodownload"
          src=""
          style={{ width: "100%" }}
        ></video>
        <VStack alignItems={"flex-start"} p={"8"}>
          <Heading>Sample Video</Heading>
          <Text>
            This is a sample video for testinf and demo. This is called
            description
          </Text>
        </VStack>
      </VStack>
      <VStack w={["full", "xl"]}></VStack>
    </Stack>
  );
};

export default Videos;

// 3:34
