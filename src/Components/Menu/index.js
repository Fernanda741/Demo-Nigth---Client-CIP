import React from 'react'
import styled from 'styled-components'
import CIPLogo from '../../Img/cip-logo.png'

const CentralContainer = styled.div`
    width: 100%;
`

const NavbarMenu = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ListMenu = styled.div`
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
`

const ClientBar = styled.div`
    
`

const ImgLogo = styled.img `
    width: 150px;
`




export default function ComponentMenu () {
    return (
        <>
        <CentralContainer>
            <NavbarMenu>
                <ImgLogo src= {CIPLogo} alt="LogoCip" />
                <ListMenu>
                    <ClientBar>
                        <p>Cliente</p>
                        <ul>
                            <li>Cadastrar</li>
                            <li>Consultar</li>
                        </ul>
                    </ClientBar>
                    <div>
                        <p>Conta Corrente</p>
                    </div>
                </ListMenu>
            </NavbarMenu>
        </CentralContainer>
            

        </>
    )
}