import { reactive } from 'vue'
import { cars } from './cars'

export const scrollToForm = () => {
  const element = document.getElementById('form')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export const store = reactive({
  selectedCar: cars[0]
})
