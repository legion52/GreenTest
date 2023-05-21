import { AuthModal } from "./features/modals/authModal";
import { MainPage } from "./pages/main";
import { useAppSelector } from "./shared/lib";


function App() {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  

  return (
    <div>
    <MainPage/>
    {!isAuth&&<AuthModal/>}
    </div>
  );
}

export default App;
