import React, { Component } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Header from './components/header/header'
import Auth from './components/pages/auth/singin-signup'
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import HomePage from './components/pages/homepage/HomePage';
import ShopPage from './components/pages/shop/shoppage'
import {Sugar} from 'react-preloaders'
import {connect} from 'react-redux'
import {setcurrrentuser} from './redux/user/user.action'
import checkoutpage from './components/checkout/checkout'
const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

class App extends Component{

  constructor(){
    super()
    this.state={
      currentUser:null,
    }

  }

 unsubscribefromFromAuth=null;


   componentDidMount(){
     const {setcurrrentuser}=this.props
     this.unsubscribefromFromAuth=auth.onAuthStateChanged(async userAuth=>{
       if(userAuth){
         const userRef=await createUserProfileDocument(userAuth);
         userRef.onSnapshot(snapShot=>{
           setcurrrentuser({
               id:snapShot.id,
               ...snapShot.data()
             
           })
         })
        }
       setcurrrentuser(userAuth)
     })
      

   }


   componentWillUnmount(){
     this.unsubscribefromFromAuth();
   }

  render(){
  return (
    <div>
    <Header    />
      <Switch>
      
       
        <Route path='/shop' exact component={ShopPage} />
        <Route path='/auth' exact render={()=>
          this.props.currentUser ? (
            <Redirect to='/' />
            ):
            (<Auth/>)
          }/>
        <Route path ='/hats'  component={HatsPage}></Route>
        <Route exact path='/'  component={HomePage} />
        <Route path='/checkout' component={checkoutpage}/>
      </Switch>
      <Sugar background={'#000000'} color={'#FFFFFF'}/>
    </div>
  )
  }
}

const mapStateToProps=({user})=>({
  currentUser:user.currentUser,

})

const mapDispatchToProps=dispatch=>({
  setcurrrentuser:user=>dispatch(setcurrrentuser(user))

})



export default connect(mapStateToProps,mapDispatchToProps)(App);