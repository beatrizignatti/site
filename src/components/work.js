import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'
import ProjectImage from 'components/projectimage'

import KellerkindLogo from 'img/kellerkindlogo'
import PalettteAppLogo from 'img/palettteapplogo'
import BamLogo from 'img/bamlogo'
import SiouxLogo from 'img/sioux.png'

const LifeTimeLink = <Link to="/sioux">Leia mais ↗</Link>
const PalettteLink = <Link to="/palettteapp">Read More</Link>
const KellerkindLink = <Link to="/kellerkind">Read More</Link>
const BamLink = <Link to="/bam">Read More</Link>

const Work = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Work</SectionHeading>}
      rightColumn={
        <Fragment>
          <ProjectImage
            logo={SiouxLogo}
            title="Sioux"
            abstract="Sioux, agência de tecnologia interativa, se reposiciona criando um grupo de empresas focadas na prestação de serviços e desenvolvimento de produtos próprios"
            link={LifeTimeLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work
