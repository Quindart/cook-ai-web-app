import type { AxiosResponse } from 'axios'
import axiosConfig from '../api'

abstract class BaseEntityApi<T> {
  constructor(public baseUrl: string) {}
  async getAll(params?: Record<string, string>): Promise<AxiosResponse<Array<T>>> {
    return axiosConfig.get(this.baseUrl, { params })
  }
  async getById(id: string): Promise<AxiosResponse<T>> {
    return axiosConfig.get(`${this.baseUrl}/${id}`)
  }
  async create(payload: Partial<T>, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
    return axiosConfig.post(this.baseUrl, payload, { headers })
  }
  async update(id: string, payload: Partial<T>): Promise<AxiosResponse<T>> {
    return axiosConfig.put(`${this.baseUrl}/${id}`, payload)
  }
  async delete(id: string): Promise<AxiosResponse<void>> {
    return axiosConfig.delete(`${this.baseUrl}/${id}`)
  }
}
export default BaseEntityApi
