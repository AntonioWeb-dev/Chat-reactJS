import { useContext, useState } from 'react';
import { Friend } from '../friendsCard';
import { BiMessageRoundedAdd } from 'react-icons/bi';
import { DivNewChat } from './style';


export function NewChat() {
  const [friends, setFriends] = useState({
    name: "junior",

  })

  const handleNewRoom = (event) => {
    event.preventDefault();
    console.log("submited");
  }

  return (
    <DivNewChat>
      <div className="add-room">
        <button className="create-room">
          criar grupo
        </button>
        <form className="search-div" onSubmit={handleNewRoom}>
          <button type="submit">

            <BiMessageRoundedAdd size={25} color={"gray"} cursor={"pointer"} />
          </button>
          <input type="text" placeholder="#ID do grupo" />
        </form>
      </div>
      <Friend name={"adad"} user_id={"adadad"} />
      <Friend name={"adad"} user_id={"adadad2"} />

      <Friend name={"adad"} user_id={"adadad1"} />

      <Friend name={"adad"} user_id={"adadad3"} />

    </DivNewChat>
  )
}