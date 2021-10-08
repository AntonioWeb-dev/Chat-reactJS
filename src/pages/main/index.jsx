import { Room } from '../../components/room';
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { SiGooglemessages } from "react-icons/si";
import { Container, MainDiv, Rooms } from "./style";
import { Chat } from '../../components/chat';

const rooms = [
    {
        "_id": "615a0b00ba406b5318e03dcb",
        "ownerId": "61561b51ef29d3146c1a068b",
        "name": "sala de fisica",
        "admins": [
            "61561b51ef29d3146c1a068b"
        ],
        "members": [
            "61561b51ef29d3146c1a068b"
        ],
        "maxConnections": 4,
        "__v": 0
    },
    {
        "_id": "615a0b00ba406b5318e03dcb",
        "ownerId": "61561b51ef29d3146c1a068b",
        "name": "sala de pt",
        "admins": [
            "61561b51ef29d3146c1a068b"
        ],
        "members": [
            "61561b51ef29d3146c1a068b"
        ],
        "maxConnections": 4,
        "__v": 0
    },
    {
        "_id": "615a0b00ba406b5318e03dcb",
        "ownerId": "61561b51ef29d3146c1a068b",
        "name": "sala de mtm",
        "admins": [
            "61561b51ef29d3146c1a068b"
        ],
        "members": [
            "61561b51ef29d3146c1a068b"
        ],
        "maxConnections": 4,
        "__v": 0
    }
]

export default function Main() {
    return (
        <Container>
            <MainDiv>
                <Rooms>
                    <header className="header-room">
                        <div className="avatar">
                            <FaUserCircle size={45} color={"#0078e7"} />
                        </div>
                        <span>
                            Antonio
                        </span>
                        <div>
                            <SiGooglemessages size={25} />
                        </div>
                        <div>
                            <HiMenu size={29} />
                        </div>
                    </header>
                    {rooms.map(room =>
                        <Room roomName={room.name} roomSubject="any" />
                    )}
                </Rooms>
                <Chat />
            </MainDiv>
        </Container>
    )
}