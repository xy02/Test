import Vue from 'vue'
import VueI18n from 'vue-i18n'
import editorEn from './editor/en'
import editorZh from './editor/zh'

Vue.use(VueI18n)

// set lang
Vue.config.lang = 'zh'
Vue.config.fallbackLang = 'en'
Vue.locale('en', {
    editor: editorEn
})
Vue.locale('zh', {
    editor: editorZh
})
