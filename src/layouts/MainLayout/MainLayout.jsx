import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <main className='container'>
      {children}
    </main>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MainLayout };