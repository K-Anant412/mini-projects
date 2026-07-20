import React from 'react'
import ProjectCard from '../utils/ProjectCard'

const Projects = () => {
  return (
    <>
    <section className='h-full w-full flex flex-col items-center overflow-y-auto scrollbar-none pt-20 pb-10 gap-10'>
      
      <ProjectCard 
        title="Employee Management System" 
        sub="A full-stack administrative platform designed to streamline corporate workflows, data tracking, and team management." 
        repo_link="https://github.com/K-Anant412/Employee-Management-"
        repo_title="employee_management"
        frontend_framework="Stremlit" 
        backend_framework="Flask" 
        database="MySQL" 
      />

      <ProjectCard 
        title="Online Books Store" 
        sub="A working online book selling platform, wher you can borrow or purchase the books in lower price." 
        repo_link="https://github.com/K-Anant412/MyLibrary.git"
        repo_title="my_library"
        frontend_framework="React, Tailwindcss" 
        backend_framework="Flask" 
        database="MySQL" 
      />

      <ProjectCard 
        title="Expence Tracker" 
        sub="A personal expence tracker, that helps to manage daily and monthly expences, user friendlly interface." 
        repo_link="https://github.com/K-Anant412/Expense-tracker.git"
        repo_title="expence_tracker"
        frontend_framework="React, Tailwindcss, Daisy UI" 
        backend_framework="Flask" 
        database="MySQL, Flask-Migrate" 
      />

    </section>
    </>
  )
}

export default Projects