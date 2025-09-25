import Grid from '@mui/material/Grid';
import { ProjectCard } from './components/ProjectCard';
import { ProjectsDiv } from './styled-components';


export default function Projects() {
  const imgISO = "/assets/img/iso.png"
  const imgTC = "/assets/img/tuc.png"
  const imgBar = "/assets/img/bar.jpeg"
  const imgGlobal = "/assets/img/global.png"
  const imgMA = "/assets/img/Muni.png"
  const imgST = "/assets/img/IT2.png"

  

  return (
    <ProjectsDiv>
        <Grid container direction="row" justifyContent="space-around" alignItems="top" spacing={2} >
          <Grid item xs={10} md= {5.5} lg={3.5}>
              <ProjectCard 
              logo='BF' 
              color='deepPurple[500]'
              title='Bookflea library rebrand' 
              date='Finished 2025' 
              short={'This app have a stock control and also a buying system for a book store'}
              img={imgISO}
              alt='ISO 9001'
              detail='Redesign of the Bookflea library system. The system includes stock control and a purchasing system for a bookstore. The project was completed in 2025.' 
              web={true}
              mobile={true} />
          </Grid> 
          <Grid item xs={10} md= {5.5} lg={3.5}  >
            
            <ProjectCard 
              logo='PC' 
              color='deepOrange[500]'
              title='Prisma connections' 
              date='2025' 
              short={'This system is created to manage the conexion of prisma'}
              img={imgTC}
              alt='Tucuman Mascotas'
              detail='This web page is created to manage the conexion of prisma. It is made in React and Node.js. It has a dashboard to manage the different connections of prisma in place to test the success of the connections direct with the payways'
              web={true}
              mobile={false}/>
          </Grid>
          <Grid item xs={10} md= {5.5} lg={3.5} >
            
            <ProjectCard 
              logo='GA' 
              color='deepOrange[500]'
              title='Gastronomic App' 
              date='in course since 2023' 
              short={'This app has being created for the management of a gastronomic business. It  manages the menu, the orders, the employees as well as the clients'}
              img={imgBar}
              alt='Gastronomic App'
              detail='App created on Genexus, has multiple modules that allow adapt the software 100% to the requeriments of the client.'
              web={true}
              mobile={true}/>
          </Grid>
          <Grid item xs={10} md= {5.5} lg={3.5}>
              <ProjectCard 
              logo='MC' 
              color='deepPurple[500]'
              title='Mecatrónica Carbajal' 
              date='made in 2025' 
              short={'This is a stock system for a mechanical workshop'}
              img={imgGlobal}
              alt='ISO 9001'
              detail='Stock system for a mechanical workshop. The system includes stock control and a monetary system for the services provided by the workshop. The project was completed in 2025.'
              web={true}
              mobile={true} />
          </Grid> 
          <Grid item xs={10} md= {5.5} lg={3.5}  >
            
            <ProjectCard 
              logo='BG' 
              color='deepOrange[500]'
              title='Blog de café' 
              date='in course since 2023' 
              short={'This website is a blog about coffee'}
              img={imgMA}
              alt='Muni App'
              detail='A local coffe bar asked me to create a blog about coffee. I made it with React and Node.js. It has a dashboard to manage the different posts and comments of the blog, and also sell the courses they offer about coffee.'
              web={true}
              mobile={true}/>
          </Grid>
          <Grid item xs={10} md= {5.5} lg={3.5} >
            
            <ProjectCard 
              logo='CM' 
              color='deepOrange[500]'
              title='Cryptocurrency consulting' 
              date='in course since 2022' 
              short={'This web calculate the cripto you prefer in the currency you want'}
              img={imgST}
              alt='Crypto Market'
              detail='We toke the values of criptocurrencies from different APIs and we show the user the value of the crypto he wants in the currency he wants.'
              web={true}
              mobile={false}/>
          </Grid>
        </Grid>
      
    </ProjectsDiv>
  )
}