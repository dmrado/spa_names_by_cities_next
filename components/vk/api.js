import { SERVICE_KEY } from './config'
import fetch from 'isomorphic-fetch'

if(!SERVICE_KEY) {
  throw new Error("Need to specify SERVICE_KEY")
}

const API_URL = 'http://localhost:3000/vk-api/'

const makeRequest = params => {
  const { success, error, method, fields } = params
  const standardFields = {
    access_token: SERVICE_KEY,
    v: '5.95'
  }
  let resultFields = { ...fields, ...standardFields}
  const queryString = Object.keys(resultFields).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(resultFields[key])
  }).join('&');
  const dataURL = API_URL + method + '?' + queryString

  fetch(dataURL)
    .then(response =>{
      if (response.ok) {
        response.json().then(data => {
          success(data.response)
        });
      }else{
        console.log('response error: ', response)
        error("VK API Response Error")
      }
    })
    .catch(err => console.log('catch error: ', err));
}

const getUsers = params => {
  const { success, error, user_ids } = params
  const method = 'users.get'
  const fields = {
    user_ids
  }

  makeRequest({
    success,
    error,
    method,
    fields
  })
}

const getGroupMembers = params => {
  const { success, error, group_id } = params
  const method = 'groups.getMembers'
  const fields = {
    group_id,
    count: 10
  }

  makeRequest({
    success,
    error,
    method,
    fields
  })
}

export {
  getUsers,
  getGroupMembers
}