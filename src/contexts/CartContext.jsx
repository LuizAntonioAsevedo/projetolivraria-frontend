import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedCart = localStorage.getItem('livraria_cart')
    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('livraria_cart', JSON.stringify(items))
  }, [items])

  const addBook = (book) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === book.id)
      if (existing) {
        return current.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...current, { ...book, quantity: 1 }]
    })
  }

  const updateQuantity = (bookId, quantity) => {
    setItems((current) =>
      current
        .map((item) =>
          item.id === bookId ? { ...item, quantity: Math.max(1, quantity) } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeBook = (bookId) => {
    setItems((current) => current.filter((item) => item.id !== bookId))
  }

  const clearCart = () => {
    setItems([])
  }

  const itemsCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  const total = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.preco * item.quantity,
        0,
      ),
    [items],
  )

  return (
    <CartContext.Provider
      value={{ items, addBook, updateQuantity, removeBook, clearCart, itemsCount, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider')
  }
  return context
}
