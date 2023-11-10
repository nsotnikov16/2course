import { getSearchParams } from '@/utils/functions';
import { createStore } from 'vuex'

export default createStore({
  state: {
    info: {
      phone: '+7 (922) 444-81-31',
      email: 'docs@osipov.digital',
      address: 'г. Сургут, ул. Базовая, д. 34, офис 10',
      inn: '8602309464',
      ogrn: '1238600001200',
      copyright: `ООО Дотсолюшн © ${new Date().getFullYear()}`
    },
    projects: [
      {
        name: 'EduКеша',
        description: 'Разработали сервис для проведения онлайн-занятий',
        link: '#',
        img: new URL('@/assets/images/projects/1.png', import.meta.url)
      },
      {
        name: 'DonateLike',
        description: 'Разработали телеграмм-бота для отправки платных реакций',
        link: '#',
        img: new URL('@/assets/images/projects/2.png', import.meta.url)
      },
      {
        name: 'go.surgu.ru',
        description: 'Разработали сайт приемной комиссии Сургутского государственного университета',
        link: '#',
        img: new URL('@/assets/images/projects/3.png', import.meta.url)
      },
    ],
    technologies: [
      { name: 'PHP', img: new URL('@/assets/images/technologies/php.svg', import.meta.url) },
      { name: 'Laravel', img: new URL('@/assets/images/technologies/laravel.svg', import.meta.url) },
      { name: 'JavaScript', img: new URL('@/assets/images/technologies/js.svg', import.meta.url) },
      { name: 'Nuxt.js', img: new URL('@/assets/images/technologies/nuxt.svg', import.meta.url) },
      { name: 'MySQL', img: new URL('@/assets/images/technologies/mySQL.svg', import.meta.url) },
      { name: 'PostgreSQL', img: new URL('@/assets/images/technologies/postgreSQL.svg', import.meta.url) },
      { name: 'RESTful API', img: new URL('@/assets/images/technologies/api.svg', import.meta.url) },
      { name: 'GitLab', img: new URL('@/assets/images/technologies/gitlab.svg', import.meta.url) },
    ]
  },
  actions: {
    async sendToTelegram({ commit }, data = {}) {
      const getParams = getSearchParams();
      data.chat_id = getParams.get('chat_id') ?? process.env.VUE_APP_CHAT_ID;

      const url = `https://api.telegram.org/bot${getParams.get('token') ?? process.env.VUE_APP_TOKEN_BOT}/sendMessage?`;
      const params = Object.entries(data).map(([k, v]) => `${k}=${v}`).join('&');

      try {
        const response = await fetch(url + params);
        const res = await response.json();

        if (!res || !res.ok || !res.result.message_id) {
          throw new Error(res.description ?? 'Произошла ошибка отправки сообщения');
        }

        return { success: true };
      } catch (error) {
        return { error: error.message };
      }
    }
  },
})
