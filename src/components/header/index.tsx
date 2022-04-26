import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../../redux/actions/test';
import { Dispatch } from 'redux';
import { Container } from './styled'

export const Header: React.FC = () => {
  
  const dispatch = useDispatch<Dispatch<any>>()
  const [user, setuser] = useState('')

  const handleChange = (value: string) => {
    setuser(value)
  };

  return (
   <Container>
     <input onChange={ ({target}) => handleChange(target.value)}/>
     <button
       onClick={()=> dispatch(action.fetchPokemon(user))}
     >
       ENTER
     </button>
   </Container>
  )
};
