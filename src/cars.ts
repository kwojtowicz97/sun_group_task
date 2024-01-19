export type Car = {
  name: string
  img: string
  description: string
  monthly: string
  gross: string
}

export const cars: Car[] = [
  {
    name: 'Cupra Formentor',
    img: 'cars/fermentor.png',
    description: 'Maksymalna prędkość: 204 KM/H Moc silnika: 150 KM',
    gross: '127 800',
    monthly: '1439'
  },
  {
    name: 'Cupra Leon',
    img: 'cars/leon.png',
    description: 'Maksymalna prędkość: 245 KM/H Moc silnika: 300 KM',
    gross: '152 400',
    monthly: '1553'
  },
  {
    name: 'Cupra Leon Sportstourer',
    img: 'cars/leon_st.png',
    description: 'Maksymalna prędkość: 250 KM/H Moc silnika: 310 KM',
    gross: '156 200',
    monthly: '1601'
  },
  {
    name: 'Cupra Ateca',
    img: 'cars/ateca.png',
    description: 'Maksymalna prędkość: 247 KM/H Moc silnika: 300 KM',
    gross: '220 700',
    monthly: '2334'
  },
  {
    name: 'Nowa Cupra Born',
    img: 'cars/cupra.png',
    description: 'Akumulator 58 kWh moc do 204 KM²',
    gross: `179 600`,
    monthly: '1943'
  }
]
