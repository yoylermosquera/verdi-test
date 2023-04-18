import React from 'react';
import styles from '@/styles/components/spinner/spinner.module.scss';

const Spinner = () => {
  return (
    <div className="flex w-full h-full self-center items-center justify-center">
      <span className={`${styles.loader__spinner}`}></span>
    </div>
  );
};

export default Spinner;
