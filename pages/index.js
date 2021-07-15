import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props){
  console.log(props)
  return(
        <Box >
          <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px'}} />
          <hr />

          <p>
            <a className="boxLink" href={`ttps://github.com/${props.githubUser}`}>
              @{props.githubUser}
            </a>
          </p>
          <hr />

          <AlurakutProfileSidebarMenuDefault />
        </Box>
  )
}

export default function Home() {
  React.useState()
  const githubUser = 'gilsongama'
  const comunidades = ['Alurakut']
  const favoritePeople = [
    'andremrezende',
   'omariosouto', 
   'juunegreiros', 
   'peas', 
   'rafaballerini',
   'felipefialho'
  ]

  return(
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>  
        <div className="welcomeArea" style={{gridArea: 'welcomeArea' }}>
          <Box >
            <h1 className="title">
              Bem Vindo
            </h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
               console.log(e)
               
               comunidades.push('Alura Stars')
               console.log(comunidades)
            }}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade" 
                  type="text"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa" 
                />
              </div>

              <button>
                Criar comunidade
              </button>
              
            </form>
          </Box>
        </div>  
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://placehold.it/500x500`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li> 
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({favoritePeople.length})
            </h2>
            <ul>
              {favoritePeople.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li> 
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>  
      </MainGrid>
    </>
  ) 
}
