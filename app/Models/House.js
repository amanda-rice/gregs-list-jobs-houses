export default class House {
  constructor({ price, street, squareFootage, bedrooms, baths, year, img }) {
    this.price = price
    this.street = street
    this.squareFootage = squareFootage
    this.bedrooms = bedrooms
    this.baths = baths
    this.year = year
    this.img = img
  }

  get Template() {
    return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow">
          <img src="${this.img}" class="w-100" alt="${this.street} house image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.bedrooms} bedroom ${this.baths} bath ${this.squareFootage} sq/ft</b></p>
              </div>
              <p>${this.street}</p>
              <p><em>$${this.price}</em></p>
          </div>
      </div>
    </div>
  `
  }
}