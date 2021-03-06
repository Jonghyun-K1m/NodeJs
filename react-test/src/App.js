import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
        'id':1,
        'image': 'https://placeimg.com/64/64/any',
        'name': '홍길동',
        'birthday': '961222',
        'gender': '남자',
        'job': '대학생'
        },{
        'id':2,
        'image': 'https://placeimg.com/64/64/any',
        'name': '심청이',
        'birthday': '961223',
        'gender': '여자',
        'job': '대학생'
       }

]
class App extends Component {
    render() {
        return (
            
            <div>
            {customers.map(c => {
            return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            })}
            </div> 
    
            
        );
    }
}

export default App;

