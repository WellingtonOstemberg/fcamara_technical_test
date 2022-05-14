import styled from 'styled-components'

interface ButtonProps {
  active?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 16px;
  width: 214px;
  height: 75px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.gray700 : '#fff'};
  color: ${(props) => (props.active ? '#fff' : props.theme.colors.gray700)};
  border-radius: 6px;
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray700};
    color: #fff;
  }
  & > div {
    flex: 1;
    display: flex;
    justify-content: start;
    align-items: center;
    span {
      text-align: start;
    }
  }
  .btn-link-text {
    margin-left: 10px;
  }
  cursor: pointer;
`
