import React from 'react'

const ChannelDetail=(props)=> {
    
    return (
        <>
           <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Channel Name</th>
    </tr>
  </thead>
  <tbody> 
    <tr>
      <th scope="row">{props.data[0].id}</th>
      <td>{props.data[0].channelName}</td>
      
      
    </tr>
     
  </tbody>
</table>
        
        
        </>
    );

}

export default ChannelDetail
