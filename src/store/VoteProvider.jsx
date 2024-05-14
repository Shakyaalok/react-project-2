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

  if(action.type==='REMOVE'){
    const existingVoteIndex = state.votes.findIndex((vote)=>vote.id===action.id);
    const extistingVote = state.votes[existingVoteIndex];
    const updatedTotalVote = state.totalVote - extistingVote.currentVote;
    let updatedVotes;
    const updatedVote = state.votes.filter((vote)=>vote.id!==extistingVote.id);
    updatedVotes = [...updatedVote];

    return {
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

    const removeVoteHandler = (id)=>{
      voteDispatcher({type:'REMOVE',id:id})
    }




    const context = {
        votes:voteState.votes,
        totalVote:voteState.totalVote,
        addVote:addVoteHandler,
        removeVote:removeVoteHandler,        
        message:'this is working'
    }


  return <voteContext.Provider value={context}>
    {props.children}
  </voteContext.Provider>
}

export default VoteProvider;
