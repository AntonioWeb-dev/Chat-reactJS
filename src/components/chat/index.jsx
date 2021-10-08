import { FaUserCircle } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { ChatDiv } from "./style";

export function Chat({ Name }) {
    return (
        <ChatDiv>
            <header className="header-chat">
                <div className="avatar">
                    <FaUserCircle size={45} color={"#0078e7"} />
                </div>
                <span>
                    Antonio
                </span>

                <div>
                    <HiMenu size={29} />
                </div>
            </header>
        </ChatDiv>
    )
}