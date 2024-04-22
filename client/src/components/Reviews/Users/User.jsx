import'./User.css'
import { useState } from 'react'

const User = ({name, _id, email}) => {
    const [open,setOpen]=useState(true)
    return (
        <>
        <div key={_id}> className="flex justify-center" onclick={() => setOpen (!open)}
        <p className={open ? 'day':'night'}>name: {name} - Email :{email}</p>
        

        </div>

        </>
    )
}

export default User