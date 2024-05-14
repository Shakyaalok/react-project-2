
import { useState } from 'react';
import './App.css';
import Candidate from './components/Candidate';
import Form from './components/Form';
import VotingLists from './components/VotingLists';
import VoteProvider from './store/VoteProvider';

function App() {

  let [votingLists,setVotingLists] = useState(false)

  const ShowVotingLists=(data)=>{
    setVotingLists(data)
  }

  const hideVoteFormHandler = ()=>{
    setVotingLists(false);
  }


  return (

      <VoteProvider>
     <Form onShowVotingLists={ShowVotingLists}/>
     <Candidate/>
     {votingLists && <VotingLists onClose={hideVoteFormHandler}/>}
     </VoteProvider>
  );
}

export default App;
