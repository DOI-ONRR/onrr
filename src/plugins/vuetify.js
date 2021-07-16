import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme:  {
    themes: {
      dark: {
        primary: '#121212',
        secondary: '#19642a9',
        anchor: 'deeppink',
      },
      light: {
        primary: '#062135',
        secondary: '#004a74',
        anchor: '#0076a3',
        accent: '#534aae'
      }
    }
  }
});
