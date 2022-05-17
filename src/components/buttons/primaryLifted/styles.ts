import styled from 'styled-components'

interface ButtonProps {
  height?: string
  width?: string
  backgroundColor?: string
  color?: string
  borderRadius?: string
  fontSize?: string | number
  border?: string
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  height: ${(props) => props.height || '40px'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 18px;
  width: ${(props) => props.width || '170px'};
  font-size: ${(props) => props.fontSize || '16px'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '6px'};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.orange};
  color: ${(props) => props.color || props.theme.colors.white};
`
