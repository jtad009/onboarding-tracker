import { FunctionComponent, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import UserCheckList from "../component/Checklist/Checklist";
import H4 from "../component/H4/H4";
import Loader from "../component/loader/loader";
import User from "../component/User/User";
import { HTTPTodos, HTTPUser } from "../constants/httpTypes";
import routes from "../constants/routes";
import { replaceDynamics } from "../helpers/url";
import {  HttpRequestShape } from "../hooks/typed";
import useHTTPGetRequest from "../hooks/use_get_request_hook";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const { userId } = useParams<{ userId: string }>();
  const [localUsers, setLocalUsers] = useState<HTTPUser[] >();
  const [localTodos, setLocalTodos] = useState<HTTPTodos[]|[] >();
  const [fetchTodos, setFetchTodos] = useState<boolean>(true);
  const users = useHTTPGetRequest<HTTPUser[]>(routes.users, HttpRequestShape.GET,{},{reloadCondition: !localUsers} );

  const todos = useHTTPGetRequest<HTTPTodos[]|[]>(replaceDynamics(routes.todos, {id: userId}), HttpRequestShape.GET,{},{reloadCondition: fetchTodos} );
//   console.log(localUsers, 'user dfnjkdfmd')
  useEffect(()=>{
   if(users && users.data && users.data.length> 0){
    setLocalUsers(users.data as HTTPUser[]);
   } 
  }, [users]);
  useEffect(()=>{
    if(todos && todos.data){
        setLocalTodos(todos.data as HTTPTodos[]);
        setFetchTodos(false);
        console.log(todos,'todods');
    } 
    console.log(todos,'todods');
   }, [todos]);

   useEffect(()=>{
    setLocalTodos(undefined);
    setFetchTodos(true);
   }, [userId]);

  return (
    !users.loading ? <div className="App border min-h-screen h-full w-3/6">
      <h1 className="text-4xl text-center mt-6 mb-6 font-bold">Onboarding Tracker</h1>

      <div className="flex justify-between mx-9">
        <div>
          <H4 text="Users" cssClass="mb-6 " />
          <div>
            {users && (users.data || []).map((user: { name: string; id: number; }) => (
              <User name={user?.name} id={user?.id} key={`u-${user?.id}`} />
            ))}
          </div>
        </div>
        {userId  ? <UserCheckList todoItems={localTodos} loading={todos?.loading}/> : null}
      </div>
    </div> : 
  
    <div className="min-h-screen h-full flex items-center justify-center">
         <Loader message={"Loading users..."} showLoader={true}/>
    </div>  
  );
};

export default Home;
