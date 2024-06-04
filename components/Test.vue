<script setup lang="ts">
import { computed } from 'vue';
import { EBody, EColumn, EContainer, EHead, EHeading, EHtml, EImg, EPreview, ERow, ESection, EText } from 'vue-email-edge'

const props = defineProps<{
  name: string
  t?: any
}>()

const username = computed(() =>
  props.name ? props.name.toUpperCase() : 'Zoey Kaiser'
);
</script>

<template>
  <EHtml lang="en">
    <EHead>
      <title>
        {{ t('app.name') }}
      </title>
      <meta name="description" content="Description" />
    </EHead>
    <EContainer>
      <h1>
        {{ username }}
      </h1>
      <h2>
        {{ t('app.name') }}
      </h2>
    </EContainer>
  </EHtml>
</template>
