import styled from 'styled-components'

export const Header = styled.header`
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px 24px;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.colors.white};
`
