import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div>
      <Image src={'/Logo.png'} alt="Image" width={200} height={200}/>
      <Button >Get Started</Button>
    </div>
  )
}

export default Header
