function SignUpCard({ user }) {

    return (
        <div>
            <h3>사용자 이름 : { user.name }</h3>
            <p><a href={user.url}>상세보기 url : { user.url }</a></p>
        </div>
    );
}

export default SignUpCard;