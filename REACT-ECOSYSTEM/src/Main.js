import React, {useState} from 'react';
import TodoList from './todos/TodoList';
import NokiaKeyBoard  from './todos/NokiaKeyBoard';
const Main = () => {
    const [tab, setTab] = useState("nokia");
    const SwitchTab = (tabname) => {
        setTab(tabname);
    };
    const TabContent = () => {
        return tab==="nokia" ? <NokiaKeyBoard /> : <TodoList />;
    };
 return (
     <div>
         <div>
             <h1 onClick={()=>SwitchTab("nokia")}>nokia</h1>
             <h1 onClick={()=>SwitchTab("todos")}>todos</h1>
         </div>
         <div>
            {TabContent()}
         </div>
    </div>
 );
}

export default Main;
