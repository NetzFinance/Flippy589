import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface LinkItem {
  url: string;
  label: string;
  image: string;
}

const links: LinkItem[] = [
  {
    url: "https://xpmarket.com/token/%24FLIPPY-rsENFmELvj92orrCKTkDTug53MzwsB7zBd",
    label: "XPMarket",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-CMla3EVhGNwvHRXnUVdCpnrhPYrSNz.png",
  },
  {
    url: "https://coinmarketcap.com/currencies/flippy-the-switch/",
    label: "CoinMarketCap",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CoinMarketCap-6qg48TkqOCcMMVls18RGKkFq9OVBX5.png",
  },
  {
    url: "https://firstledger.net/token/rsENFmELvj92orrCKTkDTug53MzwsB7zBd/24464C4950505900000000000000000000000000",
    label: "FirstLedger",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-ylSuc7r87H1cZPMWZrAEcOfmfN0vvM.png",
  },
  {
    url: "https://xmagnetic.org/tokens/$FLIPPY+rsENFmELvj92orrCKTkDTug53MzwsB7zBd?network=mainnet",
    label: "xMagnetic",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-uG1zxxzsLSb7YwQlhUWXD1Z6boFXRh.png",
  },
  {
    url: "https://sologenic.org/trade?network=mainnet&market=24464C4950505900000000000000000000000000%2BrsENFmELvj92orrCKTkDTug53MzwsB7zBd%2FXRP",
    label: "Sologenic",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Gnq5QYPIdqa7yhaIG114gpyEEduQAZ.png",
  },
  {
    url: "https://dexscreener.com/xrpl/24464c4950505900000000000000000000000000.rsenfmelvj92orrcktkdtug53mzwsb7zbd_xrp",
    label: "DexScreener",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XRP%20DEX%20Logos-JXhbJLmao8UNGSOp3s5fiE3eFrsWbC.png",
  },
];

export function DexSection(): JSX.Element {
  return (
    <Box py={12} px={4} bgGradient="linear(to-r, #FFD1DC, #FFFFD1, #D1E8FF)">
      <VStack maxW="6xl" mx="auto" spacing={8}>
        <Heading
          as="h2"
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="extrabold"
          color="gray.800"
          textAlign="center"
        >
          Flippy On DEX
        </Heading>
        <Button
          as={Link}
          href="https://xrpl.services/?issuer=rsENFmELvj92orrCKTkDTug53MzwsB7zBd&currency=24464C4950505900000000000000000000000000&limit=865217.994943875"
          target="_blank"
          bg="yellow.400"
          color="black"
          fontWeight="bold"
          py={2}
          px={4}
          rounded="full"
          shadow="lg"
          transition="all 0.3s"
          _hover={{ transform: "scale(1.05)", bg: "yellow.500" }}
          rightIcon={<FaExternalLinkAlt />}
        >
          Set Trustline On Wallet
        </Button>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={4}
        >
          {links.map((link, index) => (
            <Link href={link.url} key={index} isExternal>
              <Box
                bg="white"
                rounded="lg"
                shadow="lg"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{ transform: "scale(1.05)" }}
              >
                <Image src={link.image} alt={link.label} w="full" h="auto" />
              </Box>
            </Link>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
}
