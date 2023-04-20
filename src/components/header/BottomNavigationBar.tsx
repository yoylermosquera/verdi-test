import Link from 'next/link'
import React from 'react'
import Icon from '../icon/index';

function BottomNavigationBar() {
  return (
    <div className='lg:hidden fixed bottom-0 left-0 w-full h-[5.625rem] py-3 bg-beige-light ' >
        <section className='flex'>
            <Link href={''} className={`w-[4.375rem] h-16 ${true ? 'bg-white' : ''} rounded flex flex-col gap-5 `}>
                <Icon iconName='Metrics' size={18} />
                <span>METRICAS</span>
            </Link>
        </section>
    </div>
  )
}

export default BottomNavigationBar