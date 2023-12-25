import React, { useEffect } from 'react'

import Aboutus from '../Component/Website/Aboutus'
import TeamMembers from '../Component/Website/Team'
import TeamShowcase from '../Component/Website/Team'
import TeamSection from '../Component/Website/Team'
import Service from '../Component/Website/Service'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div >

    <Aboutus />
    <TeamSection/>
    <Service />
  </div>



  )
}
