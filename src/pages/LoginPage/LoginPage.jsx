import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import { Container } from 'react-bootstrap';
import LogoImage from '../../assets/Logo.png'
import './LoginStyle.css'
import {useState,useEffect} from 'react'
import {useGlobalContext} from '../../utils/ContextProvider'
import LoginSection from '../../components/Login/LoginSection'
import SignupSection from '../../components/Signup/SignupSection'
import { useParams } from 'react-router-dom';

function LoginPage() {
 
  const {setState,renderSection, setRenderSection} = useGlobalContext()


  
  return (
      <Container fluid className='mainbody'>
      
    </Container>
  )
}

export default LoginPage