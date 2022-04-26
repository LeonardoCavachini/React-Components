import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { Wrapper, Container } from './styled'

export const Profile:React.FC = () => {

  const { name, weight, sprites, types } = useSelector((state: RootState) => {
    return state.pokemon.pokemon;
  });
    
  return(
    <Wrapper>
    {name?
    <>
      <img src={sprites.other['official-artwork'].front_default} alt="pokemon" />
      <div>
      <Container>
        <h3>Nome:</h3>
        <span>{name}</span>
      </Container>
      <Container>
        <h3>weight: </h3>
        <span>{weight}</span>
      </Container>
      <Container>
        <h3>types: </h3>
        <span>{types[0].type.name}</span>
      </Container>
      </div>
      
    </>:
    <h1>Nenhum Pokemon pesquisado ainda..</h1>}
    </Wrapper>
  );
};
