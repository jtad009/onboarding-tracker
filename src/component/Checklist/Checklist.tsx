import { FunctionComponent } from "react";
import H4 from "../H4/H4";
import { Checkmark, Container } from "./styled";
import { HTTPTodos } from "../../constants/httpTypes";
import Loader from "../loader/loader";
interface UserCheckListProps {
  todoItems?: HTTPTodos[];
  loading?: boolean;
}

const UserCheckList: FunctionComponent<UserCheckListProps> = ({
  todoItems,
  loading,
}) => {
  console.log(todoItems, 'todoItems')
  return loading ? (
    <div className="flex flex-col ">
      <H4 text="Task List" cssClass=" mb-6 " />
      {todoItems && !todoItems.length && <p className="font-semibold ">No Todos found for this user...  </p>}
      {todoItems && (todoItems || [])?.map((item: HTTPTodos, idx: number) => {
        return (
          <Container key={`${item}-${idx}`} >
            {item?.title}
            <input
              type="checkbox"
              checked={item?.completed === true ? true : false}
              readOnly
            />
            <Checkmark />
          </Container>
        );
      })}
    </div>
  ) : (
    <Loader message={"Loading checklist..."} showLoader={false}/>
  );
};

export default UserCheckList;
