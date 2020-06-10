import React from 'react'
import styled from 'styled-components'

import GlobalWrapper from 'components/global-wrapper'
import media from 'utils/media-queries'

import Header from 'components/article/header'
import CoverImage from 'components/article/coverimage'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'
import FullSizeImage from 'components/article/fullsizeimage'

import img1 from 'img/articles/sioux/agro-desktop.jpg'
import img2 from 'img/articles/sioux/agro-mobile.jpg'
import img3 from 'img/articles/sioux/other-desktop.jpg'
import img4 from 'img/articles/sioux/other2-desktop.jpg'
import img5 from 'img/articles/sioux/sioux-mobile.jpg'
import img6 from 'img/articles/sioux/sioux1-desktop.jpg'
import img7 from 'img/articles/sioux/sioux2-desktop.jpg'
import CoverSrc from 'img/articles/sioux/sioux2-desktop.jpg'

// import CoverSrc from 'img/articles/lifetime/lifetime-cover.svg'
import SilosSrc from 'img/articles/lifetime/lifetime-silos.svg'
import Silos2Src from 'img/articles/lifetime/lifetime-silos2.svg'
import UISrc from 'img/articles/lifetime/lifetime-app.jpg'
import UI2Src from 'img/articles/lifetime/lifetime-app2.jpg'
import TasksSrc from 'img/articles/lifetime/lifetime-tasks.jpg'
import OnboardingSrc from 'img/articles/lifetime/lifetime-illustration.svg'
import DesktopSrc from 'img/articles/lifetime/lifetime-desktop.jpg'
import PaperPlaneSrc from 'img/articles/lifetime/lifetime-paperplane.svg'
import TypeIconsSrc from 'img/articles/lifetime/lifetime-typeicons.svg'
import IconsSrc from 'img/articles/lifetime/lifetime-icons.svg'
import ColorsSrc from 'img/articles/lifetime/lifetime-colors.jpg'
import LetterBoxSrc from 'img/articles/lifetime/lifetime-letterbox.jpg'
import LogoSrc from 'img/articles/lifetime/lifetime-logo.svg'
import HeartSpinnerSrc from 'img/articles/lifetime/lifetime-logoanimation.gif'

const Section = styled.section`
  margin: 64px 0;
  ${media.sm`
    margin: 0;
  `}
`

const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;
  height: auto;
  margin-top: 32px;
  margin-bottom: 32px;
  @media (min-width: 1000px) {
    width: 1000px;
    height: 562px;
    padding-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ImageGrid = styled.div`
  background: #f2f2f2;
  max-width: 100%;
  padding: 40px;
  margin: 32px 0;
  text-align: center;
  ${media.lg`
    padding: 32px;
    margin: 0 0 24px 0;
  `}
  ${media.md`
    margin: 0;
    margin: 0 0 16px 0;
  `}
  ${media.sm`
    padding: 16px;
  `}
`

const Img = styled.img`
  max-width: calc(100% - 96px);
  max-height: 300px;
  margin: 8px;
  display: inline-block;
  ${media.xl`
    max-height: 240px;
  `}
  ${media.lg`
    max-height: 200px;
  `}
  ${media.md`
    max-height: 120px;
    margin: 4px;
  `}
  ${media.sm`
    max-height: 80px;
    margin: 2px;
  `}
`

const LifeTime = () => {
  return (
    <GlobalWrapper>
      <Header title="Sioux Group" />
      <CoverImage src={CoverSrc} focusX={'35%'} focusY={'50%'} />
      <Section>
        <ContentWrapper>
          <h2>Sioux - Trabalhos</h2>
          <h3>Realizados no meu primeiro emprego como UX/UI</h3>
          <p>
            A agência de tecnologia Sioux foi minha primeira experiencia trabalhando com UX UI design. O que eu acho mais interessante de se trabalhar em uma agencia e a diversidade dos trabalhos, “principalmente pra mim que estou começando, ajuda muito a aprender sobre muitos assuntos mais rápido”, além de ter me ensinado a me comunicar melhor com as outras áreas e trabalhar em conjunto com elas (atendimento, SEO e desenvolvedores).
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <h2>Alguns dos trabalhos de UI realizados:</h2>
        </ContentWrapper>
        <ContentWrapper>
          <h3>SMARTDATA</h3>
          <p>
            O objetivo era criar o layout para o site, que já estava em produção, mas não estava de acordo com a identidade visual da empresa. Um site simples e objetivo, que levava para os produtos que estavam sendo oferecidos. Também teria um blog, para publicação de artigos relacionados ao produto, e para colocar explicações de como ele funciona, para tirar dúvidas caso existisse.
          </p>
        </ContentWrapper>
        <FullSizeImage src={img3} />
        <FullSizeImage src={img4} />
        <ContentWrapper>
          <h3>SITE SIOUX</h3>
          <p>
            A renovação do site da agencia era um projeto que existia a algum tempo, eles tinham definido a identidade visual, e como seria a home e como as animações iriam funcionar, mas precisava desdobrar o restante do site. A ideia era algo no estilo Clay, mais clean e que não fosse monótono, algo diferente.
          </p>
        </ContentWrapper>
        <FullSizeImage src={img5} />
        <FullSizeImage src={img6} />
        <FullSizeImage src={img7} />
        <ContentWrapper>
          <h3>PREMIO NOVO AGRO</h3>
          <p>
            Após alguns anos utilizando o mesmo site, eles queriam renovar, colocar algo mais clean, que tivesse a identidade do Santander, comas cores e ícones que utilizam, tirar o background vermelho, deixando a cor apenas para os detalhes. Era confuso voltar para a página inicial, pois não tinha um logo ou um botão de início, colando o logo no topo da página, fica mais obvio onde deve clicar caso queria voltar a home.
          </p>
        </ContentWrapper>
        <FullSizeImage src={img1} />
        <FullSizeImage src={img2} />
        <ContentWrapper>
          <p>
            Esses foram alguns dos trabalhos publicados que realizei ou participei do projeto trabalhando na agencia. Por enquanto e isso, até a próxima.
          </p>
        </ContentWrapper>
      </Section>
      <Footer />
    </GlobalWrapper>
  )
}

export default LifeTime
