'use client'


import { Card, CardHeader, CardFooter, Image } from '@nextui-org/react'

export default function Menu({ className }: { className?: string }) {

    return(
      <div className="max-h-[900px] gap-2 grid grid-rows-2 grid-cols-2 px-8">
        <Card
      className="border-none">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/davidmartinezstare.jpg"
          width={270}
        />
        </Card>
        <Card
      className="border-none">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/davidmartinezstare.jpg"
          width={270}
        />
        </Card>
      </div>
    )
}