import { createContext, useReducer } from "react";

const ChatContext = createContext({
  messages: [],
  room: {},
  sendMessage: (messages) => {},
  changeRoom: (room) => {},
});

function chatReducer(state, action) {
  switch (action.type) {
    case "SET_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };
    case "SEND_MESSAGE":
      const newMessages = [...state.messages];
      newMessages.push(action.payload);
      return {
        ...state,
        messages: newMessages,
      };
    case "CHANGE_ROOM":
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

  function setMessages(messages) {
    dispatch({
      type: "SET_MESSAGES",
      payload: messages,
    });
  }

  function changeRoom(room) {
    dispatch({ type: "CHANGE_ROOM", payload: room });
  }

  return (
    <ChatContext.Provider
      value={{ messages: state.messages, room: state.room, sendMessage, changeRoom, setMessages }}
      {...props}
    />
  );
}

export { ChatContext, ChatProvider };
