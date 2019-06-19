import React from 'react';

class SearchBar extends React.Component{
state={ term:''};

// 2nd way
onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state.term);
 };

    render(){
        return (
        <div className='ui segment'>
            <form onSubmit={this.onFormSubmit}  className='ui form'>
                <div className='field '>
                    <label>Image Search</label>
                <input type='text' value={this.state.term} onChange={e => this.setState({term: e.target.value.toUpperCase()})}></input> 
                </div>
            </form>
        </div>
        );
     }
}

//3rd method
// onFormSubmit(event){
//     event.preventDefault();
//     console.log(this.state.term);
// }

//     render(){
//         return (
//         <div className='ui segment'>
//             <form onSubmit={(event) =>this.onFormSubmit()}  className='ui form'>
//                 <div className='field '>
//                     <label>Image Search</label>
//                 <input type='text' value={this.state.term} onChange={e => this.setState({term: e.target.value.toUpperCase()})}></input> 
//                 </div>
//             </form>
//         </div>
//         );
//     }
// }






export default SearchBar;