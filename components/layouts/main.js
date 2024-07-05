import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container, Flex } from '@chakra-ui/react'
import Footer from '../footer'
// import { Image } from '@chakra-ui/react'
import WhatsAppButton from '../whatsapp_util'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rozandi Hikmah homepage" />
        <meta name="author" content="Rozandi Hikmah" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Rozandi Hikmah" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Rozandi Hikmah" />
        <meta name="og:title" content="Rozandi Hikmah" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Ctx320 - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {/* <Image
          src="/images/BACKGROUND_BANNER_MONSTER_720X200.jpg"
          alt="LeaderBoard"
          mt="4"
          mb="4"
          rounded={10}
        /> */}
        {children}

        <Footer />
        <Flex position="fixed" bottom={2} right={16} align="flex-end">
          <WhatsAppButton
            phoneNumber="6289503215816"
            message="Halo! Saya mengunjungi halaman Anda dan ingin berbicara lebih lanjut."
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default Main
