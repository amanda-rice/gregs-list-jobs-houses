export default class Job {
  constructor({ salary, title, duties, education, company }) {
    this.salary = salary
    this.title = title
    this.duties = duties
    this.education = education
    this.company = company
  }

  get Template() {
    return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.title}</b></p>
              </div>
              <p>Job Duties:</p>
              <p>${this.duties}</p>
              <p>Preferred Education: ${this.education}</p>
              <p>${this.company}</p>
              <p><em>$${this.salary}/year</em></p>
          </div>
      </div>
    </div>
  `
  }
}