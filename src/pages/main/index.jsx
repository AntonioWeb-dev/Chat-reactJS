import { Room } from '../../components/room';
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { SiGooglemessages } from "react-icons/si";
import { Container, MainDiv, Rooms } from "./style";
import { Chat } from '../../components/chat';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const rooms = [
  {
    "_id": "615a0b00ba406b5318e03dcb",
    "ownerId": "61561b51ef29d3146c1a068b",
    "name": "sala de aleatoria 1",
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
    "name": "sala de aleatoria 2",
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
    "name": "sala de aleatoria 3",
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
    "name": "sala de aleatoria 1",
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
    "name": "sala de aleatoria 2",
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
    "name": "sala de aleatoria 3",
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
    "name": "sala de aleatoria 1",
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
    "name": "sala de aleatoria 2",
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
    "name": "sala de aleatoria 3",
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
    "name": "sala de aleatoria 1",
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
    "name": "sala de aleatoria 2",
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
    "name": "sala de aleatoria 3",
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
    "name": "sala de aleatoria 1",
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
    "name": "sala de aleatoria 2",
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
    "name": "sala de aleatoria 3",
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
    "name": "sala de aleatoria 1",
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
    "name": "sala de aleatoria 2",
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
    "name": "sala de aleatoria 3",
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
  const roomSected = "sala aleatoria 1"
  const context = useContext(UserContext);
  const { user } = context.user;
  return (
    <Container>
      <MainDiv>
        <Rooms>
          <header className="header-room">
            <div className="avatar">
              <FaUserCircle size={45} color={"#0078e7"} />
            </div>
            <span>
              {user.name}
            </span>
            <div>
              <SiGooglemessages size={25} />
            </div>
            <div>
              <HiMenu size={29} />
            </div>
          </header>
          <div className="rooms">

            {rooms.map(room =>
              <Room roomName={room.name} roomSubject="any" />
            )}
          </div>
        </Rooms>
        <Chat Name={roomSected} />
      </MainDiv>
    </Container>
  )
}