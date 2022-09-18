import './global.css'

interface IUserInformations {
    name: string;
    role: string;
    avatar: string;
    blockClass?: string;
}

export function UserProfile(props: IUserInformations) {
    return (
        <div className={`user-profile ${props?.blockClass}`}>
            <img className={`user-profile--image`} src={props.avatar} alt="imagem de perfil" />
            <div className="user-profile--text">
                <strong>{props.name}</strong>
                <span>{props.role}</span>
            </div>
        </div>
    )
}