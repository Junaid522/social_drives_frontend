import http from '@/utils/http-common'

export default {
  login(username, password) {
    return http.post('/login/', {'email': username, 'password': password})
      .then(response => {
        return response.data
      })
  },
  registration(first_name,last_name,email, password) {
    return http.post('/registration/', JSON.stringify({'first_name':first_name,'last_name':last_name,'email': email, 'password': password}))
      .then(response => {
        return response.data
      })
  },
  user_list() {
    return http.get('/user-list/')
      .then(response => {
        return response.data
      })
  },
  useravailibility(email) {
    return http.post('/user-availibility/', JSON.stringify({'email': email}))
      .then(response => {
        return response.data
      })
  },
  logged_in_user(){
  return http.get('/logged_in_user/')
    .then(response => {
      return response.data
    })
  },
  get_google_drive_status(params){
    return http.get('/googledrive/'+params+'/')
      .then(response => {
        return response.data
      })
  },
  drive_data(params){
    return http.get('/drive_data/'+params+'/')
      .then(response => {
        return response.data
      })
  },
  syncronization(params){
    return http.get('/syncronization/'+params+'/')
      .then(response => {
        return response.data
      })
  },
  disconnect_api(params){
    return http.get('/disconnect/'+params+'/')
      .then(response => {
        return response.data
      })
  },
  connect_google_drive(){
    return http.get('/connect_google_drive/')
      .then(response => {
        return response.data
      })
  },
  connect_onedrive(){
    return http.get('/onedrive_home/')
      .then(response => {
        return response.data
      })
  },
  save_token_onedrive(params){
    return http.get('/save_token/'+params+'/')
      .then(response => {
        return response.data
      })
  },
  connect_dropbox(){
    return http.get('/dropbox_home/')
      .then(response => {
        return response.data
      })
  },
  connect_box(){
  return http.get('/box_home/')
    .then(response => {
      return response.data
    })
  },
  drive_data_box(params){
    return http.get('/box_return_url/'+params+'/')
      .then(response => {
        return response.data
      })
  },
  save_dropbox_data(){
    return http.get('/save_dropbox_data/')
      .then(response => {
        return response.data
      })
  },
  save_box_data(){
    return http.get('/save_box_data/')
      .then(response => {
        return response.data
      })
  },
  drive_data_dropbox(params){
    return http.get('/update_drpbox_credentials/'+params)
      .then(response => {
        return response.data
      })
  },
}
