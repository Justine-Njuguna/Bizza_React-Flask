import React from "react";
import SpeakerProfile from "./SpeakerProfile";
import SearchSpeaker from "./SearchSpeaker";

  //Parent Component
function App () {
  return (
    <>
      <h1>Speaker profile</h1>
      <SpeakerProfile
        name="John Wilson"
        jobTitle="Frontend Developer"
        company="Google"
      />

      <SearchSpeaker />
    </>
  )
}

export default App;