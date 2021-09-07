import { BASE_URL_API } from '../enviroment/env'

export const getProductsByCategory = ({ category }: { category: string }) => {
  return fetch(`${BASE_URL_API}products/category/${category}`)
    .then((res) => {
      if (res.ok) return res.json()
    })
    .then((res) => res)
}
