import styled from 'styled-components'

interface ButtonProps {
  height?: string
  width?: string
  backgroundColor?: string
  color?: string
  borderRadius?: string
  fontSize?: string | number
}

export const Button = styled.button<ButtonProps>`
  height: ${(props) => props.height || '40px'};
  width: ${(props) => props.width || '170px'};
  font-size: ${(props) => props.fontSize || '17px'};
  border: none;
  border-radius: ${(props) => props.borderRadius || '6px'};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.orange};
  color: ${(props) => props.color || props.theme.colors.white};
`
