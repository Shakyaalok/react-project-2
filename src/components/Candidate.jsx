import React,{useContext,useEffect,useState} from 'react'
import candidates from './candidateLists'
import voteContext from '../store/vote-context'

const Candidate = () => {

  const voteCtx = useContext(voteContext);


 const voteRemoveHandler = (id) =>{
  voteCtx.removeVote(id)
 }


const getNumberOfVoters = (id)=>{
  const NumberOfVoters = voteCtx.votes.filter((candidate)=>candidate.id===id);
  const VotersName = NumberOfVoters.map((vote)=>(
    <div key={vote.id}>
      <h4>{vote.name}</h4>
      <button onClick={()=>voteRemoveHandler(vote.id)}>Remove vote</button>
    </div>
  ))

  

  return (
    <>
      <h3>Total Votes: {NumberOfVoters.length}</h3>
      <div>{VotersName}</div>
    </>
  )

}





  
  return (
    <div>
      {candidates.map((candidate=>(
        <div key={candidate.id} id={candidate.id}>
            <h2>{candidate.name}</h2>
              <div style={{display:'flex', flexDirection:'column'}}>{getNumberOfVoters(candidate.id)}</div>
        </div>
      )))}
    </div>
  )
}

export default Candidate
