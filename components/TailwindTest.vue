<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import { Body, Button, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text } from '@vue-email/components'
import { Tailwind } from '@vue-email/tailwind'


interface Props {
  invitedByUsername?: string
  teamName?: string
  username?: string
  invitedByEmail?: string
  inviteLink?: string
  inviteFromIp?: string
  inviteFromLocation?: string
}

withDefaults(defineProps<Props>(), {
  teamName: 'My project',
  username: 'John Doe',
  invitedByEmail: 'anpch@example.com',
  inviteLink: 'https://vercel.com/teams/invite/foo',
  inviteFromIp: '172.0.0.1',
  inviteFromLocation: 'San Francisco, CA',
})
</script>

<template>
  <Tailwind>
    <Html>
      <Head />
      <Body class="bg-white my-auto mx-auto font-sans">
        
        <p>
  a<br />
  b<br />
  c<br />
  d
</p>

        <Container class="border border-solid border-[#eaeaea] p-[20px] md:p-7 rounded my-[40px] mx-auto max-w-[465px]">
          <Section class="mt-[32px]">
            <Img src="https://vue-email-demo.vercel.app/static/vercel-logo.png" width="40" height="37" alt="Vercel" class="my-0 mx-auto" />
          </Section>
          <Heading class="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            Join <strong>{{ teamName }}</strong> on <strong>Vercel</strong>
          </Heading>
          <Text class="text-black text-[14px] leading-[24px]">
            Hello {{ username }},
          </Text>
          <Text class="text-black text-[14px] leading-[24px]">
            <strong>bukinoshita</strong> (
            <Link :href="`mailto:${invitedByEmail}`" class="text-blue-600 no-underline">
              {{ invitedByEmail }}
            </Link>
            ) has invited you to the <strong>{{ teamName }}</strong> team on <strong>Vercel</strong>.
          </Text>
          <Section>
            <Row>
              <Column align="right">
                <Img class="rounded-full" src="https://vue-email-demo.vercel.app/static/vercel-user.png" width="64" height="64" />
              </Column>
              <Column align="center">
                <Img src="https://vue-email-demo.vercel.app/static/vercel-arrow.png" width="12" height="9" alt="invited you to" />
              </Column>
              <Column align="left">
                <Img class="rounded-full" src="https://vue-email-demo.vercel.app/static/vercel-team.png" width="64" height="64" />
              </Column>
            </Row>
          </Section>
          <Section class="text-center mt-[32px] mb-[32px]">
            <Button :style="{
              padding: '10px 20px'
            }" class="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center" :href="inviteLink">
              Join the team
            </Button>
          </Section>
          <Text class="text-black text-[14px] leading-[24px]">
            or copy and paste this URL into your browser:
            <Link :href="inviteLink" class="text-blue-600 no-underline">
              {{ inviteLink }}
            </Link>
          </Text>
          <Hr class="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          <Text class="text-[#666666] text-[12px] leading-[24px]">
            This invitation was intended for
            <span class="text-black">{{ username }} </span>.This invite was sent from <span class="text-black">{{ inviteFromIp }}</span> located in
            <span class="text-black">{{ inviteFromLocation }}</span>. If you were not xpecting this invitation, you can ignore this mail. If you are concerned about your account's safety, please reply to this mail to get in touch
            with us.
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
</template>
