import { createContext, useReducer } from "react";

const ChatContext = createContext({
  messages: [],
  room: {},
  sendMessage: (messages) => {},
  changeRoom: (room) => {},
});

function chatReducer(state, action) {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        messages: action.payload,
      };
    case "CHANGE_ROOM":
      console.log(action.payload);
      return {
        ...state,
        room: action.payload,
      };
    default:
      return state;
  }
}

function ChatProvider(props) {
  const [state, dispatch] = useReducer(chatReducer, { messages: [], room: {} });

  function sendMessage(messages) {
    dispatch({
      type: "SEND_MESSAGE",
      payload: messages,
    });
  }

  function changeRoom(room) {
    dispatch({ type: "CHANGE_ROOM", payload: room });
  }

  return (
    <ChatContext.Provider
      value={{ messages: state.messages, room: state.room, sendMessage, changeRoom }}
      {...props}
    />
  );
}

export { ChatContext, ChatProvider };
