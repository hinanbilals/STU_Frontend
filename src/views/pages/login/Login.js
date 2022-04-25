import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useHistory } from 'react-router-dom'
 




const Login = () => {
  const [email, setEmail] =  useState('');
  const [password, setPassword] = useState('');
  const history=useHistory();
useEffect(()=>{
if(localStorage.getItem('user-info'))
{
  history.push("/users");
}
},[history]);
  const SetLogin=()=>
{
  let items={email,password}
  console.log(items)
  
  // const rowsUrl = 'http://jsonplaceholder.typicode.com/users';
  //       fetch(rowsUrl).then(resp => resp.json())
  //     .then((resp) => {setApiResult(resp)})
  const result=[{
    id:1,
    name:"Rizwan Zafar",
    email:"rizwan@gmail.com"
  }];
   localStorage.setItem('user-info',JSON.stringify(result));
   history.push('./users');
      
  
}

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" onChange={(e)=>{setEmail(e.target.value)}} autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton style={{backgroundColor:'#464EB8'}}  onClick={SetLogin} className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white  py-5" style={{ width: '44%' , backgroundColor:'#464EB8'}}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary"  className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
