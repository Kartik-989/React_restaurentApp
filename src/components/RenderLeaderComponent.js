import React from 'react';
import { Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function RenderLeader(props){
    

    return(
        <Media className="row">
            
            <Media left className="col-12 col-md-2 ">
                <img src={baseUrl+props.leader.image} alt={props.leader.abbr}/>
            </Media>
            
           
            <Media body className="col-12 col-md-10">
                <Media heading >
                    {props.leader.name}
                </Media>
                <p>
                    {props.leader.designation}
                </p>
                <p>
                    {props.leader.description}  
                </p>
                
            </Media>
            
        </Media>
    );
}

export default RenderLeader;