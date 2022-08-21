import { FunctionComponent } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import UserCheckList from "../component/Checklist/Checklist";
import H4 from "../component/H4/H4";
import User from "../component/User/User";
import Users from "../data/data.json";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const { userId } = useParams<{ userId: string }>();
  return (
    <div className="App border h-full w-1/2">
      <h1 className="text-4xl text-center mt-6 mb-6 font-bold">Onboarding Tracker</h1>

      <div className="flex justify-between mx-9">
        <div>
          <H4 text="Users" cssClass="mb-6 " />
          <div>
            {Users.map((user) => (
              <User name={user?.name} id={user?.id} key={`u-${user?.id}`} />
            ))}
          </div>
        </div>
        {userId ? <UserCheckList /> : null}
      </div>
    </div>
  );
};

export default Home;
