<template>
  <div>{{ $t('app.hello') }} - {{ $t('app.name') }}</div>
  <Email 
    invitedByEmail="anpch@example.com"
    inviteLink="https://vercel.com/teams/invite/foo"
    invitedByUsername="bukinoshita"
    teamName="My project"
    inviteFromIp="172.0.0.1"
    inviteFromLocation="San Francisco, CA"
    username="John Doe"
  />
</template>
