"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import AboutImage from '../../../public/images/about-image-test.png'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className="list-disc pl-2">
                <li>C/C++</li>
                <li>Python</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className="list-disc pl-2">
                <li>University of Toronto</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul className="list-disc pl-2">
                <li>Ericsson</li>
            </ul>
        )
    }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  
  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    })
  };

  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
            <Image src={AboutImage} width={500} height={500} />

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base md:text-lg">
                    This is about me! I will explain what kind of person I am
                    and what kind of cool projects I did.
                </p>

                
                <div className="flex flex-row justify-start mt-8">
                    {TAB_DATA.map((t) => (
                        <TabButton selectTab={() => handleTabChange(t.id)} active={tab == t.id}>
                            {t.title}
                        </TabButton>
                    ))}
                </div>

                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id == tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;
