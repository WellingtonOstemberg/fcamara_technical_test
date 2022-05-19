import styled from 'styled-components'

interface ButtonProps {
  kind?: string
}

export const Button = styled.button<ButtonProps>`
  width: 48px;
  height: 48px;
  padding: 16px;
  color: ${(props) => {
    switch (props.kind) {
      case 'delete':
        return props.theme.colors.red

      default:
        return props.theme.colors.black60
    }
  }};
  background: none;
  border: 1px solid ${(props) => props.theme.colors.bullet};
  border-radius: 8px;
  cursor: pointer;
`
