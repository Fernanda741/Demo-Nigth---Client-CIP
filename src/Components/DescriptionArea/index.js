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
`

const BannerDiv = styled.div`
    display: flex;
    align-items: center;
    
`

export default function DescriptionArea () {
    return(
        <>
            <BannerDiv>
                <TextBanner>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac libero commodo, pretium eros at, sagittis urna. Pellentesque blandit odio vitae odio dignissim, vel mollis lorem sollicitudin. Maecenas dolor odio, auctor id scelerisque vel, sollicitudin eget massa. Duis non sapien enim.</TextBanner>
                <ImgBanner src= {BannerPage} alt="Banner"/>
            </BannerDiv>
        </>
    )
}