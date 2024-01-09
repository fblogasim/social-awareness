
import React from "react"
import { useState, useContext, createContext } from 'react'

import Campaign1Image from '../images/Campaign1.png';
import Campaign2Image from '../images/Campaign2.png';
import Campaign3Image from '../images/Campaign3.png';


export default function AllCampaigns(){
  const campaigns = [
  { title: "Campaign1", text: "Campaign1 brief", url: Campaign1Image },
  { title: "Campaign2", text: "Campaign2 brief", url: Campaign2Image },
  { title: "Campaign3", text: "Campaign3 brief", url: Campaign3Image }
  ];

  const [Campaign, setCampaign] = useState(null);
  const [rendered, setRendered] = useState(false);


  const listItems = campaigns.map(campaign => 
   <div className="col-md-4 mb-4" key = {campaign.toString()} >
   <div className="card">
   <img src={campaign.url} className="card-img-top" alt="Card Image 1" />
   <div className="card-body">
   <h5 className="card-title">{campaign.title}</h5>
   <p className="card-text">{campaign.text}</p>
   <a href="#" className="btn btn-primary" onClick = {()=>setCampaign(campaign.title)}>Learn More</a>
   </div>
   </div>
   </div>
   );


  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.title === Campaign
  );

  const newlistItems = filteredCampaigns.map(campaign => 
   <div class="container mt-3">
   <a class = "closeDetails" onClick = {()=>setCampaign(null)}> View all </a>
   <div class="mt-4 p-5 text-dark rounded">
   <h1>{campaign.title}</h1> 
   <div className = "row">
   <div className = "col-sm-6">
      <img src = {campaign.url} alt = "image Campaign" width = "400" />
   </div>
   <div className = "col-sm-6">
      <p>{campaign.text}</p>
      <p>More details about the campaign</p>
      <button class = "join-btn">Join Campaign </button>
   </div>
   </div>
   </div>
   </div>
   );
  
  return (
    <> 
    <div className="container mt-4">
    <h1>All Campaigns </h1>
    <div className="row">   


    {(rendered)? null : listItems}
    {(Campaign !== null)? newlistItems : null} 


    </div>
    </div> 

    </>
    );
}