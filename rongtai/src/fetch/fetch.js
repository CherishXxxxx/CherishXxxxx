import axios from 'axios';
import qs from 'qs';

// axios 配置
axios.defaults.timeout = 15000;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = '';

// POST传参序列化
axios.interceptors.request.use(
  config => {
    let userInfo = {};
    if (sessionStorage.getItem('userInfo')) {
      userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    }
    if (userInfo && userInfo.accessToken) {
      config.headers['accessToken'] = userInfo.accessToken;
    }

    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete'
    ) {
      // 序列化
      config.data = qs.stringify(config.data);
    }
    // console.log(config)
    return config;
  },
  error => {
    console.log(error)
    return Promise.reject(error);
  }
);

// 返回状态判断
axios.interceptors.response.use(
  res => {
    // console.log(res)
    // if (res.data.code != '1' || res.status != 200) {
    //   return Promise.reject(res);
    // }
    if ( res.status != 200) {
      return Promise.reject(res);
    }
    return res;
  },
  error => {
    console.log(error)
    return Promise.reject(error);
  }
);

// 数据获取封装
export default function fetch(
  url,
  method,
  comParams,
  selfParams
) {
  if (process.env.NODE_ENV == 'development') {
    url = '/apis/action/test';
  } else {
    url = '/action/test';
  }
  let params = comParams;
  if (params && selfParams) {
    params = Object.assign({}, comParams, selfParams);
  }
  Object.assign(params, { to_json: '1' });
  if (method == 'get') {
    params = { params: params };
  }
  return new Promise((resolve, reject) => {
    // console.group(params)
    axios[method](url, params)
      .then(
        response => {
          // console.log(response)
          resolve(response.data);
        },
        err => {
          console.log(err)
          reject(err);
        }
      )
      .catch(error => {
        console.log('error: ' + error);
      });
  });
}
