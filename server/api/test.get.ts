import { useRender } from 'vue-email'
import Koala from '@/Components/koala-welcome.vue'


export default defineEventHandler(async (event) => {

  const html = await useRender(Koala, {
    userFirstname: 'Flowko'
  })

  return html.html

})
