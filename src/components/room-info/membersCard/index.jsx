import { DivMemberCard } from './styled';

export function MemberCard({ member }) {
  const { name, email, avatar } = member;
  return (
    <DivMemberCard>
      <div className="avatar">
        <img src={avatar} alt="member" />
      </div>
      <div className="user-info">

        <p>{name}</p>
        <span>{email}</span>
      </div>
    </DivMemberCard>
  )
}