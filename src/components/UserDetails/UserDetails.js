import './UserDetails.css'

const UserDetails = ({userDetails}) => {
    const {id, email, website, phone} = userDetails;
    return (
        <div className={'user-details'}>
            <div>Id: {id}</div>
            <div>Email: {email}</div>
            <div>Website: {website}</div>
            <div>Phone: {phone}</div>
        </div>
    );
};

export {UserDetails};