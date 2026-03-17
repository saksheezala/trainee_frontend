import { useState } from "react";

import "./App.css";

import GetUsers from "./pages/GetUsers.jsx";
import AddUser from "./pages/AddUser.jsx";
import UpdateUser from "./pages/UpdateUser.jsx";

function App() {

  const [refresh, setRefresh] = useState(0);

  const reload = () => {
    setRefresh(refresh + 1);
  };

  return (
    <div className="container">

      <h1 className="title">
        User Management
      </h1>

      <div className="layout">

        <div className="form-box box">

          <AddUser reload={reload} />

          <hr />

          <UpdateUser
            reload={reload}
            refresh={refresh}
          />

        </div>

        <div className="table-box box">

          <GetUsers refresh={refresh} />

        </div>

      </div>

    </div>
  );
}

export default App;