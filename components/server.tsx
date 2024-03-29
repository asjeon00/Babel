import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'
import localFont from 'next/font/local'

const myFont = localFont({src: 'NHaasGroteskDSPro-75Bd.otf'})

export default function ServerSide({ className }: { className?: string }) {
    return (
    //   <div className="relative flex min-h-screen flex-col items-center justify-center">
    <div>
        {/* <Link
            href=""
            className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
        >
            <p>Deploy your own to Vercel</p>
            <ExpandingArrow />
        </Link> */}
        <h1 className= {`${myFont.className} pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl`}>
            {/* Tower <br />
            Of <br /> */}
            Tower of Babel
        </h1>

        <Suspense fallback={<TablePlaceholder />}>
            <Table />
        </Suspense>
        <p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
            
        </p>

        <div className="flex justify-center space-x-5 pt-10 mt-10 border-t border-gray-300 w-full max-w-xl text-gray-600">
            
            <Link
            href=""
            className="font-medium underline underline-offset-4 hover:text-black transition-colors"
            >
            Zynaria
            </Link>
        </div>
      </div>
    )
  }
  