import {
  AppContext,
  InitialStateType,
  addToCart,
  setCartOpen,
} from '../AppContext'
import { useCallback, useContext, useMemo, useState } from 'react'

type UseCartReturnType = [InitialStateType['cart'], (isOpen: boolean) => void]

export const useCart = (): [
  InitialStateType['cart'],
  {
    setIsOpen: (isOpen: boolean) => void
    add: (id: string) => void
  }
] => {
  const [{ cart }, dispatch] = useContext(AppContext)

  const setIsOpen = (isOpen: boolean) => {
    dispatch(setCartOpen(isOpen))
  }

  const add = useCallback((id: string) => {
    dispatch(addToCart(id))
  }, [])

  const itemsCount = useMemo(() => cart.products.length, [cart.products])

  return [
    {
      ...cart,
      itemsCount,
    },
    {
      setIsOpen,
      add,
    },
  ]
}
