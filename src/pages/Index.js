import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Er. Kunal</Link></h2>
          <p>
          Hello ! I am Er. Kunal Kumar hail from Bhehokhara,<b>Mali</b> by caste, Hindu by religion, Indian by Article 5 (Constitution of India),workaholic by nature, Professional by choice, Amicable by sacrament, philanthropist by soul,passionate about food,factual by faith, Did B.Tech in Computer science and Engg from govt college(DCE Darbhanga) scored 8.2 CGPA, cracked <b>BCECE</b>, <b>GATE</b> several times Banking and other Govt exam, waiting for Joining of Senior secandry<b>Computer Teacher</b>.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/biodata">Biodata</Link>, {' '}
        <Link to="/family">Family</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
