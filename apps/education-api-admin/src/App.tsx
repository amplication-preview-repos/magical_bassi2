import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UnitList } from "./unit/UnitList";
import { UnitCreate } from "./unit/UnitCreate";
import { UnitEdit } from "./unit/UnitEdit";
import { UnitShow } from "./unit/UnitShow";
import { TopicList } from "./topic/TopicList";
import { TopicCreate } from "./topic/TopicCreate";
import { TopicEdit } from "./topic/TopicEdit";
import { TopicShow } from "./topic/TopicShow";
import { NoteList } from "./note/NoteList";
import { NoteCreate } from "./note/NoteCreate";
import { NoteEdit } from "./note/NoteEdit";
import { NoteShow } from "./note/NoteShow";
import { UmlDiagramList } from "./umlDiagram/UmlDiagramList";
import { UmlDiagramCreate } from "./umlDiagram/UmlDiagramCreate";
import { UmlDiagramEdit } from "./umlDiagram/UmlDiagramEdit";
import { UmlDiagramShow } from "./umlDiagram/UmlDiagramShow";
import { FlowchartList } from "./flowchart/FlowchartList";
import { FlowchartCreate } from "./flowchart/FlowchartCreate";
import { FlowchartEdit } from "./flowchart/FlowchartEdit";
import { FlowchartShow } from "./flowchart/FlowchartShow";
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
        title={"EducationAPI"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Unit"
          list={UnitList}
          edit={UnitEdit}
          create={UnitCreate}
          show={UnitShow}
        />
        <Resource
          name="Topic"
          list={TopicList}
          edit={TopicEdit}
          create={TopicCreate}
          show={TopicShow}
        />
        <Resource
          name="Note"
          list={NoteList}
          edit={NoteEdit}
          create={NoteCreate}
          show={NoteShow}
        />
        <Resource
          name="UmlDiagram"
          list={UmlDiagramList}
          edit={UmlDiagramEdit}
          create={UmlDiagramCreate}
          show={UmlDiagramShow}
        />
        <Resource
          name="Flowchart"
          list={FlowchartList}
          edit={FlowchartEdit}
          create={FlowchartCreate}
          show={FlowchartShow}
        />
      </Admin>
    </div>
  );
};

export default App;
