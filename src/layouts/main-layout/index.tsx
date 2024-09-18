import { Footer, Navbar } from "@/components/shared";
import { Outlet } from "react-router-dom";

interface IProps {}

const MainLayout: React.FC<IProps> = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
