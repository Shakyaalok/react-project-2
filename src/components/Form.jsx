import React ,{useContext,useState}from 'react'
import voteContext from '../store/vote-context'

const Form = (props) => {
  const [showVoter,setShowVoters] = useState(false);

  const voteCtx = useContext(voteContext)
  const voteHandler = ()=>{
      setShowVoters(true);
      props.onShowVotingLists(true)
  }
  console.log('ctx',voteCtx)
  return (
    <div>
      <h1>Class monitor vote</h1>
      <h3>Total Vote :- {voteCtx.totalVote}</h3>
      <button onClick={voteHandler}>Show Voting Lists</button>
    </div>
  )
}

export default Form
