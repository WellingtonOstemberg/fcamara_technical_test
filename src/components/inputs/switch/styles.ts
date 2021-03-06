import styled from 'styled-components'

export const SwitchContainer = styled.div`
  & > span {
    margin-left: 5px;
  }
`

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 43px;
  height: 24px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .slider:before {
    position: absolute;
    content: '';
    height: 17.5px;
    width: 17.5px;
    left: 4px;
    bottom: 3.25px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + .slider {
    background-color: ${(props) => props.theme.colors.orange};
  }
  input:focus + .slider {
    box-shadow: 0 0 1px ${(props) => props.theme.colors.orange};
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(17.5px);
    -ms-transform: translateX(17.5px);
    transform: translateX(17.5px);
  }
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
`
