import Header from '../../components/header/Header'
import Card from '../../components/body-card/Card'
import "../../components/header/header.css"
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div>
      <Card/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Home;