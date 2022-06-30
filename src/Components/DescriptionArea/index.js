import React from 'react';
import styled from 'styled-components'
import BannerPage from '../../Img/first-page-banner.png'

const ImgBanner = styled.img`
    width: 100%;
    
`

const TextBanner = styled.h1`
    position: absolute;
    color: white;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const BannerDiv = styled.div`
    display: flex;
    align-items: center;
    
`

export default function DescriptionArea () {
    return(
        <>
            <BannerDiv>
                <TextBanner>Bem vindo(a) ao Portal da Câmara Interbancária de Pagamentos(CIP)
                    <p>Nesta seção você pode consultar, criar e alterar dados de Clientes e Contas Correntes.</p></TextBanner>
                <ImgBanner src= {BannerPage} alt="Banner"/>
            </BannerDiv>
        </>
    )
}