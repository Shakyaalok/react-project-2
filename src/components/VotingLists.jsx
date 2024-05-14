import React,{useContext, useEffect} from 'react'
import Modal from '../modals/Modal';
import voteContext from '../store/vote-context'
import candidates from './candidateLists';

const VotingLists = (props) => {

  const voteCtx = useContext(voteContext);

  const addVoteHandler =(e)=> {
     e.preventDefault(); 
     const name  = document.getElementById('name').value;
     const selectedValue = document.getElementById('voting').value;
     const [toVote,id] = selectedValue.split('|');

     voteCtx.addVote({
      name:name,
      id:id,
      toVote:toVote,
      currentVote:1      
     })

     document.getElementById('name').value = '';
     document.getElementById('voting').value='';
    
  }

  


  return (
    <Modal onClose={props.onClose}>
      
      <form>
          <div>
             <label htmlFor="name">Name</label>
              <input type="text" id='name' />
          </div>
          <div>
            <label htmlFor="voting">ToVote</label>
            <select name="voting" id="voting">
              {
                candidates.map((candidate=>(
                  <option key={candidate.id} value={`${candidate.name}|${candidate.id}`} id={candidate.id}>{candidate.name}</option>
                )))
              }
            </select>
          </div>
          <button onClick={addVoteHandler} >Vote Now</button>
          <button onClick={props.onClose}>Close</button>
      </form>
    </Modal>
  )
}

export default VotingLists
