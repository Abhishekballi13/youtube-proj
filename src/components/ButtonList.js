import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const blist = ["All","Gaming","Songs","Cricker","Soccer","Cooking","UFC","WWE","Marco","BigBoss"];
  return (
    <div className='flex'>
        {blist.map((s,i) => <Button key={i} name={s}/>)}
    </div>
  )
}

export default ButtonList