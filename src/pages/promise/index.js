import React from 'react';
import {
  Button
} from 'antd';

const PromiseScreen = () => {
  const onButtonClick = () => {
    let a = {};
    const p = new Promise((resolve, reject) => {
      console.log('promise');
      // a.aaa();
      // resolve('ok');
      // throw new Error('sb');

      // try {
      //   // reject(new Error('sb'));
      //   throw new Error('sb');
      // } catch (error) {
      //   console.log(`1.${error}`);
      // }
    });
    p.finally(() => {
      console.log('finally');
    });
    
    // p.then(data => {
    //   throw new Error('sb');
    // }).catch(error => {
    //   console.log(`4.${error}`);
    // });
    // p.then(data => {
    //   throw new Error('sb');
    // }, error => {
    //   console.log(`3.${error}`);
    // });
    // p.catch(error => {
    //   console.log(`2.${error}`);
    // });
    // a.aaa();
    console.log(p);
    console.log('go');
  };
  const onRejectClick = () => {
    const p = Promise.reject('reject');
    console.table(p);
  };
  return (
    <div>
      <Button onClick={onButtonClick}>button</Button>
      <Button onClick={onRejectClick}>reject</Button>
    </div>
  );
};

export default PromiseScreen;