import { create } from 'zustand'

interface GlobalState {
  selectedLanguageCode: string
}

export interface GlobalStore extends GlobalState {
  setSelectedLanguageCode: (code: string) => void
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  selectedLanguageCode: navigator.language.split('-')[0],
}

const useGlobalStore = create<GlobalStore>((set) => ({
  ...initialState,
  setSelectedLanguageCode: (code) => {
    set(() => ({ selectedLanguageCode: code }))
  },
}))

export default useGlobalStore
