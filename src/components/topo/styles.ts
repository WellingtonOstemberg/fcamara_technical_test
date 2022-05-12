import styled from 'styled-components'

interface ButtonProps {
  active?: boolean
}

export const TopoWrapper = styled.div<ButtonProps>`
  display: flex;
  width: 100%;
  height: 41px;
  img {
    height: 38px;
  }
`
