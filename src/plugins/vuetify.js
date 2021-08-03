import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme:  {
    themes: {
      dark: {
        primary: '#121212',
        secondary: '#19642a9',
        anchor: 'neongreen',
      },
      light: {
        primary: {
          base: '#1a227e',
          lighten1: '#534aae',
          darken1: '#000051'
        },
        secondary: {
          base: '#0076a3',
          lighten1: '#52a5d4',
          darken1: '#004a74'
        },
        anchor: '#0076a3',
        accent: '#534aae'
      }
    }
  }
});
