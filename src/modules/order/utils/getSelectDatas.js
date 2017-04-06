import axios from 'axios'
function getTransportList() {
  return  axios.get('http://rap.taobao.org/mockjs/16544/list-transport?')
}

function getBalanceList() {
  return axios.get('http://rap.taobao.org/mockjs/16544/list-balance')
}

function getAllList() {
  return axios.all([getTransportList(), getBalanceList()])
  .then( arr => {
    let data = {
      balans: arr[0].data,
      trans: arr[1].data
    }
    return data
  });
}


export default getAllList
