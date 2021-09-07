import { BASE_URL_API } from '../enviroment/env'
import { Product } from '../interfaces/Product'

interface getSingleProductInterface {
  id: number
}
export const getSingleProduct = ({
  id
}: getSingleProductInterface): Promise<Product> => {
  return fetch(`${BASE_URL_API}products/${id}`)
    .then((res) => {
      if (res.ok) return res.json()
      Promise.reject(new Error('Error! The request has failed!'))
    })
    .then((res) => res)
}
