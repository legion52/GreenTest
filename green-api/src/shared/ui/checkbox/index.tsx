import React from 'react'
interface ICheckbox {
    isActive:boolean
    onClick:()=>void
}
export const Checkbox:React.FC<ICheckbox> = ({isActive, onClick}) => {
  return (
    <div onClick={onClick} className={`flex  w-[35px] h-[20px] bg-white rounded-full cursor-pointer ${isActive?"justify-end ":""}`}><div className={`w-[20px] h-[20px]  rounded-full ${isActive?"bg-[#00a884]":"bg-gray-400"}`}></div></div>
  )
}
