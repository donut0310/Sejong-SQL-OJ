import { CLOSE_MODAL } from './types'

export const closeModal = () => {
  console.log('closeModal')
  return {
    type: CLOSE_MODAL,
  }
}
