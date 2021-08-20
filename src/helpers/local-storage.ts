export function saveData<T>({ key, data }: { key: string; data: T }): void {
  localStorage.setItem(key, JSON.stringify(data))
}
export function getData<T>({ key }: { key: string }): T {
  const data: any = JSON.parse(localStorage.getItem(key) as any)
  return data
}
export function clearData(): void {
  localStorage.clear()
}
