
import Header from "../components/Header"
import Menubar from "../components/Menubar"


const Home = (props) => {


    


    return (
       <>
        <Header  userName={props.user} role={props.role}/>
        <Menubar/>

        
       </>
    )
}

export default Home;
