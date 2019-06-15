import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'

const zhLocale = require('./zh-CN')
const enLocale = require('./en-US')

Vue.use(VueI18n)

const messages = {
  zh_CN: {
    ...elementZhLocale,
    ...zhLocale,
  },
  en_US: {
    ...elementEnLocale,
    ...enLocale,
  },
}
const i18n = new VueI18n({
  locale: sessionStorage.getItem('lang') || 'zh_CN',
  messages,
})
export default i18n
