import React from 'react'
import styled from 'styled-components'

const Menu = styled.div`
    width: 100px;
    height: 100px;
    background-color: pink;
`

const MainDiv = styled.section`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function ComponentMenu () {
    return (
        <>
          <MainDiv>
            <div>

            </div>
            <Menu>
                <h4>Cadastrar</h4>
                <ul>
                    <li>
                        <p>Adicionar Cliente</p>
                    </li>
                    <li>
                        <p>Consultar Cliente</p>
                    </li>
                </ul>
            </Menu>
          </MainDiv>
        </>
    )
}