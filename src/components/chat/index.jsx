import { FaUserCircle } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { ChatDiv, MessagesDiv, Message, SendMessage } from "./style";
import { AiOutlineSend } from "react-icons/ai";

const messages = [
    {
        sender_name: "ixi",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "ola",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "guest",
        sender_id: "a8d9a9dkad9ak44444",
        room_id: "a8d9a9dkad9ak",
        content: "ola1",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "Rocki",
        sender_id: "a8d9a9dkad9ak44444",
        room_id: "a8d9a9dkad9ak",
        content: "ola2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "gabi",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "ola3",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "junior",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "olaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "ixi",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "ola",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "guest",
        sender_id: "a8d9a9dkad9ak44444",
        room_id: "a8d9a9dkad9ak",
        content: "ola1",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "Rocki",
        sender_id: "a8d9a9dkad9ak44444",
        room_id: "a8d9a9dkad9ak",
        content: "ola2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "gabi",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "ola3",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "junior",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "olaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "ixi",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "ola",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "guest",
        sender_id: "a8d9a9dkad9ak44444",
        room_id: "a8d9a9dkad9ak",
        content: "ola1",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "Rocki",
        sender_id: "a8d9a9dkad9ak44444",
        room_id: "a8d9a9dkad9ak",
        content: "ola2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "gabi",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "ola3",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "junior",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "olaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "ixi",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "ola",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "guest",
        sender_id: "a8d9a9dkad9ak44444",
        room_id: "a8d9a9dkad9ak",
        content: "ola1",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "Rocki",
        sender_id: "a8d9a9dkad9ak44444",
        room_id: "a8d9a9dkad9ak",
        content: "ola2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "gabi",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "ola3",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "junior",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "olaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "ixi",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "ola",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "guest",
        sender_id: "a8d9a9dkad9ak44444",
        room_id: "a8d9a9dkad9ak",
        content: "ola1",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "Rocki",
        sender_id: "a8d9a9dkad9ak44444",
        room_id: "a8d9a9dkad9ak",
        content: "ola2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "gabi",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "ola3",
        createdAt: "2021-10-9"
    },
    {
        sender_name: "junior",
        sender_id: "a8d9a9dkad9ak-dam9da762k",
        room_id: "a8d9a9dkad9ak",
        content: "olaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        createdAt: "2021-10-9"
    },
]

const user = {
    id: "a8d9a9dkad9ak44444",
    email: "pessoaj420@gmail.com"
}

export function Chat({ Name }) {
    return (
        <ChatDiv>
            <header className="header-chat">
                <div className="avatar">
                    <FaUserCircle size={45} color={"#0078e7"} />
                </div>
                <span>
                    {Name}
                </span>

                <div>
                    <HiMenu size={29} />
                </div>
            </header>
            <MessagesDiv>
                {messages.map(message => (
                    <Message sameUser={message.sender_id === user.id} >
                        <div className="message-content">
                            <span>{message.sender_id === user.id ? "Você" : message.sender_name}</span>
                            <p>{message.content}</p>
                        </div>
                    </Message>
                ))}
            </MessagesDiv>
            <SendMessage>
                <input type="text" />
                <button><AiOutlineSend color={"#71b0eb"} size={38} /></button>
            </SendMessage>
        </ChatDiv>
    )
}