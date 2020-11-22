// https://styled-components.com/
import styled, { css } from 'styled-components';

export default styled.a`
  background: transparent;
  border-radius: 20px;
  border: 2.5px solid white;
  color: white;
  margin: 5px 5px;
  padding: 7px 13px;

  &:hover{
    color: lightgrey;
    border-color: lightgrey;
  }

  ${props => props.primary && css`
    background: #001529;
    color: white;
    &:hover{
      color: lightgrey;
      border-color: lightgrey;
    }
  `}
`;