'use client'


import { Card, CardHeader, CardFooter, Image } from '@nextui-org/react'

export default function Menu({ className }: { className?: string }) {

    return(
      <div className="max-h-[900px] gap-4 grid grid-rows-2 grid-cols-1 px-8">
        <Card
        isPressable
      className="border-none ">
        <CardHeader className="absolute right-0 z-20 top-1 flex-col !items-end">
        <p className="text-tiny text-white/60 uppercase font-bold">Summon</p>
        <h4 className="text-white font-medium text-large">Recruit new units</h4>
        </CardHeader>
        <Image
          alt="Card background"
          className="object-cover rounded-xl flex-row flex-col-none"
          src="/recruit.jpeg"
          width={270}
        />
        </Card>
        <Card
        isPressable
      className="border-none row-span-1">
        <CardHeader className="absolute right-0 z-20 top-1 flex-col !items-end">
        <p className="text-tiny text-white/60 uppercase font-bold">Battle</p>
        <h4 className="text-white font-medium text-large">Clear a dungeon</h4>
        </CardHeader>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/battle.jpeg"
          width={270}
        />
        </Card>
      </div>
    )
}