import React from 'react';

class Todoform extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: 'temporary title',
      body: 'temporary body'
    };
    this.updateWord.bind(this);
  }

  updateWord(event) {
    this.setState({title: event.currentTarget.value});
    console.log(this.state.title);
  }

  render () {
   return (
     <form class="" action="index.html" method="post">
       <div>Title</div>
       <input onChange={} name="" value={this.state.word}/>

       <div>Body</div>
       <input onChange={this.updateWord} name="" value={this.state.word}/>

       <br></br>
       <input type="button" name="" value="Submit"/>
     </form>
   );
 }

}
export default Todoform;
