import React from 'react';
import MainGrid from '../src/components/MainGrid/MainGrid';
import Box from '../src/components/Box/index';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from'../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations/index'

//const Title = styled.h1`
// font-size: 50px;
// color: ${({ theme }) => theme.colors.primary};
//`
function ProfileSidebar(propriedades){
  return(
      <Box as="aside">
        <img src= {`https://github.com/${propriedades.githubUser}.png`} style= {{borderRadius: '8px'}} />
        <hr/>
        <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
        @{propriedades.githubUser}
        </a>
        </p>
        <hr/>
        <AlurakutProfileSidebarMenuDefault/>
      </Box>
  );
}

export default function Home() {
  const [comunidades, setComunidades]= React.useState([{
    id: '12313221',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  // const comunidades = comunidades[0];
  // const alteradorDeComunidades = comunidades[1];
  const githubUser='SaromAndrade';
  const pessoasFavoritas= ['juunegreiros','omariosouto','peas','rafaballerini','marcobrunodev','felipefialho'];
 

  return (
    <>
    <AlurakutMenu githubUser={githubUser}/>
  <MainGrid>
    <div className="profileArea" style={{gridArea: 'profileArea'}}>
      <ProfileSidebar githubUser={githubUser}/>
    </div>
    <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
      <Box>
        <h1 className="title">Bem Vindo(a)</h1>
        <OrkutNostalgicIconSet/>
      </Box>
      <Box>
        <h2 clasName="subTitle">Oque você deseja fazer?</h2>
        <form onSubmit={function handleCriaComunidade(e){
          e.preventDefault();
          
          const dadosDoForm = new FormData(e.target);
          const comunidade = {
            id: new Date().toISOString(),
            title: dadosDoForm.get('title'),
            image: dadosDoForm.get('image'),
          }
         
          const comunidadesAtualizadas =[...comunidades, comunidade]
          comunidades.push(
            setComunidades(comunidadesAtualizadas));

        }}>
        <div>
          <input placeholder="Qual vai ser o nome da sua comunidade?"
            name="title" 
            aria-label="Qual vai ser o nome da sua comunidade?"
            type="text">
          </input>
        </div>
        <div>
          <input placeholder="Coloque uma URL para usarmos de capa"
            name="image" 
            aria-label="Coloque uma URL para usarmos de capa">
          </input>
        </div>
        <button>
          Criar comunidade
        </button>
        </form>
      </Box>
    </div>
    <div className=" profileRelationsArea" style={{gridArea: 'profileRelationsArea'}} >
      <ProfileRelationsBoxWrapper>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
        Comunidades ({comunidades.length})
        </h2>
        <ul>
        {comunidades.map((itemAtual)=>{
          return (
            <li key={itemAtual.id}>
                <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
              <img src={itemAtual.image} />

                <span>{itemAtual.title}</span>
                </a>
            </li>
          )
        }
        )}
        </ul>
      </ProfileRelationsBoxWrapper>
      <h2 className="smallTitle"> Pessoas da comunidade ({pessoasFavoritas.length})</h2>
        <ul>
        {pessoasFavoritas.map((itemAtual)=>{
          return (
            <li key={itemAtual}>
                <a href={`/users/${itemAtual}`} key={itemAtual}>
                <img src={`https://github.com/${itemAtual}.png`} />
                <span>{itemAtual}</span>
                </a>
            </li>
          )
        }
        )}
        </ul>
      </ProfileRelationsBoxWrapper>
      
    </div>
    </MainGrid>
    </>)
}
