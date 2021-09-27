import React, { createContext, useReducer } from 'react'

export type InitialStateType = {
  cart: {
    isOpen: boolean
    itemsCount: number
    currency: string
    products: string[]
  }
}

export const initialState: InitialStateType = {
  cart: {
    isOpen: false,
    itemsCount: 2,
    currency: 'usd',
    products: [],
  },
}

export const AppContext = createContext<
  [InitialStateType, React.Dispatch<any>]
>([initialState, () => null])

export const setCartOpen = (payload: boolean) => {
  return {
    type: 'toggle_cart',
    payload,
  }
}
export const addToCart = (payload: string) => {
  return {
    type: 'add_to_cart' as const,
    payload,
  }
}

export const appReducer = (
  state: InitialStateType,
  action: { type: string; payload: any }
): InitialStateType => {
  switch (action.type) {
    case 'add_to_cart':
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [...state.cart.products, action.payload],
        },
      }
    case 'toggle_cart':
      return {
        ...state,
        cart: {
          ...state.cart,
          isOpen: action.payload as boolean,
        },
      }
    default:
      return state
  }
}

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}
