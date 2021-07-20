export default class House {
  constructor({ levels, street, price, bedrooms, bathrooms, year, imgUrl, id }) {
    this.levels = levels
    this.bathrooms = bathrooms
    this.price = price
    this.bedrooms = bedrooms
    this.year = year
    this.imgUrl = imgUrl
    this.id = id
  }

  get Template() {
    return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-dark p-2 text-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="house image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.bedrooms} bedroom ${this.bathrooms} bath ${this.levels}-story house</b></p>
              </div>
              <p>Built in ${this.year}</p>
              <p><em>$${this.price}</em></p>
              <button class="btn btn-info btn-block shadow-sm" onclick="app.housesController.bidHouse('${this.id}')"> bid </button>
              <button class="btn btn-warning btn-block shadow-sm" onclick="app.housesController.deleteHouse('${this.id}')"> delete </button>
          </div>
      </div>
    </div>
  `
  }
}