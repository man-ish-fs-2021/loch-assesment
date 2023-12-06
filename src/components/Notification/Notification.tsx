import React from 'react'
import { twMerge } from 'tailwind-merge';

interface NotificationProps {
    icon: React.ReactNode;
    right: React.ReactNode;
    content: React.ReactNode;
    className?: string;
}

const Notification = ({content, icon, right ,className}: NotificationProps) => {
  return (
    <div className={twMerge('w-full h-full p-4 flex flex-col', className)}>
        <div className='flex items-start justify-between'>
            {icon}
            {right}
        </div>
        {content}
    </div>
  )
}

export default Notification