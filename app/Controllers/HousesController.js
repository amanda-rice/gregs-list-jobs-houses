import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesServices.js"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}


export default class HousesController {
  constructor() {
    ProxyState.on('houses', _draw)
    ProxyState.on('houses', () => { console.log('new house') })
    _draw()
  }
  createHouse(event) {
    event.preventDefault()
    let form = event.target
    let rawHouse = {
      price: form.price.value,
      street: form.street.value,
      squareFootage: form.squareFootage.value,
      bedrooms: form.bedrooms.value,
      baths: form.baths.value,
      year: form.year.value,
      img: form.img.value
    }
    housesService.createHouse(rawHouse)
    form.reset()
  }
}
