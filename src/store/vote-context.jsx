import React,{createContext} from 'react'

const voteContext = createContext({
    votes:[],
    totalVote:0,
    addVote:(vote)=>{},
    removeVote:(id)=>{},
})

export default voteContext
