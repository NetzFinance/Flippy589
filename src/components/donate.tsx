"use client";

import { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  HStack,
  Button,
  useClipboard,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

export function DonationWallet() {
  const walletAddress = "rffrYBmuCAGvAWhSNvuJ48pXZ7nCqTuveV";
  const { onCopy } = useClipboard(walletAddress);
  const toast = useToast();

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Copied!",
      description: "Wallet address copied to clipboard!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const bg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.900", "white");
  const subTextColor = useColorModeValue("gray.700", "gray.300");
  const buttonBg = useColorModeValue("gray.200", "gray.600");
  const buttonHoverBg = useColorModeValue("gray.300", "gray.500");

  return (
    <Box
      bg={bg}
      p={6}
      borderRadius="lg"
      boxShadow="md"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <VStack spacing={4} align="center">
        <Heading as="h2" size="md" color={textColor}>
          Support the Flippy589 Project
        </Heading>
        <Text fontSize="sm" color={subTextColor} textAlign="center">
          This is a donation wallet used to expand the Flippy589 project. Thank
          you for your support!
        </Text>
        <Box mb={6}>
          <Image
            src="/qr_code_rffrYBmuCAGvAWhSNvuJ48pXZ7nCqTuveV.png"
            alt="Donation Wallet QR Code"
            width={200}
            height={200}
            borderRadius="md"
          />
        </Box>
        <HStack spacing={4}>
          <Text
            fontSize="sm"
            color={subTextColor}
            fontFamily="mono"
            wordBreak="break-all"
          >
            {walletAddress}
          </Text>
          <Button
            leftIcon={<CopyIcon />}
            onClick={handleCopy}
            variant="outline"
            size="sm"
            bg={buttonBg}
            _hover={{ bg: buttonHoverBg }}
          >
            Copy
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
