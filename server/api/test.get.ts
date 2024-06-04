import { useRender } from 'vue-email-edge'
import Email from '../../components/Test.vue'


export default defineEventHandler(async (event) => {

  const t = await useTranslation(event)

  const html = await useRender(Email, {
    name: 'Flowko',
    t
  })

  return html.html

})
