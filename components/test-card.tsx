'use client'


import { Card, CardBody, CardHeader, CardFooter, Image } from '@nextui-org/react'

export default function Testcard({ className }: { className?: string }) {

    return(
        // <div className="">
      <Card
      className="border-none">
      {/* <CardBody> */}
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/davidmartinezstare.jpg"
          width={270}
        />
        {/* <p>Make beautiful websites regardless of your design experience.</p> */}
      {/* </CardBody> */}
    </Card>
    //   </div>
    )
}