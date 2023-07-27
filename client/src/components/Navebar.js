import React from 'react'
import music_img from './good.webp'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'Playlists', href: '/', current: false },
  { name: 'Search', href: '/search', current: false },
  { name: 'Albums', href: '/', current: false },
  { name: 'Explore Premium', href: '/', current: false },
]
function classNames(...classes) {
  // console.log(classes.filter(Boolean))
  return classes.filter(Boolean).join(' ')
}


export default function Navebar() {

  // const Navbuttoncal = () => {
  //   console.log("sdf ksd")
  //   return null
  // }

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 bg-gray-800" aria-label="Global">
        <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5"/>
                <span className="sr-only">Your Nova</span>
                <img
                  className="h-10 w-auto rounded-3xl"
                  src={music_img}
                  alt="NOT FOUND..."
                />
              
              <div className="ml-7 pl-2 flex items-baseline space-x-3">
                
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )} aria-current={item.current ? 'page' : undefined} >
                    {item.name} 
                  </a>
                ))}
          
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                
                <img
                className="h-11 w-11 rounded-full mr-6"
                src={music_img}
                  alt=""
                />
                <span className="sr-only hover:text-white">Close menu</span>
                <XMarkIcon className="h-9 w-8 text-white hover:bg-red-700 rounded-full" />
                {/* <button type="button" className="btn btn-outline-primary" onClick={() => console.log("hi")}>GO</button> */}
              </div>
              
      
          </div>
         
         
        

      </nav>
    </>

  )
}
