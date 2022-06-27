import React from 'react'
import { useNavigate } from 'react-router-dom'
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

const DropButton = styled.button `
    border: none;
    outline: none;
`




export default function ComponentMenu () {
    const navigate = useNavigate ();

    const handleSubmit = async (e) => {
        e.preventDefault ();
        navigate("/")
    }

    return (
        <>
        <CentralContainer>
            <NavbarMenu>
                <ImgLogo src= {CIPLogo} alt="LogoCip" />
                <ListMenu>
                    <ClientBar>
                        <DropButton>Cliente</DropButton>
                        <div>
                            <a href>Cadastrar</a>
                            <li>Consultar</li>
                        </div>
                    </ClientBar>
                    <div>
                        <button>Conta Corrente</button>
                    </div>
                </ListMenu>
            </NavbarMenu>
        </CentralContainer>
            

        </>
    )
}