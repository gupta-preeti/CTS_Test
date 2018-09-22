import React from "react";

export const UserDetail = () =>  {
return {
  render() {
    const userData = this.props.userData;
    return (
      <div className="user-wrapper">
        {userData && userData.map((user) =>

          <div className="user-details" key={user.id}>
            <div className="pic">
              <img src={user.avatar} alt={user.first_name} />
            </div>
            <div className="title">{user.first_name} {user.last_name}</div>
            <div className="delete" onClick={() => this.props.onDelete(user.id)}>Delete</div>
          </div>
        )}
      </div>
    );
  }
  };
}
