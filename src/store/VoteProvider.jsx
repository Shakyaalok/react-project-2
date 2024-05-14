import React,{useReducer} from 'react';
import voteContext from './vote-context'

const initialState = {
    votes:[],
    totalVote:0
}

const voteReducer = (state,action)=>{

  if(action.type==='ADD'){
    
  // not exists voters
  const updatedTotalVote = state.totalVote + action.vote.currentVote; 
  const updatedVotes = state.votes.concat(action.vote)
  console.log('votes',updatedTotalVote,updatedVotes); 

    return{
      votes:updatedVotes,
      totalVote:updatedTotalVote
    }
  }

  return initialState;
    

}


const VoteProvider = (props) => {

    const [voteState,voteDispatcher] = useReducer(voteReducer,initialState);

    const addVoteHandler = (vote)=>{
      voteDispatcher({type:'ADD',vote:vote})
    }




    const context = {
        votes:voteState.votes,
        totalVote:voteState.totalVote,
        addVote:addVoteHandler,
        removeVotes:(id)=>{},        
        message:'this is working'
    }


  return <voteContext.Provider value={context}>
    {props.children}
  </voteContext.Provider>
}

export default VoteProvider;
