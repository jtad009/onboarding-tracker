import { BrowserRouter, Routes, Route, } from "react-router-dom";
import UserCheckList from "./component/Checklist/Checklist";
import ErrorBoundary from "./component/ErrorBoundary/ErrorBoundary";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="flex items-center flex-col">
      <BrowserRouter>
      {/* <ErrorBoundary> */}
      <Routes>
        <Route  path="/" element={<Home/>}>
          <Route path={`/users/:userId/*`} element={<UserCheckList/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      {/* </ErrorBoundary  > */}
      </BrowserRouter>
    </div>
  );
}
