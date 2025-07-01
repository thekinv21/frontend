import { useNavigate } from 'react-router-dom'

export const useRoute = () => {
  const route = useNavigate()

  return {
    route
  }
}
