import { useState } from 'react'
import { Button } from '@/components/ui/button'

import { FaGoogle } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import './App.css'

function App() {

  return (
    <>
      <section className='w-screen h-screen bg-linear-to-l from-[#007979] via-[#24B1B1] to-[#FFE2AF] flex items-center justify-center'>
        {/* 
        <div className="flex gap-4 p-10">
          <Button>Default</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="outline">
            Outline
          </Button>

          <Button variant="ghost">
            Ghost
          </Button>

          <Button variant="destructive">
            Delete
          </Button>
        </div> 

        <div className="flex items-center gap-4 p-10">
          <Button size="sm">Small</Button>

          <Button size="default">Default</Button>

          <Button size="lg">Large</Button>

          <Button size="icon">
            +
          </Button>
        </div> */}

        <Card  size="sm" className="mx-auto w-full max-w-xs pt-0 border-white shadow-[6px_8px_20px_rgba(0,0,0,0.22),-8px_-8px_20px_rgba(255,255,255,0.12)]">

          <CardHeader className="w-full flex flex-col items-center bg-gray-400 text-white h-fit py-3">

            <CardTitle className="text-[26px] font-semibold">
              Login Card
            </CardTitle>

            <CardDescription className="font-bold">
              login to start coding.
            </CardDescription>

          </CardHeader>

          <CardContent>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
                <Input id="fieldgroup-name" placeholder="new user" />
              </Field>
              <Field>
                <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                    <Input
                      id="fieldgroup-email"
                      type="email"
                      placeholder="name@example.com"
                    />
                <FieldDescription>
                      start new journey towards a bright Future.
                </FieldDescription>
              </Field>
                  <Field orientation="horizontal">
                    <Button type="reset" variant="outline">
                      Reset
                    </Button>
                    <Button type="submit">Submit</Button>
                  </Field>
            </FieldGroup>

          </CardContent>

          <CardFooter className="w-full h-fit py-3 items-start justify-between flex flex-col gap-2 bg-gray-400 text-white">
            <p className='font-medium'>or Login with:</p>

            <div className='w-full h-fit flex items-center gap-6 pl-[22%]'>
              <FaGoogle size={24} />
              <FaDiscord size={24} />
              <FaLinkedin size={24} />
              <FaGithub size={24} />
            </div>
          </CardFooter>

        </Card>
      </section>
    </>
  )
}

export default App
