import AppLink from '@/components/AppLink'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { BsMoonStars } from 'react-icons/bs'
import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { PageHeaderHeading } from '@/components/PageHeader'
export default function Home() {
  return (
    <>
      {/* create a container that wrap the entire website with tailwind, making responsive an centered */}
      <div className="container mx-auto bg-background">
        <div className="flex px-10 py-5 items-center" >
          <Image src='/leonardo.png' width={50} height={50} alt='icon' />
          <p className='text-lg text-white ml-5'>Lucho</p>
          <div className='flex ml-28   gap-5'>
            <AppLink href='/' text='Home' />
            <AppLink href='/about' text='About' />
            <AppLink href='/proyects' text='Proyects' />
            <AppLink href='/contact' text='Contact' />
          </div>
          <div className='flex ml-auto mr-10'>
            <BsMoonStars className='text-gray-500 text-2xl' />
          </div>
          <div className='flex gap-5'>
            <AiFillMail className='text-gray-500 text-2xl' />
            <AiFillLinkedin className='text-gray-500 text-2xl' />
            <AiFillGithub className='text-gray-500 text-2xl' />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center min-h-[300px] py-2 px-15">
          <PageHeaderHeading className='text-5xl text-white'>Grow your business</PageHeaderHeading>
        </div>
      </div>
    </>
  )
}
