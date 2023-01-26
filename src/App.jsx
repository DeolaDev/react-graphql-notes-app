import logo from "./logo.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <img src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>My Notes App</Heading>
        <h1>With Authentication</h1>
      </Card>
      <Button onCLick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>My Notes App</h1>
//       </header>
//     </div>
//   );
// }

// export default App;
