import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { get } from 'lodash-es'

const envBaseURL = 'asdasd'

enum methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

interface IRequestConfig {
  baseURL?: string
  url: string
  data?: any
  headers?: any
  showLoading?: boolean
  showErrorMessage?: boolean
  errorMessage?: string
  ignoreStatusCode?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class http {
  static axiosInstance: AxiosInstance

  static setInterceptors () {
    this.axiosInstance.interceptors.request.use(config => {
      config.headers['Content-Type'] = 'application/json;charset=UTF-8'
      return config
    }, async error => {
      return Promise.reject(error)
    })

    this.axiosInstance.interceptors.response.use(response => {
      return response
    }, async error => {
      return Promise.reject(error)
    })
  }

  /**
   * 单例: 创建axios实例
   * @returns axios实例
   */
  static getAxiosInstance (): AxiosInstance {
    if (!this.axiosInstance) {
      this.axiosInstance = axios.create({
        baseURL: envBaseURL,
        timeout: 10000,
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      })
      // 设置拦截器
      this.setInterceptors()
    }
    return this.axiosInstance
  }

  static async get<T = any> (params: IRequestConfig): Promise<T> {
    return this._request(methods.GET, params)
  }

  static async post<T = any> (params: IRequestConfig): Promise<T> {
    return this._request(methods.POST, params)
  }

  static async put<T = any> (params: IRequestConfig): Promise<T> {
    return this._request(methods.PUT, params)
  }

  static async delete<T = any> (params: IRequestConfig): Promise<T> {
    return this._request(methods.DELETE, params)
  }

  static async patch<T = any> (params: IRequestConfig): Promise<T> {
    return this._request(methods.PATCH, params)
  }

  static async _request<T = any> (method: methods, params: IRequestConfig): Promise<T> {
    const baseURL = params.baseURL ? params.baseURL : envBaseURL
    if (!params.url) throw new Error('url can not be empty')

    const config: AxiosRequestConfig = {
      baseURL,
      method,
      url: params.url
    }
    if (method === methods.GET) {
      params.data && (config.params = params.data)
    } else {
      params.data && (config.data = params.data)
    }
    params.headers && (config.headers = params.headers)

    const instance = this.getAxiosInstance()

    return instance(config).then(response => {
      return get(response, 'data.attributes', '')
    }).catch(async error => {
      return Promise.reject(error)
    })
  }
}

export default http
