import PropTypes from 'prop-types';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = ({children,fullPage}) => (
  <>
    <ScrollToTop />
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {children}
      </div>
      {fullPage ? null : <SideBar />}
    </div>
    </>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
};

export default Main;
