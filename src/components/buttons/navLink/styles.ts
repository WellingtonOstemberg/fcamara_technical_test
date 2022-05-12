import styled from 'styled-components'

interface ButtonProps {
  active?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  gap: 37px;
  width: 198px;
  height: 75px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.gray700 : '#fff'};
  color: ${(props) => (props.active ? '#fff' : props.theme.colors.gray700)};
  border-radius: 6px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray700};
    color: #fff;
  }
  .btn-link-text {
    margin-left: 10px;
  }
`
