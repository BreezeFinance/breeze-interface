import { useState, useRef, useCallback } from 'react'

function useSyncState<T> (initialState: T | (() => T)) {
  const value = typeof initialState === 'function' ? initialState() : initialState

  const [asyncState, setAsyncState] = useState(value)

  const syncState = useRef(value)

  const setState = useCallback((changedVal) => {
    const val = typeof changedVal === 'function' ? changedVal(syncState.current) : changedVal
    syncState.current = val
    setAsyncState(val)
  }, [])

  return [asyncState, setState, syncState]
}

export default useSyncState
