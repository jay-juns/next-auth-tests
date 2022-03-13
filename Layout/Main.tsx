import Navbar from '../components/Navbar'

type LayoutProps = {
  children: React.ReactNode;
}

const MainLayout =  ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default MainLayout