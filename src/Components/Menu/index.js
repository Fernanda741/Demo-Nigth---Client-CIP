import React from 'react'
import styled from 'styled-components'
import CIPLogo from '../../Img/cip-logo.png'
import './style.css'

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
                            <a href="/register">Cadastrar</a>
                            <a href="/list-clients">Consultar</a>
                        </div>                        
                    </div>
                    <div>
                       <a href="/bill-corrent"><button className="dropbtn2">CONTA CORRENTE</button></a> 
                    </div> 
                </div>
            </NavbarMenu>
        </CentralContainer>
            

        </>
    )
}