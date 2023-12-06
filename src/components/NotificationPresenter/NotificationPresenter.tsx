import './NotificationPresenter.css'

const NotificationPresenter = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-[171.5px] w-[189.7px] bg-white shadow-notification rounded-notification box-border flex-shrink-0 overflow-hidden'>
      {children}
    </div>
  )
}

export default NotificationPresenter