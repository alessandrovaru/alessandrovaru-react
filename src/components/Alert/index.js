import React from 'react'
import styled from 'styled-components'
import './index.css'


const MandalaPoemButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  color: black;
  cursor: pointer;
  font-family: 'Questrial';
  transition: all .3s ease-in-out;
  margin:30px 10px 0 10px;
  &:hover {
    background-color: white;
    color: black
  }
`

const Alert = (props) => {
  return (
    <div className='alert-container'>
      <h2>Atención</h2>
      <p>Al aceptar, serás redirigido a un link aleatorio relacionado al trabajo de Carl Gustav Jung o una canción aleatoria. - By accepting, you will be redirected to a random link related to the work of Carl Gustav Jung or a random song.</p>
      <p className='small'>Puedes volver luego y hacer click otra vez para obtener otra experiencia. - You can come back later and click again to get another experience.</p>
      <MandalaPoemButton onClick={()=> props.setAcceptedLink(true)}>Aceptar</MandalaPoemButton>
      <MandalaPoemButton onClick={()=> props.setMandalaClicked(false)}>Cancelar</MandalaPoemButton>
    </div>
  ) 
}

export { Alert }