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
          base: '#000951',
          lighten1: '#1a227e',
          lighten2: '#534aae'
        },
        secondary: {
          base: '#004a74',
          lighten1: '#0076a3',
          lighten2: '#52a5d4'
        },
        anchor: '#0076a3',
        accent: '#534aae'
      }
    }
  }
});
