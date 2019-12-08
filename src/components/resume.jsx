import React , { Component } from 'react';
import {Grid , Cell } from 'react-mdl';

class Resume extends Component {
    render(){
        return(
            <div className="resume-bg">
                <Grid>
                    <Cell col={12}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src="./images/DSC08191.jpg"
                            alt="avatar"
                            style={{height: '200px'}}
                            >
                            </img>                
                       
                        <h1 style={{padding: '2em'}}>پیمانکاری نجفی</h1>
                        <h1 style={{color: 'black' , margin: '2em'}}> توانایی اجرای رنگ آمیزی تمامی سطوح فلزی , غیر فلزی , مخازن , استراکچر , مخازن دفنی و همچنین سطوح داخل و بیرون مخازن و غیره  با بیش از ده سال سابقه اجرایی به همراه تیم مجرب و دستگاه های جدید و به روز جهت سند بلاست و رنگ آمیزی  </h1>           
                        </div>
                        <h1 style={{color: 'black' , margin: '2em' , marginRight: '30%'}}> (0917-567-0082) شماره تماس</h1>
                        <h1 style={{color: 'black' , margin: '2em' , marginRight: '30%'}}> (0917-381-5732) شماره تماس</h1>

                    </Cell>
                   
                   </Grid>
            </div>

        )
    }
}

export default Resume;