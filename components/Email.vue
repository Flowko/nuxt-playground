<script setup lang="ts">
import {Body,Column,Container,Head,Heading,Html,Img,Preview,Row,Section,Text } from '@vue-email/components'
import { getRandomInt } from '../utils/index'

const props = defineProps({
  userFirstName: {
    type: String,
    default: 'John',
  },
  loginDevice: {
    type: String,
    default: 'Chrome on Mac OS X',
  },
  loginLocation: {
    type: String,
    default: 'Upland, California, United States',
  },
  loginIp: {
    type: String,
    default: '47.149.53.167',
  },
  loginDate: {
    type: Date,
    default: new Date('September 7, 2022, 10:58 am'),
  },
})

const formattedDate = new Intl.DateTimeFormat('en', {
  dateStyle: 'long',
  timeStyle: 'short',
}).format(props.loginDate)

const main = {
  backgroundColor: '#fff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const paragraph = {
  fontSize: '16px',
}

const logo = {
  padding: '30px 20px',
}

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const button = {
  backgroundColor: '#e00707',
  padding: '12px 30px',
  borderRadius: 3,
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
}

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
}

const boxInfos = {
  padding: '20px 40px',
}

const containerImageFooter = {
  padding: '45px 0 0 0',
}
</script>

<template>
  <Html>
    <Head />
    <Preview>Yelp recent login</Preview>
    <Body :style="main">
      <Container>
        <Section :style="logo">
          <Img src="https://vue-email-demo.vercel.app/static/yelp-logo.png" />
        </Section>

        <Section :style="content">
          <Img
            width="620"
            src="https://vue-email-demo.vercel.app/static/yelp-header.png"
          />

          <Row
            :style="{
              ...boxInfos,
              paddingBottom: 0,
            }"
          >
            <Column>
              <Heading style="font-size: 32; font-weight: bold; text-align: center">
                Hi {{ userFirstName }},
              </Heading>
              <Heading
                as="h2"
                :style="{
                  fontSize: '26px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }"
              >
                We noticed a recent login to your Yelp account.
              </Heading>

              <Text :style="paragraph">
                <b>Time: </b>
                {{ formattedDate }}
              </Text>
              <Text :style="{ ...paragraph, marginTop: '-5px' }">
                <b>Device: </b>
                {{ loginDevice }}
              </Text>
              <Text :style="{ ...paragraph, marginTop: '-5px' }">
                <b>Location: </b>
                {{ loginLocation }}
              </Text>
              <Text
                :style="{
                  color: 'rgb(0,0,0, 0.5)',
                  fontSize: 14,
                  marginTop: '-5px',
                }"
              >
                *Approximate geographic location based on IP address: {loginIp}
              </Text>

              <Text :style="paragraph">
                If this was you, there's nothing else you need to do.
              </Text>
              <Text :style="{ ...paragraph, marginTop: '-5px' }">
                If this wasn't you or if you have additional questions, please see our support page.
              </Text>
            </Column>
          </Row>
          <Row :style="{ ...boxInfos, paddingTop: '0' }">
            <Column
              :style="containerButton"
              col-span="{2}"
            >
              <Text :style="button">
                Learn More {{ getRandomInt(1, 10) }}
              </Text>
            </Column>
          </Row>
        </Section>

        <Section :style="containerImageFooter">
          <Img
            width="620"
            src="https://vue-email-demo.vercel.app/static/yelp-footer.png"
          />
        </Section>

        <Text
          :style="{
            textAlign: 'center',
            fontSize: 12,
            color: 'rgb(0,0,0, 0.7)',
          }"
        >
          © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105, U.S.A. | www.yelp.com
        </Text>
      </Container>
    </Body>
  </Html>
</template>
