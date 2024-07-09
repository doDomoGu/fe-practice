import axios from 'axios'

axios.interceptors.response.use((res) => {
  return res.data
})

async function getRepoList() {
  return axios.get('http://api.github.com/orgs/FEcourseZone/repos')
}

async function getTagList(repo) {
  return axios.get(`http://api.github.com/repos/FEcourseZone/${repo}/tags`)
}

export { getRepoList, getTagList }
