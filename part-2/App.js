function App() {
    return (
      <div>
        <Tweet
          name="Chris Navarro"
          username="NavarroChris"
          date={new Date().toDateString()}
          message="This is my name"
        />
        <Tweet
          name="Miriam Navarro"
          username="NavarroMiriam"
          date={new Date().toDateString()}
          message="I am his sister"
        />
        <Tweet
          name="Obdulia Navarro"
          username="NavarroObdulia"
          date={new Date().toDateString()}
          message="I am his mom"
        />
      </div>
    );
  }