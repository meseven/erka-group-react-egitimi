// import Footer from "./components/Footer";
// import Header from "./components/Header";
import React from "react";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/*  <Footer />  */}
      <Paragraph
        n1={2}
        n2={4}
        age={20}
        user={{ name: "Ahmet", surname: "Sarı" }}
        friends={[
          {
            id: "1",
            name: "Can",
          },
          {
            id: "2",
            name: "Ayşe",
          },
          {
            id: "3",
            name: "Fatma",
          },
        ]}
      />
    </div>
  );
}

export default App;
