import styled from 'styled-components'

export const FormUser = styled.form`
  background-color: ${(props) => props.theme.colors.white};
  padding: 32px 0px;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 20px;
  & > div {
    flex: 1;
    padding: 0 24px;
  }
`
