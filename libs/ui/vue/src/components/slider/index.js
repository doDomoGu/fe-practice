import Slider from './src/index.vue'

Slider.install = (app) => {
  app.component('DgSlider', Slider)
}

export { Slider }
