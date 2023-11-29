import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => (
  <ProgressBar
    height="80"
    width="80"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{ display: 'flex', width: '100%', justifyContent: 'center' }}
    wrapperClass="progress-bar-wrapper"
    borderColor='#49796B'
    barColor="#49796B"
  />
);
