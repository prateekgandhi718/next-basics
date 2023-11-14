const RootLayout = ({
    children
} : {
    children : React.ReactNode
}) => {
  return (
    <div className="h-full bg-indigo-600 text-white">
        {children}
    </div>
  )
}

export default RootLayout

//So this layout will only be applied for login and register pages. We can just have a landing page this way and not have the navbar and sidebars for these two pages! 