import React from 'react'
import styled from 'styled-components'
import CIPLogo from '../../Img/cip-logo.png'
import './style.css'
import { Link } from "react-router-dom";



const CentralContainer = styled.div`
    width: 100%;
`

const NavbarMenu = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    > div{
        display: flex;
        margin-right: 150px;
    }
`

const ImgLogo = styled.img `
    width: 180px;
`


export default function ComponentMenu () {
    

    return (
        <>
        <CentralContainer>
            <NavbarMenu>
                <ImgLogo src= {CIPLogo} alt="LogoCip" />
                <div>
                    <div className="dropdown">
                        <button className="dropbtn">CLIENTE</button>                        
                        <div className="dropdown-content">                            
                            <Link  to="/register"> Cadastrar </Link>                           
                            <Link  to="/list-clients"> Consultar </Link>
                        </div>                        
                    </div>
                    <div>                     
                       <Link  to="/bill-corrent"><button className="dropbtn2">CONTA CORRENTE</button></Link>
                    </div> 
                </div>
            </NavbarMenu>
        </CentralContainer>
            

        </>
    )
}