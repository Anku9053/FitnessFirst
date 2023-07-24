import React, { useEffect } from "react";
import { Box, Image, Heading, Text, List, ListItem, Divider, Flex, Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { getSingleData } from "../Redux/DataReducer/action";

const SingleCardPage = () => {
  const { id } = useParams();
  const productData = useSelector((store) => store.dataReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleData(id));
  }, [dispatch, id]);

  return (
    <Center p="4" bg="gray.100" minHeight="100vh">
      <Box
        maxW="800px"
        bg="white"
        rounded="lg"
        boxShadow="lg"
        p="4"
        /* Media query for screen size >= 1300px */
        /* For smaller screens, the styles within Box will be applied by default */
        /* Adjust the styles as per your requirements */
        css={{
          "@media screen and (min-width: 1300px)": {
            padding: "8",
            maxWidth: "1000px",
          },
          "@media screen and (max-width: 600px)": {
            flexDirection: "column-reverse",
            alignItems: "center",
            textAlign: "center",
            "& img": {
              mb: "4",
            },
          },
        }}
      >
        <Heading size="xl" color="orange.500" mb="4">
          Exercise Details
        </Heading>

        <ReactPlayer url={productData?.videoLink} controls width="100%" />

        <Flex mt="4" align="center">
          <Image src={productData?.image} alt="altimage" borderRadius="md" w="200px" mr="4" />

          <Box>
            <Heading size="lg" mb="2">
              Exercise: {productData?.exercise}
            </Heading>
            <Text color="gray.600" mb="2">
              MRP ₹{productData?.price + 4599}
            </Text>
            <Text color="black" fontWeight="bold" fontSize="lg" mb="2">
              Price: {productData?.price}
            </Text>
            {productData?.instructions && (
              <>
                <Heading size="md" mt="4">
                  Instructions:
                </Heading>
                <List spacing="2" pl="4">
                  {productData?.instructions.map((instruction, index) => (
                    <ListItem key={index}>{instruction}</ListItem>
                  ))}
                </List>
              </>
            )}
            <Divider mt="4" />
            <Text color="gray.600" fontWeight="bold" mt="4">
              Category: {productData?.category}
            </Text>
          </Box>
        </Flex>
      </Box>
      {productData === null && (
        <Text textAlign="center" fontSize="xl" fontWeight="bold" color="red.500">
          No data available for this exercise.
        </Text>
      )}
    </Center>
  );
};

export default SingleCardPage;
