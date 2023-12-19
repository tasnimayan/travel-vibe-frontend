

const Avatar = ({user}) => {
  return (
    <div className="navbar-end">
        <div className="avatar flex items-center">
          {user.name}
          <div className=" w-10 rounded-full hover:cursor-pointer mr-2">
            <a href='/users/10'>
              <img src={user.photo} />
            </a>
          </div>
        </div>
        <a href='/login' className="btn btn-sm">Login</a>
      </div>
  );
};

export default Avatar;