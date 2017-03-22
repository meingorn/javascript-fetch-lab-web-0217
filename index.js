const userName = 'meingorn'
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`



function getIssues() {
  fetch(`${baseApi}repos/${fork}/issues`, {
    headers: {
      Authorization:`token ${getToken()}`
    }
  }).then(res => res.json())
  .then(showIssues)
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  // debugger;
  fetch(`${baseApi}repos/${fork}/issues`, {
    body: issueBody,
    title: issueTitle,

    method: 'post',
    headers: {
      Authorization:`token ${getToken()}`
    }
}).then(getIssues)}


function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
