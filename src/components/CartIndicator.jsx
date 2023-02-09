import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

// useSelector reads a value from the Redux Store (READ MODE)
// useDispatch dispatches actions to the Redux Store (""WRITE MODE"")

// WE HAVE TO FOLLOW THE REACT HOOKS RULES:
// 1) Use them just into React Functional Components
// 2) Use them at the top level of your component, no loops, no nesting, no
// functions, no if statements

const CartIndicator = () => {
  const navigate = useNavigate()
  const cartLength = useSelector((state) => state.cart.content.length) // 0
  // useSelector RETURNS A VALUE from the Redux Store

  console.log('CARTLENGTH', cartLength)

  return (
    <div className="ml-auto mt-3 mb-4">
      <Button color="primary" onClick={() => navigate('/cart')}>
        <FaShoppingCart />
        <span className="ml-2">{cartLength}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
