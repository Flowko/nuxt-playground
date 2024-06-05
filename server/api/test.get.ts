import { useRender } from 'vue-email-edge'
import Email from '../../components/vercel-invite-user.vue'

export default defineEventHandler(async (event) => {

  const t = await useTranslation(event)

  const email = await useRender(Email, {
    loginDate: new Date('September 7, 2022, 10:58 am'),
    loginDevice: 'Chrome on Mac OS X',
    loginLocation: 'Upland, California, United States',
    loginIp: '47.149.53.167',
    userFirstName: 'John',
  })

  return email.html

})
