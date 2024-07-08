const axios = require('axios')

axios.interceptors.response.use((res) => {
  return res.data
})

async function getRepoList() {
  return axios.get('http://api.github.com/orgs/FEcourseZone/repos')
}

async function getTagList(repo) {
  return axios.get(`http://api.github.com/orgs/FEcourseZone/${repo}/tags`)
}

module.exports = {
  getRepoList,
  getTagList
}
