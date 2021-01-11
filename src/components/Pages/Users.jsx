import axios from "axios";
import { Component } from "react";
import UserCard from "../Molecules/UserCard";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users", {
    //   method: "get",
    // })
    //   .then((response) => response.json())
    //   .then((response2) => this.setState({ users: response2 }));

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => this.setState({ users: response.data }));
  }

  render() {
    const { users } = this.state;

    return (
      <div className="ed-grid">
        <h1>Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
          {users.map((u) => (
            <UserCard
              key={u.id}
              name={u.name}
              username={u.username}
              email={u.email}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
