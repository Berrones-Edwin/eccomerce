export function saveData<T>({ key, data }: { key: string; data: T }): void {
  localStorage.setItem(key, JSON.stringify(data))
}
export function getData({ key }: { key: string }): string | null {
  return localStorage.getItem(key)
}
export function clearData(): void {
  localStorage.clear()
}
