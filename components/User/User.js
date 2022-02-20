import { useReducer, useContext, createContext } from 'react'

const UserStateContext = createContext()
const UserDispatchContext = createContext()

const reducer = (state, action) => {
   switch (action.type) {
      case 'GET_USER':
         return action.payload;
      case 'UPDATE_USER':
         return state.map((user) => user._id === action.payload._id ? action.payload : user);
      default:
         return state;
   }
}

export const UserProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, 'GET_USER')

   return (
      <UserDispatchContext.Provider value={dispatch}>
         <UserStateContext.Provider value={state}>
            {children}
         </UserStateContext.Provider>
      </UserDispatchContext.Provider>
   )
}

export const useUser = () => useContext(UserStateContext)
export const useDispatchUser = () => useContext(UserDispatchContext)