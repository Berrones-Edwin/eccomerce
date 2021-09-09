import { BASE_URL_API } from '../enviroment/env'

export const signIn = ({
  username,
  password
}: {
  username: string
  password: string
}) => {
  return fetch(`${BASE_URL_API}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'mor_2314',
      password: '83r5^_'
    })
  })
    .then((res) => {
      if (res.ok) return res.json()
    })
    .then((res) => res)
}
