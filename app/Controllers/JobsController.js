import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsServices.js"

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(job => {
    template += job.Template
  })
  document.getElementById('jobs').innerHTML = template
}


export default class JobsController {
  constructor() {
    ProxyState.on('jobs', _draw)
    ProxyState.on('jobs', () => { console.log('new job') })
    _draw()
  }
  createJob(event) {
    event.preventDefault()
    let form = event.target
    let rawJob = {
      salary: form.salary.value,
      title: form.title.value,
      duties: form.duties.value,
      education: form.education.value,
      company: form.company.value
    }
    jobsService.createJob(rawJob)
    form.reset()
  }
}
