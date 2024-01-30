import { useState} from "react";
import { useContext } from "react";
import { Context }  from '../App.js';

export default function SideBar(){
	const [navItem,setNavItem] = useContext(Context);
	return(
		<>
		<div className="container mt-3">
		<h2>Featured Campaigns</h2>
		<br />
		<div id="accordion">
		<div className="card">
		<div className="card-header">
		<a className="collapsed" data-bs-toggle="collapse" href="#collapseOne">
		Campaign 1
		</a>
		</div>
		<div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
		<div className="card-body">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</div>
		</div>
		</div>
		<div className="card">
		<div className="card-header">
		<a className="collapsed" data-bs-toggle="collapse" href="#collapseTwo">
		Campaign 2 
		</a>
		</div>
		<div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
		<div className="card-body">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</div>
		</div>
		</div>
		<div className="card">
		<div className="card-header">
		<a className="collapsed" data-bs-toggle="collapse" href="#collapseThree">
		Campaign 3
		</a>
		</div>
		<div id="collapseThree" className="collapse" data-bs-parent="#accordion">
		<div className="card-body">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</div>
		</div>
		</div>
		</div>
		<br />
		<small><i className="bi bi-info-circle-fill" />&nbsp; Learn more about these campaigns by clicking <button onClick = {()=> setNavItem("Campaigns")} >here</button></small>
		<hr />
		</div>
		<div className="container mt-3">
		<h2>Support Local Business</h2>
		<div className="card">
		<img className="card-img-top" src={require("../images/Business1.jpg")} alt="Card image" style={{width: '100%'}} />
		<div className="card-body">
		<h4 className="card-title">John Doe</h4>
		<p className="card-text">John has been providing XYZ services through his business ABC to the residents of XXX suburb</p>
		</div>
		</div>
		<br />
		<small><i className="bi bi-info-circle-fill" />&nbsp; Learn more about John's business and similar businesses by clicking <button>here</button></small>
		</div>
		</>
		);
}