import styled from 'styled-components'

export const SearchInputWrapper = styled.div`
  height: 50px;
  width: 282px;
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.bullet};
`

export const Input = styled.input`
  height: 48px;
  width: 280px;
  padding: 24px;
  font-size: 16px;
  outline: none;
  border: none;
`
export const SearchIconWrapper = styled.div`
  cursor: pointer;
  height: 32px;
  width: 32px;
  margin-left: -45px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.orange};
  border-radius: 4px;
`
