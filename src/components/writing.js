import React from 'react'

import TwoColumns from 'components/twoColumns'
import ProjectImage from 'components/projectimage'
import SectionHeading from 'components/sectionHeading'

import Writing1 from 'img/writing1.jpg'
import Writing2 from 'img/writing2.jpg'
import Writing3 from 'img/writing3.jpg'

const Writing = () => {
  return (
    <>
      <TwoColumns
        wide
        leftColumn={<SectionHeading>Writing</SectionHeading>}
        rightColumn={
          <ProjectImage
            logo={Writing1}
            title="Koppet"
            abstract="Onde juntei a Veterinária com Design e criei um App para pets"
            link={<a href="https://medium.com/@biaignatti/projeto-final-koppet-19e9db530f2e">Leia mais no Medium ↗</a>}
          />
        }
      />

      <TwoColumns
        wide
        rightColumn={
          <ProjectImage
            logo={Writing2}
            title="Outerspace"
            abstract="Projeto de um editorial online pensado para pessoas com interesses artísticos"
            link={<a href="https://medium.com/@biaignatti/projeto-5-editorial-design-3b61e6a987a4">Leia mais no Medium ↗</a>}
          />
        }
      />

      <TwoColumns
        wide
        rightColumn={
          <ProjectImage
            logo={Writing3}
            title="Fun People Inc"
            abstract="Projeto de criação de um app onde a experiência offline fosse trazida para a online"
            link={<a href="https://medium.com/@biaignatti/projeto-3-fun-people-inc-76593c28de42">Leia mais no Medium ↗</a>}
          />
        }
      />
    </>
  )
}

export default Writing
