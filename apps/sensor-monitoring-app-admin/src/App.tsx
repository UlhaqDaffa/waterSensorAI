import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LoginList } from "./login/LoginList";
import { LoginCreate } from "./login/LoginCreate";
import { LoginEdit } from "./login/LoginEdit";
import { LoginShow } from "./login/LoginShow";
import { PHList } from "./ph/PHList";
import { PHCreate } from "./ph/PHCreate";
import { PHEdit } from "./ph/PHEdit";
import { PHShow } from "./ph/PHShow";
import { TemperatureList } from "./temperature/TemperatureList";
import { TemperatureCreate } from "./temperature/TemperatureCreate";
import { TemperatureEdit } from "./temperature/TemperatureEdit";
import { TemperatureShow } from "./temperature/TemperatureShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { AccelerationList } from "./acceleration/AccelerationList";
import { AccelerationCreate } from "./acceleration/AccelerationCreate";
import { AccelerationEdit } from "./acceleration/AccelerationEdit";
import { AccelerationShow } from "./acceleration/AccelerationShow";
import { TurbidityList } from "./turbidity/TurbidityList";
import { TurbidityCreate } from "./turbidity/TurbidityCreate";
import { TurbidityEdit } from "./turbidity/TurbidityEdit";
import { TurbidityShow } from "./turbidity/TurbidityShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SensorMonitoringApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Login"
          list={LoginList}
          edit={LoginEdit}
          create={LoginCreate}
          show={LoginShow}
        />
        <Resource
          name="PH"
          list={PHList}
          edit={PHEdit}
          create={PHCreate}
          show={PHShow}
        />
        <Resource
          name="Temperature"
          list={TemperatureList}
          edit={TemperatureEdit}
          create={TemperatureCreate}
          show={TemperatureShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="Acceleration"
          list={AccelerationList}
          edit={AccelerationEdit}
          create={AccelerationCreate}
          show={AccelerationShow}
        />
        <Resource
          name="Turbidity"
          list={TurbidityList}
          edit={TurbidityEdit}
          create={TurbidityCreate}
          show={TurbidityShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
