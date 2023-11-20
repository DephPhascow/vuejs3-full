import { defineStore } from 'pinia'

export const useSession = defineStore('session', () => {
  const isActive = async () => {
    return true;
  }

  return { isActive }
})
