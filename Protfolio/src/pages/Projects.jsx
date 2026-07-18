import React from 'react'
import ProjectCard from '../utils/ProjectCard'

const Projects = () => {
  return (
    <>
    <section className='h-full w-full flex flex-col items-center overflow-y-auto scrollbar-none pt-20 pb-10 gap-10'>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
    </>
  )
}

export default Projects