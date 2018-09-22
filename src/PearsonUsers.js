import React, { Component } from "react";
import { UserDetail } from "./UserDetail";
import { userDataService } from "./userService";

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  componentDidMount() {
    userDataService.then(res => {
      this.removeDuplicate(res);
    }).catch(Error => console.log(Error));
  }

  removeDuplicate = (res) => {
    this.setState({ users: res.data.filter(v => this.state.users.some(s => s.id !== v.id)) });
  }

  handleUserDelete = (user) => {
    this.setState({ users: this.state.users.filter(v => v.id !== user) });
  }

  render() {
    return (
      <div className="pearon-users">
        <h1>Pearson User Management</h1>
        <UserDetail userData={this.state.users} onDelete={this.handleUserDelete} />
      </div>
    );
  }
}
