import React from 'react'
import * as IconsList from '../components/icon/Icons'
import Icon from '@/components/icon'

const iconsArray = Object.keys(IconsList)

function IconsPage() {
  return (
    <div className='grid grid-cols-3 gap-3'>
        {
          iconsArray.map((icon, index) => {
              return (
                <div key={icon}>
                    <span>{icon}</span>
                    <Icon key={index} iconName={icon as any} size={45} />
                    <br />
                </div>
              )
          })
        }
    </div>
  )
}


export default IconsPage;