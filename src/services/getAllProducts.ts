import { Product } from '../interfaces/Product'

// https://dribbble.com/shots/15848860-OYOTEE-Plant-Shop-Website/attachments/7669280?mode=media

// type shortResult = 'desc' | 'asc'
// interface getAllProductInterface {
//   limit?: number
//   short?: shortResult
// }
export const getAllProducts = ({
  url = ''
}: {
  url: string
}): Promise<Product[]> => {
  return fetch(url)
    .then((res) => {
      if (res.ok) return res.json()
      Promise.reject(new Error('Error! The request has failed!'))
    })
    .then((res) => res)
}
