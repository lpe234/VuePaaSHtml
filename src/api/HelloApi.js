/**
 * Created by lpe234 on 2017/6/21.
 */

import $ from '../api'

class HelloApi {
  login () {
    return $.get('/tapi/login.json')
  }
  error () {
    return $.get('/tapi/error.json')
  }
}

export default HelloApi
