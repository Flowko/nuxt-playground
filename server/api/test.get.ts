import { useRender } from 'vue-email-edge'
import Koala from '../../components/Koala.vue'


export default defineEventHandler(async (event) => {

  const html = await useRender(Koala, {
    userFirstname: 'Flowko'
  })

  return html.html

})
