import {
  Box,
  Button,
  Card,
  CardBody,
  Image as ChakraImage,
  Link as ChakraLink,
  Container,
  Flex,
  Grid,
  HStack,
  Heading,
  IconButton,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Tooltip,
  UnorderedList,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { NextPage } from "next";
import NextLink from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import {
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaCoins,
  FaCopy,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { HeroSection, colorOptions } from './HeroSection';
import { MemeSection } from './MemeSection';

// Sample data for the chart
const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 1000 },
];

const reviews = [
  {
    quote:
      "You should definitely check out $FLIPPY one of the most young and exciting xrp memecoin out there.",
    author: "WHALEDOT 🐋 鲸点",
    link: 'https://x.com/whaledotcalls/status/1854901839839338865'
  },
  {
    quote:
      "$FLIPPY first coin listed on coinmarketcap. It has the lore and art that every other coin would be dying to have. It's a no-brainer.",
    author: "Kingo",
    link: 'https://x.com/lonwoskeng/status/1854891108792406323'
  },
  {
    quote:
      "My top 3 coins with the best chances of success due to the quality of their memes are: $BERT ~ $KCUP ~ $FLIPPY. This is strictly based on art, originality, and how “memeable” they are.",
    author: "XRP Memes 💎",
    link: 'https://x.com/eksrp123/status/1854781214411956726'
  },
  {
    quote:
      "$FLIPPY is running. I think I may have called another banger! Super bullish!!!! ",
    author: "Doctor Cryptoman",
    link: 'https://x.com/Doctorcryptoman/status/1854319392491815357'
  },
  {
    quote:
      "Please check out at @CryptosRichboy $FLIPPY SATURDAY NIGHT LIVE!!! HOT XRP PLAY!!!",
    author: "K00LRav",
    link: 'https://x.com/K00LRav/status/1852914894326108370'
  },
  {
    quote:
      "$FLIPPY is one of the few non-rug pools with fair launch and organic growth on the XRPL. \n$FLIPPY has the stars 🌟 in alignment for sure… have you flipped the switch yet? #XRP #memecoin",
    author: "BronzEmerald",
    link: 'https://x.com/Bronz_Emerald/status/1852757827170783393'
  },
  {
    quote:
      "$FLIPPY THE SWITCH will be the blue chip meme of the XRPL, It's flipping EVERYTHING! 🔥",
    author: "FlipFiend",
  },
  {
    quote:
      "$Flippy is an original meme that doesn't exists on any other chains that every $XRP holder can relate to - that flip of the switch moment! 💎",
    author: "SparkPlugger",
  },
]

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedImage: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ src, alt, width, height }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit="cover"
        borderRadius="full"
      />
    </motion.div>
  );
};

const TelevisionBox: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box position="relative" maxWidth="2xl" mx="auto">
      <Box bg="gray.800" borderRadius="lg" p={4} boxShadow="lg">
        <Box bg="black" borderRadius="lg" overflow="hidden">
          {children}
        </Box>
        <Flex justifyContent="center" mt={4}>
          <Box width="16" height="4" bg="gray.700" borderRadius="full" />
        </Flex>
      </Box>
      <Box
        position="absolute"
        bottom="-4"
        left="50%"
        transform="translateX(-50%)"
        width="24"
        height="8"
        bg="gray.700"
        borderBottomRadius="lg"
      />
    </Box>
  );
};

const Carousel: React.FC<{ items: string[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Box position="relative" maxWidth="4xl" mx="auto">
      <Box overflow="hidden">
        <Flex
          transition="transform 300ms"
          transform={`translateX(-${currentIndex * 100}%)`}
        >
          {items.map((item, index) => (
            <Box key={index} flexShrink={0} width="100%">
              <TelevisionBox>
                <Box aspectRatio={16 / 9}>
                  <iframe
                    title="flippy memes"
                    data-tweet-limit="1"
                    className="twitter-timeline"
                    src={item}
                    width="100%"
                    height={"100%"}
                  />
                </Box>
              </TelevisionBox>
            </Box>
          ))}
        </Flex>
      </Box>
      <Button
        position="absolute"
        top="50%"
        left={4}
        transform="translateY(-50%)"
        bg="blue.500"
        color="white"
        borderRadius="full"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </Button>
      <Button
        position="absolute"
        top="50%"
        right={4}
        transform="translateY(-50%)"
        bg="blue.500"
        color="white"
        borderRadius="full"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </Button>
    </Box>
  );
};

const ImageGalleryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  /*
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20blue%20tinted%20vintage%201930s%20switch%20with%20a%20smiling%20face,%20eyes,%20mouth,%20arms,%20and%20legs,%20in%20the%20ON%20position,%20with%20the%20word%20FLIPPY%20written%20on%20it,%20standing%20confidently%20with%20hands%20on%20hips,%20against%20a%20gradient%20of%20beige%20%20(5)-wAJZnzEpCytcDiyOXMZFHWMy67UjXB.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20blue%20tinted%20vintage%201930s%20slim%20switch%20with%20a%20smiling%20face,%20eyes,%20mouth,%20arms,%20and%20legs,%20in%20the%20ON%20position,%20with%20the%20word%20FLIPPY%20written%20on%20it,%20riding%20a%20bull%20to%20new%20all%20time%20highs,%20against%20a%20gradient%20of%20beige%20and-ZdzQxn39mjLDmrhPoxeqX5qbg2twCK.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20vintage,%201930s%20style%20light%20switch%20character%20who%20always%20stays%20on,%20in%20a%20hand%20drawn%20style,%20with%20a%20blue%20tint,%20climbing%20a%20high%20rise%20building%20with%20planes%20flying%20around-w1oyVRrAGdUPIQrUOYmjq4XU0HfIYD.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3365-Qh3tTgDOi8rSukiEQqRFd6VuGuiVh5.JPG",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20blue%20tinted%20vintage%201930s%20switch%20with%20a%20smiling%20face,%20eyes,%20mouth,%20arms,%20and%20legs,%20in%20the%20ON%20position,%20with%20the%20word%20FLIPPY%20written%20on%20it,%20standing%20confidently%20with%20hands%20on%20hips,%20against%20a%20gradient%20of%20beige%20%20(1)-Ied3FjmMoczGhEaHpCmdzkrvVpoEIm.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3374-Q806qvzkSQJY4IkuXywRCYoIc8AlIS.JPG",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20vintage,%201930s%20style%20light%20switch%20character%20who%20always%20stays%20on,%20in%20a%20hand%20drawn%20style,%20with%20a%20blue%20tint,%20at%20a%20colorful%20boxing%20match%20(3)-Xncv0pqGHaRIVAabb53Dd1EdIx0Agk.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20colorful,%201930s%20style%20light%20switch%20character%20who%20always%20stays%20on,%20in%20a%20hand%20drawn%20style,%20with%20a%20blue%20tint,%20partying%20on%20a%20megamillion%20dollar%20yacht%20with%20people%20on%20it-XIf9nQmaXSqtDv38lgeozMXoi3QaeQ.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20vintage,%201930s%20style%20light%20switch%20character%20who%20always%20stays%20on,%20in%20a%20hand%20drawn%20style,%20with%20a%20blue%20tint%20sitting%20on%20the%20beach%20drinking%20champagne-NZJjuuuIVqNlv6wbArkfBpevcP1Arz.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20vintage,%201930s%20style%20light%20switch%20character%20who%20always%20stays%20on,%20in%20a%20hand%20drawn%20style,%20with%20a%20blue%20tint%20on%20the%20switch,%20climbing%20a%20high%20rise%20building%20with%20planes%20flying%20around-kdZTo9uSIjQNz8DYMqS3nueE3YGBba.png",
    */

  const images = [
    "/assets/1.jpeg",
    "/assets/2.jpeg",
    "/assets/3.jpeg",
    "/assets/4.jpeg",
    "/assets/5.jpeg",
    "/assets/6.jpeg",
    "/assets/7.jpeg",
    "/assets/8.jpeg",
    "/assets/9.jpeg",
    "/assets/10.jpeg",
    "/assets/11.jpeg",
    "/assets/12.jpeg",
    "/assets/13.jpeg",
    "/assets/14.jpeg",
    "/assets/15.jpeg",
    "/assets/16.jpeg",
    "/assets/17.jpeg",
    "/assets/18.jpeg",
    "/assets/19.jpeg",
    "/assets/20.jpeg",
    "/assets/21.jpeg",
    "/assets/22.jpeg",
    "/assets/23.jpeg",
    "/assets/24.jpeg",
  ];

  const imagesPerView = 3;
  const slideWidth = 100 / imagesPerView;
  const maxIndex = images.length - imagesPerView;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Box position="relative" width="full" overflow="hidden">
      <Flex
        transition="transform 500ms"
        transform={`translateX(-${(currentIndex / images.length) * 100}%)`}
        flexWrap="nowrap"
        w="100%"
      >
        {images.map((src, index) => (
          <Box key={index} width={`${slideWidth}%`} flexShrink={0} p={2}>
            <ChakraImage
              src={src}
              alt={`Flippy character ${index + 1}`}
              width="100%"
              height="auto"
              objectFit="cover"
              borderRadius="lg"
            />
          </Box>
        ))}
      </Flex>
      <Button
        position="absolute"
        top="50%"
        left={4}
        transform="translateY(-50%)"
        bg="blue.500"
        color="white"
        borderRadius="full"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </Button>
      <Button
        position="absolute"
        top="50%"
        right={4}
        transform="translateY(-50%)"
        bg="blue.500"
        color="white"
        borderRadius="full"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </Button>
    </Box>
  );
};
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Box
        as="header"
        width="full"
        height="16"
        py={4}
        px={6}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="blackAlpha.50"
        backdropFilter="blur(10px)"
        position="sticky"
        top={0}
        zIndex={50}
      >
        <Flex alignItems="center" gap={2}>
          <Image
            src="/logo.png"
            alt="$FLIPPY THE SWITCH Logo"
            h="40px"
            w="40px"
            borderRadius={"full"}
          />
          <Text fontSize={["xl", "2xl"]} fontWeight="bold" color="blue.300">
            $FLIPPY THE SWITCH
          </Text>
        </Flex>
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          <ChakraLink
            as={NextLink}
            href="#about"
            color="blue.400"
            _hover={{ color: "blue.200" }}
          >
            About
          </ChakraLink>
          <ChakraLink
            as={NextLink}
            href="https://firstledger.net/token/rsENFmELvj92orrCKTkDTug53MzwsB7zBd/24464C4950505900000000000000000000000000"
            color="blue.400"
            _hover={{ color: "blue.200" }}
            target="_blank"
          >
            Chart
          </ChakraLink>
          <ChakraLink
            as={NextLink}
            href="#testimonials"
            color="blue.400"
            _hover={{ color: "blue.200" }}
          >
            Testimonials
          </ChakraLink>
          <ChakraLink
            as={NextLink}
            href="#social"
            color="blue.400"
            _hover={{ color: "blue.200" }}
          >
            Social
          </ChakraLink>
        </HStack>
        <Button
          display={{ base: "block", md: "none" }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiMenu />
        </Button>
      </Box>
      {isMenuOpen && (
        <Box display={{ base: "block", md: "none" }} bg="black" py={4} px={6}>
          <VStack as="nav" spacing={2} align="stretch">
            <ChakraLink
              as={NextLink}
              href="#about"
              color="blue.400"
              _hover={{ color: "blue.200" }}
            >
              About
            </ChakraLink>
            <ChakraLink
              as={NextLink}
              href="https://firstledger.net/token/rsENFmELvj92orrCKTkDTug53MzwsB7zBd/24464C4950505900000000000000000000000000"
              color="blue.400"
              _hover={{ color: "blue.200" }}
              target="_blank"
            >
              Chart
            </ChakraLink>
            <ChakraLink
              as={NextLink}
              href="#testimonials"
              color="blue.400"
              _hover={{ color: "blue.200" }}
            >
              Testimonials
            </ChakraLink>
            <ChakraLink
              as={NextLink}
              href="#social"
              color="blue.400"
              _hover={{ color: "blue.200" }}
            >
              Social
            </ChakraLink>
          </VStack>
        </Box>
      )}
    </>
  );
};
const FlippyLandingPage: NextPage = () => {
  const [flippyIndex, setFlippyIndex] = useState(1);
  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = Math.floor(Math.random() * reviews.length);
      setFlippyIndex(newIndex)
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const copyToClipboard = async () => {
    const contractAddress = "rsENFmELvj92orrCKTkDTug53MzwsB7zBd";
    try {
      await navigator.clipboard.writeText(contractAddress);
      setIsCopied(true);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast({
        title: "Error",
        description: "Failed to copy contract address.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const videoLinks = [
    "https://ipfs.io/ipfs/QmSBXFUsXjGv579uGMxCxkAmeVPRQBv2PiwVMMmEEfmRW3/vid1.mp4",
    "https://ipfs.io/ipfs/QmSBXFUsXjGv579uGMxCxkAmeVPRQBv2PiwVMMmEEfmRW3/vid2.mp4",
    "https://ipfs.io/ipfs/QmSBXFUsXjGv579uGMxCxkAmeVPRQBv2PiwVMMmEEfmRW3/vid3.mp4",
    "https://ipfs.io/ipfs/QmSBXFUsXjGv579uGMxCxkAmeVPRQBv2PiwVMMmEEfmRW3/vid4.mp4",
    "https://ipfs.io/ipfs/QmSBXFUsXjGv579uGMxCxkAmeVPRQBv2PiwVMMmEEfmRW3/vid5.mp4",
    "https://ipfs.io/ipfs/QmSBXFUsXjGv579uGMxCxkAmeVPRQBv2PiwVMMmEEfmRW3/vid6.mp4",
    "https://ipfs.io/ipfs/QmSBXFUsXjGv579uGMxCxkAmeVPRQBv2PiwVMMmEEfmRW3/vid7.mp4",
  ];
  return (
    <Flex minHeight="100vh" flexDirection="column" bg="black" color="white">
      <Navbar />

      <HeroSection />

      {/* previous hero section with Flippy on the moon & FL iframe */}
      {/* <Box width="full" h="100%" position="relative" overflow="hidden">
        <Box
          position="relative"
          display="flex"
          minH="100vh"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/assets/topbanner.jpeg" //"/assets/flippybanner.jpeg"
            alt="$FLIPPY THE SWITCH Feature Image with FLIPPY planet and light switch character"
            objectFit="cover"
            bgSize={"100% 100%"}
            display={{ base: "none", md: "none", lg: "block" }}
            position="absolute"
            inset={0}
            w="full"
            h="full"
          />
          <Image
            src="/assets/spacebanner.jpeg" //"/assets/flippybanner.jpeg"
            alt="$FLIPPY THE SWITCH Feature Image with FLIPPY planet and light switch character"
            objectFit="cover"
            bgSize={"100% 100%"}
            display={{ base: "none", md: "block" }}
            position="absolute"
            inset={0}
            w="full"
            h="full"
          />
          <Image
            src="/assets/spacebanner.jpeg" //"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MBanner%20all%20sizes-03-pncP3IMj3N3X9DGqtvACGWO0779X2f.png"
            alt="$FLIPPY THE SWITCH Feature Image with FLIPPY planet and light switch character"
            objectFit="cover"
            display={{ base: "block", md: "none" }}
            position="absolute"
            inset={0}
            w="full"
            h="full"
          />
        </Box>
        <Box
          position="absolute"
          inset={0}
          bg="blackAlpha.300"
          display="flex"
          alignItems={{ base: "flex-end", md: "flex-end" }}
          justifyContent={{ base: "center", md: "center" }}
          m="auto"
        >
          <VStack textAlign="center" maxWidth="4xl" mb={"12vh"}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Stack spacing={4} direction={{ base: "column", md: "row" }}>
                <Stack
                  bg="gray.800"
                  borderRadius="full"
                  py={2}
                  px={2}
                  direction={{ base: "column", md: "row" }}
                >
                  <Tooltip
                    label={isCopied ? "Copied!" : "Click to copy"}
                    placement="top"
                  >
                    <Button
                      onClick={copyToClipboard}
                      variant="ghost"
                      color="blue.300"
                      _hover={{ color: "blue.100" }}
                      transition="colors 200ms"
                      aria-label="Copy contract address"
                      maxW="95vw"
                      w="100%"
                      rightIcon={isCopied ? <FaCheck /> : <FaCopy />}
                    >
                      <Text fontFamily="mono" mr={2}>
                        rsENFmELvj92orrCKTkDTug53MzwsB7zBd
                      </Text>
                    </Button>
                  </Tooltip>
                </Stack>

                <Button
                  bg="blue.500"
                  color="white"
                  fontWeight="bold"
                  borderRadius="full"
                  boxShadow="lg"
                  transition="all 300ms"
                  onClick={() => {
                    onOpen();
                    toast({
                      title: "Gettin ready to $FLIPPY THE SWITCH!",
                      description: "All in or DCA?",
                      status: "info",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                  maxW="95vw"
                  w="100%"
                  _hover={{
                    transform: "scale(1.05)",
                    bg: "blue.600",
                    color: "green.300",
                  }}
                  m="auto"
                  rightIcon={<FaCoins />}
                >
                  <Text fontFamily="mono" px={2} py={2}>
                    BUY $FLIPPY
                  </Text>
                </Button>

                <Modal isOpen={isOpen} onClose={onClose} size="xl">
                  <ModalOverlay bg="black" />
                  <ModalContent>
                    <ModalHeader>Buy $FLIPPY COIN</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody minH={400} w="100%">
                      <iframe
                        src="https://firstledger.net/token/rsENFmELvj92orrCKTkDTug53MzwsB7zBd/24464C4950505900000000000000000000000000" // Replace with your actual URL
                        width="100%"
                        height="600px"
                        style={{ border: "none" }}
                        title="Buy $FLIPPY COIN"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={() => {
                          onClose();
                          toast({
                            title: "Did you $FLIP!",
                            description:
                              "if you didnt all your bags will $FLOP",
                            status: "info",
                            duration: 3000,
                            isClosable: true,
                          });
                        }}
                      >
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Stack>
            </motion.div>
          </VStack>
        </Box>
      </Box> */}

      <Box as="main" flexGrow={1}>
        <AnimatedSection>
          <Box
            as="section"
            id="about"
            py={{ base: 12, md: 20, lg: 28 }}
            bg="black"
            h="100%"
            alignContent={"center"}
            justifyContent={"center"}
          >
            <Container
              maxWidth="container.xl"
              h="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Heading
                as="h2"
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                mb={8}
                textAlign="center"
                color="blue.300"
              >
                Who is $FLIPPY?
              </Heading>
              <Image
                src="/assets/flippy-rainbow-trans.png"
                alt="$FLIPPY Logo rainbow"
                objectFit="contain"
                w={["calc(100% - 33px)", "400px"]}
              />
              <Grid mt="30px" templateColumns={{ md: "repeat(2, 1fr)" }} gap={[4, 8]}>
                <VStack align="start" spacing={4}>
                  <Text color="blue.400" fontSize={["xl"]}>
                    The Switch that doesn't turn off – the hero we
                    didn't ask for, but the one we deserve.
                  </Text>
                  <Text color="blue.400" fontSize={["xl"]}>
                    $FLIPPY is an original meme coin in the XRPL ecosystem,
                    bringing fun and excitement to the world of
                    cryptocurrencies. With our unique approach to memecoins,
                    we're flipping the script on traditional memefi via organic
                    community engagement, tokens burns, giveaways, contests &
                    more!
                  </Text>
                  <Text color="blue.400" fontSize={["xl"]}>
                    Launch Date: 10/27/2024, Token Supply: 865,000
                  </Text>
                </VStack>
                <VStack align="start" spacing={4}>
                  <Text color="blue.400" fontSize={["xl"]}>
                    Flippy's always on, unlike the one David holds. Need to turn
                    off the lights before bed? Too bad! Flippy's got other
                    plans. Think of Flippy as your over-enthusiastic XRPL friend
                    who's always ready to party ... even when you're not. 589+
                    EOY
                  </Text>
                  <Text color="blue.400" fontSize={["xl"]}>
                    We had plans to Airdrop 15% to any holder who didn't sell to
                    1m mc. We put out a community vote, and decided it was best
                    for the project to burn 99% of the dev supply. This truly
                    created a flip of the switch moment catapulting $FLIPPY to
                    the top 10 on day 2 and just under a $1Million MC.
                  </Text>
                </VStack>
              </Grid>
            </Container>
          </Box>
        </AnimatedSection>

        {/*
        <AnimatedSection>
          <Box as="section" id="chart" py={16} bg="gray.900">
            <Container maxWidth="container.xl">
              <Heading
                as="h2"
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                mb={8}
                textAlign="center"
                color="blue.300"
              >
                $FLIPPY Chart
              </Heading>
              <Card maxWidth="4xl" mx="auto">
                <CardBody>
                  <Box height={["300px", "400px"]}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="var(--chakra-colors-blue-500)"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                </CardBody>
              </Card>
            </Container>
          </Box>
        </AnimatedSection>
      */}

        <AnimatedSection>
         <Box
            as="section"
            id="flippy-logo"
            position="relative"
            bg="transparent"
            w="100%"
          >
            <Image
              src="/assets/flippy-banner-33.jpg"
              alt="$FLIPPY Logo with animated light switches"
              objectFit={["cover", "contain"]}
              w={['unset', "100%"]}
              h={['400px', 'unset']}
            />
          </Box>
        </AnimatedSection>

        <AnimatedSection>
          <Box as="section" id="testimonials" py={16} bg="black">
            <Container maxWidth="container.xl">
              <Heading
                as="h2"
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                pt={'30px'}
                mb={'30px'}
                textAlign="center"
                color="blue.300"
              >
                What People Are Saying
              </Heading>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={8}
              >
                {reviews.map((review, i) => (
                  <ReviewCard key={i} review={review} index={i} flippyIndex={flippyIndex}  />
                ))}
              </Grid>
              <Heading
                as="h2"
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                mt={'50px'}
                textAlign="center"
                color="blue.300"
              >
                Want to Be Featured?
              </Heading>
              <Heading
                fontSize={["xl"]}
                fontWeight="bold"
                mt={'15px'}
                pb={'20px'}
                textAlign="center"
                color="blue.300"
                maxWidth={['310px']}
                mx={'auto'}
              >
                Post something about $FLIPPY on X, tag @flippy589, and share it in our Telegram
              </Heading>
            </Container>
          </Box>
        </AnimatedSection>

        <AnimatedSection>
          <Box as="section" id="social" py={16} bg="gray.900">
            <Container maxWidth="container.xl">
              <Heading
                as="h2"
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                mb={8}
                textAlign="center"
                color="blue.300"
              >
                Join the $FLIPPY Community
              </Heading>
              <Flex justifyContent="center" gap={4} mb={8}>
                <ChakraLink
                  as={NextLink}
                  href="https://x.com/flippy589"
                  passHref
                  target="_blank"
                >
                  <IconButton
                    variant="outline"
                    icon={<FaX />}
                    color="blue.300"
                    _hover={{ color: "blue.100" }}
                    aria-label={"X"}
                  />
                </ChakraLink>
                <ChakraLink
                  as={NextLink}
                  href="https://t.me/flippytheswitch"
                  passHref
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    leftIcon={<FaTelegramPlane />}
                    color="blue.300"
                    _hover={{ color: "blue.100" }}
                  >
                    Telegram
                  </Button>
                </ChakraLink>
              </Flex>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(1, 1fr)" }}
                gap={8}
                maxW="100vw"
              >
                {/*
                <Box bg="white" p={4} borderRadius="lg" boxShadow="md">
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="bold"
                    mb={4}
                    color="blue.300"
                  >
                    Latest Tweet
                  </Heading>
                  <Box
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="lg"
                    p={4}
                    height="64"
                    overflow="hidden"
                  >
                    <Box overflow={"scroll"}>
                      <a
                        data-tweet-limit="1"
                        className="twitter-timeline"
                        href="https://x.com/flippy589"
                      >
                        Tweets by flippy589
                      </a>
                    </Box>
                  </Box>
                </Box>
                */}
                <Box bg="white" p={4} borderRadius="lg" boxShadow="md">
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="bold"
                    mb={4}
                    color="blue.300"
                  >
                    Video Interview
                  </Heading>
                  <Box aspectRatio={16 / 9}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/tCo_S_OrXuQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </Box>
                </Box>
              </Grid>
            </Container>
          </Box>
        </AnimatedSection>

        <AnimatedSection>
          <Box as="section" id="meme-contest" py={16} bg="gray.900">
            <Container maxWidth="container.xl">
              <Heading
                as="h2"
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                mb={8}
                textAlign="center"
                color="blue.300"
              >
                Community Memes
              </Heading>
              <MemeSection />
              {/* <Carousel items={videoLinks} /> */}
            </Container>
          </Box>
        </AnimatedSection>

        <AnimatedSection>
          <Box as="section" id="image-gallery" bg="black">
            <ImageGalleryCarousel />
          </Box>
        </AnimatedSection>
      </Box>

      <Box as="footer" width="full" py={6} px={6} bg="blue.900" color="white">
        <Container maxWidth="container.xl">
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box mb={{ base: 4, md: 0 }}>
              <Text>&copy; 2024 $FLIPPY THE SWITCH. All rights reserved.</Text>
            </Box>
            <HStack spacing={4}>
              {/*
              <ChakraLink
                as={NextLink}
                href="/privacy"
                _hover={{ textDecoration: "underline" }}
              >
                Privacy Policy
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="/terms"
                _hover={{ textDecoration: "underline" }}
              >
                Terms of Service
              </ChakraLink>
              */}
              <ChakraLink
                as={NextLink}
                href="https://firstledger.net/token/rsENFmELvj92orrCKTkDTug53MzwsB7zBd/24464C4950505900000000000000000000000000"
                target="_blank"
                _hover={{ textDecoration: "underline" }}
              >
                First Ledger
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="https://t.me/flippytheswitch"
                target="_blank"
                _hover={{ textDecoration: "underline" }}
              >
                Telegram
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="https://x.com/flippy589"
                target="_blank"
                _hover={{ textDecoration: "underline" }}
              >
                x.com
              </ChakraLink>
              <ChakraLink
                as={NextLink}
                href="https://t.me/flippytheswitch"
                target="_blank"
                _hover={{ textDecoration: "underline" }}
              >
                Contact Us
              </ChakraLink>
            </HStack>
          </Flex>
          <Box mt={6} fontSize="sm" color="gray.300">
            <Heading as="h3" fontSize="md" fontWeight="bold" mb={2}>
              Disclaimer: This is a Meme Token 🚨
            </Heading>
            <Text>
              $Flippy The Switch is a community-driven, humor-based token
              inspired by the legendary "flip of the switch" moment that XRP
              enthusiasts have been dreaming about for years. Please note:
            </Text>
            <UnorderedList mt={2} spacing={1}>
              <ListItem>
                <strong>Not Financial Advice:</strong> This token is purely for
                fun, entertainment, and community engagement. It is not an
                investment or a financial product. Don't bet the farm on a meme!
              </ListItem>
              <ListItem>
                <strong>Volatility Expected:</strong> Like all memes, $Flippy
                The Switch may flip, flop, and wiggle with the waves of the
                internet. HODL at your own discretion.
              </ListItem>
              <ListItem>
                <strong>No Guarantees or Promises:</strong> $Flippy The Switch
                exists solely in the spirit of memes and community, with no
                roadmap, guarantees, or utility beyond a good laugh and a place
                in the FlipSquad.
              </ListItem>
              <ListItem>
                <strong>Do Your Own Research (DYOR):</strong> We encourage
                everyone to research any crypto project they engage with,
                including this one. We're here for laughs, not liability!
              </ListItem>
            </UnorderedList>
            <Text mt={2}>
              In short, $Flippy The Switch is here for the ride, the community,
              and the laughs. Although we value transparency and maintain high
              ethical standards, please participate responsibly, keep a sense of
              humor, and, as always, flip carefully!
            </Text>
          </Box>
        </Container>
      </Box>
    </Flex>
  );
};

const ReviewCard = ({review, index, flippyIndex}: any) => {
  return(
    <Card
      bgGradient="linear(to-br, blue.50, yellow.50)"
      position="relative"
      h="100%"
      alignContent={"space-between"}
      onClick={() => {
        if (review.link) {
          window?.open(review.link, '_blank')?.focus();
        }
      }}
      className="card-body"
    >
      <CardBody
        p={6}
        h="100%"
        alignContent={"space-between"}
        style={{
          background: `#${colorOptions[index]}44`,
          borderRadius: '0.375rem',
          cursor: review.link ? 'pointer' : 'normal'
        }}
      >  
      {/* color: #2e384d; */}
        <Text color="#2e384d" mb={4} pb={4} maxWidth={['80%', '90%']}>
          "{review.quote}"
        </Text>
        <Text
        fontWeight="bold"
        color="#2e384d"
        position={['relative', 'absolute']}
        left={[0, '24px']}
        bottom={[0, 5]}
        >
          {review.author}
        </Text>
        {
          index == flippyIndex &&
          <Box
            position="absolute"
            bottom={3} right={3}
            className="flippy-gif-small"
          >
            <Image
              src="/assets/flippy-click-6.gif"
              alt="$FLIPPY Logo"
              width={10}
              objectFit="cover"
            />
          </Box>
        }
      </CardBody>
    </Card>
  )
}

export default FlippyLandingPage;
