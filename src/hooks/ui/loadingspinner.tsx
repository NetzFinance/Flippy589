import { Box, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Box
      position="fixed"
      bottom="10px"
      right="10px"
      backgroundColor="rgba(0, 0, 0, 0.7)"
      padding="10px"
      borderRadius="md"
      zIndex={1000}
    >
      <Spinner size="lg" color="#1bfd9c" />
    </Box>
  );
};
