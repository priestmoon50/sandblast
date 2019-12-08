import React , { Component } from 'react';
import {Grid, Cell , List, ListItem , ListItemContent } from 'react-mdl';

class About extends Component {
    render(){
        return(
            <div className="about-body">
               <Grid className="about-grid">
                            
                   <Cell col={6}>
                        <h1>تماس با ما</h1>
                        <hr></hr>                       
                        <div>
                            <List>

                                <ListItem style={{color: 'white'}}>
                                    <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}} >                                                         
                                    <h2><i className="fa fa-skype" aria-hidden="true"/>
                                    0917-567-0082  شماره تماس  </h2>
                                    </ListItemContent>
                            
                                </ListItem>
                                <ListItem style={{color: 'white'}}>
                                    
                                    <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}} > 
                                    <h3>
                                    Rezazare21989@Gmail.com :  پست الکترونیک 
                                    </h3>
                                    </ListItemContent>

                                </ListItem>
                                <ListItem style={{color: 'white'}}>
                                    
                                    <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}} > 

                                    <h4>
                                    
                                    آدرس : شیراز - شهرک صنعتی - پل فسا
                                    </h4>
                                    </ListItemContent>

                                </ListItem>
                            </List>
                        </div>
                   </Cell>
           
               </Grid>
            </div>
        )
    }
}

export default About;