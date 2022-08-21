import { FunctionComponent } from "react";
import H4 from "../H4/H4";
import todos from "../../data/todos.json";
import { CheckListItemsShape } from "./typed";
import {Checkmark, Container} from "./styled";
interface UserCheckListProps {
  todoItems?: CheckListItemsShape[];
}

const UserCheckList: FunctionComponent<UserCheckListProps> = ({
  todoItems,
}) => {
  return (
    <div className="flex flex-col ">
      <H4 text="Task List" cssClass=" mb-6 " />
      <Container>
        One
        <input type="checkbox" checked />
        <Checkmark />
      </Container>
      <Container>
        Two
        <input type="checkbox"  />
        <Checkmark/>
      </Container>
      {(todoItems || todos)?.map((item: CheckListItemsShape, idx: number) => (
        <Container key={`${item}-${idx}`}>
         {item?.title}
        <input type="checkbox"   checked={item?.completed ? true : false}/>
        <Checkmark/>
      </Container>
        
      ))}
    </div>
  );
};

export default UserCheckList;

