import React from 'react'
import Card from '../utils/Card'
import Python_img from '../assets/Python_img.png'
import React_img from '../assets/React_img.png'
import SQL_img from '../assets/SQL_img.png'
import JavaScript_img from '../assets/JavaScript_img.png'
import Git_img from '../assets/Git_img.png'
const Skills = () => {
  return (
    <>
      <div className='h-full w-full flex items-center justify-around relative overflow-y-hidden overflow-x-auto scrollbar-none gap-10 pl-10 pr-10'>

        <Card name="Python" image={Python_img} sub="Flask, flask-migrate, ORM, CRUD Operations" />
        <Card name="React" image={React_img} sub="Daisy UI, Hoo-Form, Router, TailwindCSS" />
        <Card name="SQL" image={SQL_img} sub="MySQL, MongoDB" />
        <Card name="SQL" image={Git_img} sub="Git & GitHub" />
        <Card name="JavaScript" image={JavaScript_img} sub="OPPs, Ascynchronous Programming " />
        
      </div>

    </>
  )
}

export default Skills