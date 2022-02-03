import { useEffect } from 'react'
import { analytics, logEvent } from '../utils/firebase'

const useAnalytics = (tagName) => {
  useEffect(() => {
    logEvent(analytics, tagName)
  }, [])
}
export default useAnalytics
